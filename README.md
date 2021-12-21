# PARSE MODULE

<br>

## Feature

javascript parse utility.

<br>

## Demo

- [https://yama-dev.github.io/js-parse-module/examples/](https://yama-dev.github.io/js-parse-module/examples/)

<br>

## Installation,Download

- npm -> [https://www.npmjs.com/package/@yama-dev/js-parse-module](https://www.npmjs.com/package/@yama-dev/js-parse-module)

<br>

## Using

### NPM

``` bash
# install npm.
npm install --save-dev @yama-dev/js-parse-module
```

``` javascript
// import.
import PARSE_MODULE from 'js-parse-module';
```

### Browser

``` html
<script src="./js-parse-module.js"></script>

<script>
  let str = PARSE_MODULE.Str2AddLink('https://wwww.google.com');
  console.log(str);
</script>

<script>
  console.log(PARSE_MODULE.Str2AddLink('https://www.google.com'));
  -> <a href="https://www.google.com" target="_blank">https://www.google.com</a>

  console.log(PARSE_MODULE.Str2AddLink('https://www.google.com',''));
  -> <a href="https://www.google.com" target="">https://www.google.com</a>

  console.log(PARSE_MODULE.Str2AddLink('https://www.google.com','_blank'));
  -> <a href="https://www.google.com" target="_blank">https://www.google.com</a>

  console.log(PARSE_MODULE.Str2AddLink('https://www.google.com','_self'));
  -> <a href="https://www.google.com" target="_self">https://www.google.com</a>

  console.log(PARSE_MODULE.Str2AddLinkHashtag());
  -> false

  console.log(PARSE_MODULE.Str2AddLinkHashtag(''));
  -> false

  console.log(PARSE_MODULE.Str2AddLinkHashtag('#tags'));
  -> <a href="https://twitter.com/search?q=%23tags" target="_blank">#tags</a>

  console.log(PARSE_MODULE.Str2AddLinkHashtag('#tags','_self'));
  -> <a href="https://twitter.com/search?q=%23tags" target="_self">#tags</a>

  console.log(PARSE_MODULE.Str2DateFormat());
  -> false

  console.log(PARSE_MODULE.Str2DateFormat('2018.6.9'));
  -> 2018-06-09

  console.log(PARSE_MODULE.Str2DateFormat('2018/6/9'));
  -> 2018-06-09

  console.log(PARSE_MODULE.Str2DateFormat('2018-6-9'));
  -> 2018-06-09

  console.log(PARSE_MODULE.Str2DateFormat('2018.06.09'));
  -> 2018-06-09

  console.log(PARSE_MODULE.Str2DateFormat('2018/06/09'));
  -> 2018-06-09

  console.log(PARSE_MODULE.Str2DateFormat('2018年6月9日'));
  -> 2018-06-09

  console.log(PARSE_MODULE.Str2DateFormat('2018-06-09'));
  -> 2018-06-09

  console.log(PARSE_MODULE.Str2Mustache());
  -> false

  console.log(PARSE_MODULE.Str2Mustache('test {{ str_test }} text {{ str_empty }} sample', {str_test: '123456789'}, true));
  -> test 123456789 text  sample

  console.log(PARSE_MODULE.Str2Mustache('test {{ str_test }} text {{ str_empty }} sample', {str_test: '123456789'}, false));
  -> test 123456789 text {{ str_empty }} sample

  console.log(PARSE_MODULE.Str2zeroPadding());
  -> false

  console.log(PARSE_MODULE.Str2zeroPadding(123));
  -> 123

  console.log(PARSE_MODULE.Str2zeroPadding(123,10));
  -> 0000000123

  console.log(PARSE_MODULE.Str2zeroPadding(123456789,10));
  -> 0123456789

  console.log(PARSE_MODULE.Str2zeroPadding('yama-dev',12,'@'));
  -> @@@@yama-dev
</script>
```

<br>

## API

### Str2AddLink

__Str2AddLink(str, target);__

| Parameter | Type   | Default     | Description                          |
| :---      | :---:  | :---:       | :---                                 |
| str       | string | - ※省略不可 | 文字列にhtmlのリンクが付与されます。 |
| target    | string | '_blank '   | リンクのtarget属性を指定します。     |

<br>

### Str2AddLinkHashtag

__Str2AddLinkHashtag(str, target);__

| Parameter | Type   | Default     | Description                                        |
| :---      | :---:  | :---:       | :---                                               |
| str       | string | - ※省略不可 | 文字列(ハッシュタグ)にhtmlのリンクが付与されます。 |
| target    | string | '_blank'    | リンクのtarget属性を指定します。                   |

### Str2DateFormat

__Str2DateFormat(str);__

| Parameter | Type   | Default     | Description                                  |
| :---      | :---:  | :---:       | :---                                         |
| str       | string | - ※省略不可 | 文字列(日付)を`yyyy-mm-dd`の形に変換します。 |

1

### Str2Mustache

__Str2Mustache(str, obj, flg);__

| Parameter | Type    | Default     | Description                                      |
| :---      | :---:   | :---:       | :---                                             |
| str       | string  | - ※省略不可 | ムスタッシュ記法で記述された文字列を変換します。 |
| obj       | object  | - ※省略不可 | 置き換える文字列をオブジェクト形式で指定します。 |
| flg       | boolean | true        | 該当しないセパレータを除去するか。               |

### Str2zeroPadding

__Str2zeroPadding(str, length, padstr);__

| Parameter | Type   | Default     | Description                                        |
| :---      | :---:  | :---:       | :---                                               |
| str       | string | - ※省略不可 | 文字列(ハッシュタグ)にhtmlのリンクが付与されます。 |
| length    | number | - ※省略不可 | 出力する桁数を指定します。                         |
| padstr    | string | '0'         | パディングで追加する文字列を変更します。           |

<br><br><br>

## Dependencies

none

<br><br><br>

___

## Licence

[MIT](https://github.com/yama-dev/js-parse-module/blob/master/LICENSE)

<br>

## Author

[yama-dev](https://github.com/yama-dev)

