- https://regex101.com/r/VyUdyw/1
- https://blog.csdn.net/sinat_25185707/article/details/80844819
- 分组构造 https://learn.microsoft.com/zh-cn/dotnet/standard/base-types/grouping-constructs-in-regular-expressions
- https://www.bilibili.com/video/BV1hi42197pU
- https://stackoverflow.com/questions/41351903/how-can-i-match-a-markdown-code-block-with-regex

- a literal text
`(?:(?!<\/?block>).)*? ` 
- any char, zero or more but as few as possible occurrences, that does not start
`Name\s+data3` 
- Name, one or more whitespaces, data3
`\s`
- a whitespace
`.*?` 
- any zero or more chars as few as possible


## common tokens
## general tokens
## anchors
## Meta sequences
## Quantifiers
## Group Constructs
- (?:...)
- 匹配所有包住的
A non-capturing group allows you to apply quantifiers to part of your regex but does not capture/assign an ID.

For example, repeating 1-3 digits and a period 3 times can be done like this: /(?:\d{1,3}\.){3}\d{1,3}/
## Character Classes
## Flags/Modifiers
## substitution

```shell
<block(?:(?!<\/?block>).)*?Name\s+data3\s.*?<\/block>
# <block 字面
# (?:(?!<\/?block>).)*? 任何字符，0或多个，, zero or more but as few as possible occurrences, that does not start <block> or </block> string
# Name\s+data3 Name后面 接1个或多个空格 data3
# \s 一个空格
# .*? 尽可能少的0个或多个字符
# <\/block> 字面，其中 /转义
```

## Laravel中的正则表达式
```php
$pattern = "/ 
            <
                \s*
                x[-\:]([\w\-\:\.]*)
                (?<attributes>
                    (?:
                        \s+
                        (?:
                            (?:
                                @(?:class)(\( (?: (?>[^()]+) | (?-1) )* \))
                            )
                            |
                            (?:
                                @(?:style)(\( (?: (?>[^()]+) | (?-1) )* \))
                            )
                            |
                            (?:
                                \{\{\s*\\\$attributes(?:[^}]+?)?\s*\}\}
                            )
                            |
                            (?:
                                (\:\\\$)(\w+)
                            )
                            |
                            (?:
                                [\w\-:.@%]+
                                (
                                    =
                                    (?:
                                        \\\"[^\\\"]*\\\"
                                        |
                                        \'[^\']*\'
                                        |
                                        [^\'\\\"=<>]+
                                    )
                                )?
                            )
                        )
                    )*
                    \s*
                )
                (?<![\/=\-])
            >
        /x";
```


(?<!\\)
(?<code_all>
(?<code_start>\`{1,})
(?<code_content>.+?)
(?<!`)   
     \g{code_start}        
     (?!`)                   # And not followed by a backtick
)

```php
// 匹配代码块中的内容
(?:(?<code_start>\`{3}).*?\n)
(?<code_content>[\s\S]*?)
(?<code_end>\`{3})

```
## 如何只匹配代码块外的内容
- 参考：https://regex101.com/r/LCgI5P/2

## 匹配最后一次出现的字符
匹配最后一次出现的/
```php
/(?=((?!/).)*$
```

## 匹配以某个字符开头和以某个字符结尾的字符串，不包含开头结尾
匹配以 id: 开头 以 ,skip 结尾 的中间部分
```php
.*id:\"(.*)\",skip.*
```

## Backtracking Control Verbs
> https://www.rexegg.com/backtracking-control-verbs.php

## php正则之递归
- https://www.bilibili.com/video/BV1LM411c7AC

https://www.rexegg.com/regex-best-trick.php

## 条件子组
- https://www.php.net/manual/zh/regexp.reference.conditional.php
(?(condition)yes-pattern|no-pattern)