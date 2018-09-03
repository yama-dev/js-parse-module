/*!
 * JS PARSE_MODULE (JavaScript Library)
 *   js-parse-module.js
 * Version 0.0.2
 * Repository https://github.com/yama-dev/js-parse-module
 * Author yama-dev
 * Licensed under the MIT license.
 */

export class PARSE_MODULE {

  constructor(options={}){
    console.log(this);
  }

  static Str2Mustache(template, obj){

    if(!template) return false

    let _format = '';

    for (let _obj in obj) {
      let _reg   = new RegExp('({{.?' + _obj + '.?}})','g');
      let _regIn = new RegExp('{{.?(' + _obj + ').?}}','g');

      template.match(_regIn);
      let _regInStr = RegExp.$1;

      template = template.replace(_regIn, obj[_regInStr]);
    }
    _format = template;
    return _format
  }

  static Str2AutoLink(str) {
    const regexp_url = /((h?)(ttps?:\/\/[a-zA-Z0-9.\-_@:/~?%&;=+#',()*!]+))/g;
    const regexp_makeLink = function(all, url, h, href) {
      return '<a href="h' + href + '" target="_blank">' + url + '</a>';
    }
    return str.replace(regexp_url, regexp_makeLink);
  }

  static Str2AutoLinkHashtag(str) {
    return str.replace(/\#(\S*)\s?/g,'<a href="https://twitter.com/search?q=%23'+'$1'+'" target="_blank">#$1</a>');
  }

  static Str2DateFormat(str){
    let _format = '';
    let _data = str.split(/\D/);

    _data = _data.map((val,i)=>{
      let _return = val;
      if(Number(val) <= 9) _return = '0' + Number(val);
      return _return
    });
    _format = _data.join('-');
    return _format
  }

}

