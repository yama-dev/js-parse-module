# PARSE MODULE

<br>

## Feature

javascript parse utility library.

<br>

## Demo

## Installation,Download

- npm -> [https://www.npmjs.com/package/js-parse-module](https://www.npmjs.com/package/js-parse-module)

<br>

## Using

### NPM Usage

``` bash
# install npm.
npm install --save-dev js-parse-module
```

``` javascript
// import.
import PARSE_MODULE from 'js-parse-module';
```

### Basic Standalone Usage

``` html
<script src="./js-parse-module.js"></script>
<script>
  let str = PARSE_MODULE.Str2AutoLink('https://wwww.google.com');
  console.log(str);
</script>
```

<br>

## API

### Str2AutoLink

| Parameter | Type   | Default     | Description                       | 
| :---      | :---:  | :---:       | :---                              | 
| str       | string | - ※省略不可 | 文字列にhtmlのリンクが付与されます。 | 

<br>

### Str2AutoLinkHashtag

| Parameter | Type   | Default     | Description                                    | 
| :---      | :---:  | :---:       | :---                                           | 
| str       | string | - ※省略不可 | 文字列(ハッシュタグ)にhtmlのリンクが付与されます。 | 

<br><br><br>

## Dependencies

none

<br><br><br>

___

**For Developer**

## Contribution

1. Fork it ( https://github.com/yama-dev/js-parse-module/fork )
2. Create your feature branch (git checkout -b my-new-feature)
3. Commit your changes (git commit -am 'Add some feature')
4. Push to the branch (git push origin my-new-feature)
5. Create new Pull Request

<br>

## Develop

### at Development

Install node modules.

``` bash
$ npm install
```

Run npm script 'develop'

``` bash
$ npm run develop
```

Run npm script 'production'

``` bash
$ npm run production
```

<br>

## Licence

[MIT](https://github.com/yama-dev/js-parse-module/blob/master/LICENSE)

<br>

## Author

[yama-dev](https://github.com/yama-dev)

