# Vue 与 Web Components {#vue-and-web-components}

[Web Components](https://developer.mozilla.org/en-US/docs/Web/Web_Components) 是一组 web 原生 API 的统称，允许开发者创建可复用的自定义元素 (custom elements)。

我们认为 Vue 和 Web Components 是互补的技术。Vue 为使用和创建自定义元素提供了出色的支持。无论你是将自定义元素集成到现有的 Vue 应用中，还是使用 Vue 来构建和分发自定义元素都很方便。

## 在 Vue 中使用自定义元素 {#using-custom-elements-in-vue}

Vue [在 Custom Elements Everywhere 测试中取得了 100% 的分数](https://custom-elements-everywhere.com/libraries/vue/results/results.html)。在 Vue 应用中使用自定义元素基本上与使用原生 HTML 元素的效果相同，但需要留意以下几点：

### 跳过组件解析 {#skipping-component-resolution}

默认情况下，Vue 会将任何非原生的 HTML 标签优先当作 Vue 组件处理，而将“渲染一个自定义元素”作为后备选项。这会在开发时导致 Vue 抛出一个“解析组件失败”的警告。要让 Vue 知晓特定元素应该被视为自定义元素并跳过组件解析，我们可以指定 [`compilerOptions.isCustomElement` 这个选项](/api/application#app-config-compileroptions)。

如果在开发 Vue 应用时进行了构建配置，则应该在构建配置中传递该选项，因为它是一个编译时选项。

#### 浏览器内编译时的示例配置 {#example-in-browser-config}

```js
// 仅在浏览器内编译时才会工作
// 如果使用了构建工具，请看下面的配置示例
app.config.compilerOptions.isCustomElement = (tag) => tag.includes('-')
```

#### Vite 示例配置 {#example-vite-config}

```js
// vite.config.js
import vue from '@vitejs/plugin-vue'

export default {
  plugins: [
    vue({
      template: {
        compilerOptions: {
          // 将所有带短横线的标签名都视为自定义元素
          isCustomElement: (tag) => tag.includes('-')
        }
      }
    })
  ]
}
```

#### Vue CLI 示例配置 {#example-vue-cli-config}

```js
// vue.config.js
module.exports = {
  chainWebpack: (config) => {
    config.module
      .rule('vue')
      .use('vue-loader')
      .tap((options) => ({
        ...options,
        compilerOptions: {
          // 将所有以 ion- 开头的标签都视为自定义元素
          isCustomElement: (tag) => tag.startsWith('ion-')
        }
      }))
  }
}
```

### 传递 DOM 属性 {#passing-dom-properties}

由于 DOM attribute 只能为字符串值，因此我们只能使用 DOM 对象的属性来传递复杂数据。当为自定义元素设置 props 时，Vue 3 将通过 `in` 操作符自动检查该属性是否已经存在于 DOM 对象上，并且在这个 key 存在时，更倾向于将值设置为一个 DOM 对象的属性。这意味着，在大多数情况下，如果自定义元素遵循[推荐的最佳实践](https://web.dev/custom-elements-best-practices/)，你就不需要考虑这个问题。

然而，也会有一些特别的情况：必须将数据以一个 DOM 对象属性的方式传递，但该自定义元素无法正确地定义/反射这个属性 (因为 `in` 检查失败)。在这种情况下，你可以强制使用一个 `v-bind` 绑定、通过 `.prop` 修饰符来设置该 DOM 对象的属性：

```vue-html
<my-element :user.prop="{ name: 'jack' }"></my-element>

<!-- 等价简写 -->
<my-element .user="{ name: 'jack' }"></my-element>
```

## 使用 Vue 构建自定义元素 {#building-custom-elements-with-vue}

自定义元素的主要好处是，它们可以在使用任何框架，甚至是在不使用框架的场景下使用。当你面向的最终用户可能使用了不同的前端技术栈，或是当你希望将最终的应用与它使用的组件实现细节解耦时，它们会是理想的选择。

### defineCustomElement {#definecustomelement}

Vue 提供了一个和定义一般 Vue 组件几乎完全一致的 [`defineCustomElement`](/api/custom-elements#definecustomelement) 方法来支持创建自定义元素。这个方法接收的参数和 [`defineComponent`](/api/general#definecomponent) 完全相同。但它会返回一个继承自 `HTMLElement` 的自定义元素构造器：

```vue-html
<my-vue-element></my-vue-element>
```

```js
import { defineCustomElement } from 'vue'

const MyVueElement = defineCustomElement({
  // 这里是同平常一样的 Vue 组件选项
  props: {},
  emits: {},
  template: `...`,

  // defineCustomElement 特有的：注入进 shadow root 的 CSS
  styles: [`/* inlined css */`]
})

// 注册自定义元素
// 注册之后，所有此页面中的 `<my-vue-element>` 标签
// 都会被升级
customElements.define('my-vue-element', MyVueElement)

// 你也可以编程式地实例化元素：
// （必须在注册之后）
document.body.appendChild(
  new MyVueElement({
    // 初始化 props（可选）
  })
)
```

#### 生命周期 {#lifecycle}

- 当该元素的 [`connectedCallback`](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements#using_the_lifecycle_callbacks) 初次调用时，一个 Vue 自定义元素会在内部挂载一个 Vue 组件实例到它的 shadow root 上。

- 当此元素的 `disconnectedCallback` 被调用时，Vue 会在一个微任务后检查元素是否还留在文档中。

  - 如果元素仍然在文档中，那么说明它是一次移动操作，组件实例将被保留；

  - 如果该元素不再存在于文档中，那么说明这是一次移除操作，组件实例将被销毁。

#### Props {#props}

- 所有使用 `props` 选项声明了的 props 都会作为属性定义在该自定义元素上。Vue 会自动地、恰当地处理其作为 attribute 还是属性的反射。

  - attribute 总是根据需要反射为相应的属性类型。

  - 基础类型的属性值 (`string`，`boolean` 或 `number`) 会被反射为 attribute。

- 当它们被设为 attribute 时 (永远是字符串)，Vue 也会自动将以 `Boolean` 或 `Number` 类型声明的 prop 转换为所期望的类型。比如下面这样的 props 声明：

  ```js
  props: {
    selected: Boolean,
    index: Number
  }
  ```

  并以下面这样的方式使用自定义元素：

  ```vue-html
  <my-element selected index="1"></my-element>
  ```

  在组件中，`selected` 会被转换为 `true` (boolean 类型值) 而 `index` 会被转换为 `1` (number 类型值)。

#### 事件 {#events}

通过 `this.$emit` 或者 setup 中的 `emit` 触发的事件都会通过以 [CustomEvents](https://developer.mozilla.org/en-US/docs/Web/Events/Creating_and_triggering_events#adding_custom_data_%E2%80%93_customevent) 的形式从自定义元素上派发。额外的事件参数 (payload) 将会被暴露为 CustomEvent 对象上的一个 `detail` 数组。

#### 插槽 {#slots}

在一个组件中，插槽将会照常使用 `<slot/>` 渲染。然而，当使用最终的元素时，它只接受[原生插槽的语法](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_templates_and_slots)：

- 不支持[作用域插槽](/guide/components/slots#scoped-slots)。

- 当传递具名插槽时，应使用 `slot` attribute 而不是 `v-slot` 指令：

  ```vue-html
  <my-element>
    <div slot="named">hello</div>
  </my-element>
  ```

#### 依赖注入 {#provide-inject}

[Provide / Inject API](/guide/components/provide-inject#provide-inject) 和[相应的组合式 API](/api/composition-api-dependency-injection#provide) 在 Vue 定义的自定义元素中都可以正常工作。但是请注意，依赖关系**只在自定义元素之间**起作用。例如一个 Vue 定义的自定义元素就无法注入一个由常规 Vue 组件所提供的属性。

#### 应用级配置 <sup class="vt-badge" data-text="3.5+" /> {#app-level-config}

你可以使用 `configureApp` 选项来配置 Vue 自定义元素的应用实例：

```js
defineCustomElement(MyComponent, {
  configureApp(app) {
    app.config.errorHandler = (err) => {
      /* ... */
    }
  }
})
```

### 将单文件组件编译为自定义元素 {#sfc-as-custom-element}

`defineCustomElement` 也可以搭配 Vue 单文件组件 (SFC) 使用。但是，根据默认的工具链配置，SFC 中的 `<style>` 在生产环境构建时仍然会被抽取和合并到一个单独的 CSS 文件中。当正在使用单文件组件编写自定义元素时，通常需要改为注入 `<style>` 标签到自定义元素的 shadow root 上。

官方的单文件组件工具链支持以“自定义元素模式”导入单文件组件 (需要 `@vitejs/plugin-vue@^1.4.0` 或 `vue-loader@^16.5.0`)。一个以自定义元素模式加载的单文件组件将会内联其 `<style>` 标签为 CSS 字符串，并将其暴露为组件的 `styles` 选项。这会被 `defineCustomElement` 提取使用，并在初始化时注入到元素的 shadow root 上。

要开启这个模式，只需要将你的组件文件以 `.ce.vue` 结尾即可：

```js
import { defineCustomElement } from 'vue'
import Example from './Example.ce.vue'

console.log(Example.styles) // ["/* 内联 css */"]

// 转换为自定义元素构造器
const ExampleElement = defineCustomElement(Example)

// 注册
customElements.define('my-example', ExampleElement)
```

如果你想要自定义如何判断是否将文件作为自定义元素导入 (例如将所有的单文件组件都视为用作自定义元素)，你可以通过给构建插件传递相应插件的 `customElement` 选项来实现：

- [@vitejs/plugin-vue](https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#using-vue-sfcs-as-custom-elements)
- [vue-loader](https://github.com/vuejs/vue-loader/tree/next#v16-only-options)

### 基于 Vue 构建自定义元素库 {#tips-for-a-vue-custom-elements-library}

当使用 Vue 构建自定义元素时，该元素将依赖于 Vue 的运行时。这会有大约 16kb 的基本打包大小，并视功能的使用情况而增长。这意味着如果只编写一个自定义元素，那么使用 Vue 并不是理想的选择。你可能想要使用原生 JavaScript、[petite-vue](https://github.com/vuejs/petite-vue)，或其他框架以追求更小的运行时体积。但是，如果你需要编写的是一组具有复杂逻辑的自定义元素，那么这个基本体积是非常合理的，因为 Vue 允许用更少的代码编写每个组件。在一起发布的元素越多，收益就会越高。

如果自定义元素将在同样使用 Vue 的应用中使用，那么你可以选择将构建包中的 Vue 外部化 (externalize)，这样这些自定义元素将与宿主应用使用同一份 Vue。

建议按元素分别导出构造函数，以便用户可以灵活地按需导入它们，并使用期望的标签名称注册它们。你还可以导出一个函数来方便用户自动注册所有元素。下面是一个 Vue 自定义元素库的入口文件示例：

```js
// elements.js

import { defineCustomElement } from 'vue'
import Foo from './MyFoo.ce.vue'
import Bar from './MyBar.ce.vue'

const MyFoo = defineCustomElement(Foo)
const MyBar = defineCustomElement(Bar)

// 分别导出元素
export { MyFoo, MyBar }

export function register() {
  customElements.define('my-foo', MyFoo)
  customElements.define('my-bar', MyBar)
}
```

消费者可以使用 Vue 文件中的元素

```vue
<script setup>
import { register } from 'path/to/elements.js'
register()
</script>

<template>
  <my-foo ...>
    <my-bar ...></my-bar>
  </my-foo>
</template>
```

或在任何其他框架中，如 JSX，使用自定义名称：

```jsx
import { MyFoo, MyBar } from 'path/to/elements.js'

customElements.define('some-foo', MyFoo)
customElements.define('some-bar', MyBar)

export function MyComponent() {
  return <>
    <some-foo ...>
      <some-bar ...></some-bar>
    </some-foo>
  </>
}
```

### 基于 Vue 的 Web Components 和 TypeScript {#web-components-and-typescript}

在编写 Vue SFC 模板时，你可能想要为你的 Vue 组件添加[类型检查](/guide/scaling-up/tooling.html#typescript)，包括那些被定义为自定义元素的组件。

自定义元素是使用原生 API 全局注册的，所以默认情况下，当在 Vue 模板中使用时，它们不会有类型推断。为了给注册为自定义元素的 Vue 组件提供类型支持，我们可以通过扩充 [`GlobalComponents` 接口](https://github.com/vuejs/language-tools/blob/master/packages/vscode-vue/README.md#usage)来注册全局组件类型定义，以便在 Vue 模板中进行类型检查 (JSX 用户可以改为扩充 [`JSX.IntrinsicElements`](https://www.typescriptlang.org/docs/handbook/jsx.html#intrinsic-elements) 类型，此处省略这部分内容)。

下面介绍如何使用 Vue 创建的自定义元素定义类型的方法：

```typescript
import { defineCustomElement } from 'vue'

// 导入 Vue 组件。
import SomeComponent from './src/components/SomeComponent.ce.vue'

// 将 Vue 组件转为自定义元素类。
export const SomeElement = defineCustomElement(SomeComponent)

// 记得在浏览器中注册元素类。
customElements.define('some-element', SomeElement)

// 将新元素类型添加到 Vue 的 GlobalComponents 类型中。
declare module 'vue' {
  interface GlobalComponents {
    // 请务必在此处输入 Vue 组件类型（SomeComponent，*而不是* SomeElement）。
    // 自定义元素的名称中需要连字符，因此请在此处使用连字符元素名称。
    'some-element': typeof SomeComponent
  }
}
```

## 非 Vue Web Components 和 TypeScript {#non-vue-web-components-and-typescript}
<!-- TODO: translation -->
Here is the recommended way to enable type checking in SFC templates of Custom
Elements that are not built with Vue.

> [!Note]
> This approach is one possible way to do it, but it may vary depending on the
> framework being used to create the custom elements.

Suppose we have a custom element with some JS properties and events defined, and
it is shipped in a library called `some-lib`:

```ts
// file: some-lib/src/SomeElement.ts

// Define a class with typed JS properties.
export class SomeElement extends HTMLElement {
  foo: number = 123
  bar: string = 'blah'

  lorem: boolean = false

  // This method should not be exposed to template types.
  someMethod() {
    /* ... */
  }

  // ... implementation details omitted ...
  // ... assume the element dispatches events named "apple-fell" ...
}

customElements.define('some-element', SomeElement)

// This is a list of properties of SomeElement that will be selected for type
// checking in framework templates (f.e. Vue SFC templates). Any other
// properties will not be exposed.
export type SomeElementAttributes = 'foo' | 'bar'

// Define the event types that SomeElement dispatches.
export type SomeElementEvents = {
  'apple-fell': AppleFellEvent
}

export class AppleFellEvent extends Event {
  /* ... details omitted ... */
}
```

The implementation details have been omitted, but the important part is that we
have type definitions for two things: prop types and event types.

Let's create a type helper for easily registering custom element type
definitions in Vue:

```ts
// file: some-lib/src/DefineCustomElement.ts

// We can re-use this type helper per each element we need to define.
type DefineCustomElement<
  ElementType extends HTMLElement,
  Events extends EventMap = {},
  SelectedAttributes extends keyof ElementType = keyof ElementType
> = new () => ElementType & {
  // Use $props to define the properties exposed to template type checking. Vue
  // specifically reads prop definitions from the `$props` type. Note that we
  // combine the element's props with the global HTML props and Vue's special
  // props.
  /** @deprecated Do not use the $props property on a Custom Element ref, this is for template prop types only. */
  $props: HTMLAttributes &
    Partial<Pick<ElementType, SelectedAttributes>> &
    PublicProps

  // Use $emit to specifically define event types. Vue specifically reads event
  // types from the `$emit` type. Note that `$emit` expects a particular format
  // that we map `Events` to.
  /** @deprecated Do not use the $emit property on a Custom Element ref, this is for template prop types only. */
  $emit: VueEmit<Events>
}

type EventMap = {
  [event: string]: Event
}

// This maps an EventMap to the format that Vue's $emit type expects.
type VueEmit<T extends EventMap> = EmitFn<{
  [K in keyof T]: (event: T[K]) => void
}>
```

> [!Note]
> We marked `$props` and `$emit` as deprecated so that when we get a `ref` to a
> custom element we will not be tempted to use these properties, as these
> properties are for type checking purposes only when it comes to custom elements.
> These properties do not actually exist on the custom element instances.

Using the type helper we can now select the JS properties that should be exposed
for type checking in Vue templates:

```ts
// file: some-lib/src/SomeElement.vue.ts

import {
  SomeElement,
  SomeElementAttributes,
  SomeElementEvents
} from './SomeElement.js'
import type { Component } from 'vue'
import type { DefineCustomElement } from './DefineCustomElement'

// Add the new element type to Vue's GlobalComponents type.
declare module 'vue' {
  interface GlobalComponents {
    'some-element': DefineCustomElement<
      SomeElement,
      SomeElementAttributes,
      SomeElementEvents
    >
  }
}
```

Suppose that `some-lib` builds its source TypeScript files into a `dist/` folder. A user of
`some-lib` can then import `SomeElement` and use it in a Vue SFC like so:

```vue
<script setup lang="ts">
// This will create and register the element with the browser.
import 'some-lib/dist/SomeElement.js'

// A user that is using TypeScript and Vue should additionally import the
// Vue-specific type definition (users of other frameworks may import other
// framework-specific type definitions).
import type {} from 'some-lib/dist/SomeElement.vue.js'

import { useTemplateRef, onMounted } from 'vue'

const el = useTemplateRef('el')

onMounted(() => {
  console.log(
    el.value!.foo,
    el.value!.bar,
    el.value!.lorem,
    el.value!.someMethod()
  )

  // Do not use these props, they are `undefined` (IDE will show them crossed out):
  el.$props
  el.$emit
})
</script>

<template>
  <!-- Now we can use the element, with type checking: -->
  <some-element
    ref="el"
    :foo="456"
    :blah="'hello'"
    @apple-fell="
      (event) => {
        // The type of `event` is inferred here to be `AppleFellEvent`
      }
    "
  ></some-element>
</template>
```

If an element does not have type definitions, the types of the properties and events can be
defined in a more manual fashion:

```vue
<script setup lang="ts">
// Suppose that `some-lib` is plain JS without type definitions, and TypeScript
// cannot infer the types:
import { SomeElement } from 'some-lib'

// We'll use the same type helper as before.
import { DefineCustomElement } from './DefineCustomElement'

type SomeElementProps = { foo?: number; bar?: string }
type SomeElementEvents = { 'apple-fell': AppleFellEvent }
interface AppleFellEvent extends Event {
  /* ... */
}

// Add the new element type to Vue's GlobalComponents type.
declare module 'vue' {
  interface GlobalComponents {
    'some-element': DefineCustomElement<
      SomeElementProps,
      SomeElementEvents
    >
  }
}

// ... same as before, use a reference to the element ...
</script>

<template>
  <!-- ... same as before, use the element in the template ... -->
</template>
```

Custom Element authors should not automatically export framework-specific custom
element type definitions from their libraries, for example they should not
export them from an `index.ts` file that also exports the rest of the library,
otherwise users will have unexpected module augmentation errors. Users should
import the framework-specific type definition file that they need.

## Web Components vs. Vue Components {#web-components-vs-vue-components}

一些开发者认为应该避免使用框架专有的组件模型，而改为全部使用自定义元素来构建应用，因为这样可以使应用“永不过时”。在这里，我们将解释为什么我们认为这样的想法过于简单。

自定义元素和 Vue 组件之间确实存在一定程度的功能重叠：它们都允许我们定义具有数据传递、事件发射和生命周期管理的可重用组件。然而，Web Components 的 API 相对来说是更底层的和更基础的。要构建一个实际的应用，我们需要相当多平台没有涵盖的附加功能：

- 一个声明式的、高效的模板系统；

- 一个响应式的，利于跨组件逻辑提取和重用的状态管理系统；

- 一种在服务器上呈现组件并在客户端“激活”(hydrate) 组件的高性能方法 (SSR)，这对 SEO 和 [LCP 这样的 Web 关键指标](https://web.dev/vitals/)非常重要。原生自定义元素 SSR 通常需要在 Node.js 中模拟 DOM，然后序列化更改后的 DOM，而 Vue SSR 则尽可能地将其编译为拼接起来的字符串，这会高效得多。

Vue 的组件模型在设计时同时兼顾了这些需求，因此是一个更内聚的系统。

当你的团队有足够的技术水平时，可能可以在原生自定义元素的基础上构建具备同等功能的组件。但这也意味着你将承担长期维护内部框架的负担，同时失去了像 Vue 这样成熟的框架生态社区所带来的收益。

也有一些框架使用自定义元素作为其组件模型的基础，但它们都不可避免地要引入自己的专有解决方案来解决上面列出的问题。使用这些框架便意味着对它们针对这些问题的技术决策买单。不管这类框架怎么宣传它们“永不过时”，它们其实都无法保证你以后永远不需要重构。

除此之外，我们还发现自定义元素存在以下限制：

- 贪婪 (eager) 的插槽求值会阻碍组件之间的可组合性。Vue 的[作用域插槽](/guide/components/slots#scoped-slots)是一套强大的组件组合机制，而由于原生插槽的贪婪求值性质，自定义元素无法支持这样的设计。贪婪求值的插槽也意味着接收组件时不能控制何时或是否创建插槽内容的节点。

- 在当下要想使用 shadow DOM 书写局部作用域的 CSS，必须将样式嵌入到 JavaScript 中才可以在运行时将其注入到 shadow root 上。这也导致了 SSR 场景下需要渲染大量重复的样式标签。虽然有一些[平台功能](https://github.com/whatwg/html/pull/4898/)在尝试解决这一领域的问题，但是直到现在还没有达到通用支持的状态，而且仍有生产性能 / SSR 方面的问题需要解决。可与此同时，Vue 的单文件组件本身就提供了 [CSS 局域化机制](/api/sfc-css-features)，并支持抽取样式到纯 CSS 文件中。

Vue 将始终紧跟 Web 平台的最新标准，如果平台的新功能能让我们的工作变得更简单，我们将非常乐于利用它们。但是，我们的目标是提供“好用，且现在就能用”的解决方案。这意味着我们在采用新的原生功能时需要保持客观、批判性的态度，并在原生功能完成度不足的时候选择更适当的解决方案。
