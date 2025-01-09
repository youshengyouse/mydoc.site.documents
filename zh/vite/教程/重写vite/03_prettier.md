# prettier
- https://github.com/prettier/prettier
- 文档: https://prettier.io/docs/en/

## 安装
```sh
pnpm i prettier
```

## 配置文件.prettierrc
```sh
# 当前目录 /www2024/0_common/js/mikejs
node --eval "fs.writeFileSync('.prettierrc.json','{}\n')" # 官方是生成.prettierrc文件，这里同vite一样，生成.json文件
```
vite官方
```json
{
  "semi": false, # 末尾不加分号
  "singleQuote": true, # 引号只用单引号，不用双引号
  "overrides": [ # 覆盖默认的配置
    {
      "files": ["*.json5"],
      "options": {
        "singleQuote": false,
        "quoteProps": "preserve"
      }
    },
    {
      "files": ["*.yml"],
      "options": {
        "singleQuote": false
      }
    }
  ]
}
```
选项一览表
| 英文 | 中文 | 选项 |值| 解释 |
|----|----|----|----|----|
|Print Width| 打印宽度 |  printWidth | 100 |  每行最多多少个字符换行|
|Tab Width| tab宽度 |  tabWidth | 4 |  tab缩进大小,默认为2|
|Tabs| 使用tab |  useTabs | true  |  使用tab缩进，默认false|
|Semicolons| 分号 |  semi | false | 使用分号, 默认true |
|Quotes| 引号 |  singleQuote | false |  使用单引号, 默认false(在jsx中配置无效, 默认都是双引号)|
|Quote Props| xxxx |  xxxx | xxxx |  yyyyy|
|JSX Quotes| xxxx |  xxxx | xxxx |  yyyyy|
|Trailing Commas| 行尾逗号 |  trailingComma | all |  行尾逗号,默认none,可选 none,es5,all,<br/> es5 包括es5中的数组、对象,all 包括函数对象等所有可选|   
|Bracket Spacing| 对象中的空格 |  bracketSpacing | false |  默认true,true: { foo: bar },false: {foo: bar}|
|Bracket Line| xxxx |  xxxx | xxxx |  yyyyy|
|[Deprecated] JSX Brackets| xxxx |  xxxx | xxxx |  yyyyy|
|Arrow Function Parentheses| xxxx |  xxxx | xxxx |  yyyyy|
|Range| xxxx |  xxxx | xxxx |  yyyyy|
|Parser| xxxx |  xxxx | xxxx |  yyyyy|
|File Path| xxxx |  xxxx | xxxx |  yyyyy|
|Require Pragma| xxxx |  xxxx | xxxx |  yyyyy|
|Insert Pragma| xxxx |  xxxx | xxxx |  yyyyy|
|Prose Wrap| xxxx |  xxxx | xxxx |  yyyyy|
|HTML Whitespace Sensitivity| xxxx |  xxxx | xxxx |  yyyyy|
|Vue files script and style tags indentation| xxxx |  xxxx | xxxx |  yyyyy|
|End of Line| xxxx |  xxxx | xxxx |  yyyyy|
|Embedded Language Formatting| xxxx |  xxxx | xxxx |  yyyyy|
|Single Attribute Per Line| xxxx |  xxxx | xxxx |  yyyyy|

常用推荐
```json
{
	"$schema": "http://json.schemastore.org/prettierrc",
	"printWidth": 100,
	"tabWidth": 4,
	"useTabs": true,
	"semi": false,
	"singleQuote": true,
	"quoteProps": "as-needed",
	"jsxSingleQuote": false,
	"trailingComma": "none",
	"bracketSpacing": true,
	"bracketSameLine": false,
	"arrowParens": "avoid",
	"rangeStart": 0,
	"rangeEnd": null,
	"parser": "",
	"plugins": [],
	"pluginSearchDirs": [],
	"filepath": "",
	"requirePragma": false,
	"insertPragma": false,
	"proseWrap": "preserve",
	"htmlWhitespaceSensitivity": "css",
	"endOfLine": "auto",
	"cursorOffset": -1,
	"overrides": [
		{
			"files": "*.test.js",
			"options": {
				"semi": false
			}
		},
		{
			"files": ["*.json5"],
			"options": {
				"singleQuote": false,
				"quoteProps": "preserve"
			}
		},
		{
			"files": ["*.yml", "*.yaml"],
			"options": {
				"singleQuote": true,
				"useTabs": false,
				"tabWidth": 2
			}
		},
		{
			"files": ["*.toml"],
			"options": {
				"singleQuote": true,
				"useTabs": false,
				"tabWidth": 2
			}
		},
		{
			"files": ["*.md"],
			"options": {
				"useTabs": false,
				"tabWidth": 2
			}
		},
		{
			"files": ".prettierrc",
			"options": {
				"parser": "json"
			}
		}
	]
}
```

{



    


    // JSX标签闭合位置 默认false
    // false: <div
    //          className=""
    //          style={{}}
    //       >
    // true: <div
    //          className=""
    //          style={{}} >
    "jsxBracketSameLine": false,
    // 箭头函数参数括号 默认avoid 可选 avoid| always
    // avoid 能省略括号的时候就省略 例如x => x
    // always 总是有括号
    "arrowParens": "avoid"
}


## 忽略格式文件 .prettierignore 
 ```sh
 node --eval "fs.writeFileSync('.prettierignore','# Ignore artifacts:\nbuild\ncoverage\n')"
 ```