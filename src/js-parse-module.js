/*!
 * JS PARSE_MODULE (JavaScript Library)
 *   js-parse-module.js
 * Version 0.0.4
 * Repository https://github.com/yama-dev/js-parse-module
 * Author yama-dev
 * Licensed under the MIT license.
 */

export class PARSE_MODULE {

  static Str2AutoLink(str, target='_blank') {

    if(!str) return false

    const regexp_url = /((h?)(ttps?:\/\/[a-zA-Z0-9.\-_@:/~?%&;=+#',()*!]+))/g;
    const regexp_makeLink = function(all, url, h, href) {
      return `<a href="${h + href}" target="${target}">${url}</a>`;
    }
    return str.replace(regexp_url, regexp_makeLink);
  }

  static Str2AutoLinkHashtag(str, target='_blank') {

    if(!str) return false

    return str.replace(/\#(\S*)\s?/g,'<a href="https://twitter.com/search?q=%23$1" target="'+target+'">#$1</a>');
  }

  static Str2DateFormat(str){

    if(!str) return false

    let _data = str.split(/\D/);

    if(_data.length >= 4){
      let _data_copy = [];
      _data.map((val, index)=>{
        if(val == '') return false
        _data_copy.push(val);
      });
      _data = _data_copy;
    }

    _data = _data.map((val,i)=>{
      let _return = val;
      if(Number(val) <= 9) _return = '0' + Number(val);
      return _return
    });

    let _format = '';
    _format = _data.join('-');

    return _format
  }

  static Str2Mustache(template, obj){

    if(!template) return false

    for (let _obj in obj) {
      let _reg   = new RegExp('({{.?' + _obj + '.?}})','g');
      let _regIn = new RegExp('{{.?(' + _obj + ').?}}','g');

      template.match(_regIn);
      let _regInStr = RegExp.$1;

      template = template.replace(_regIn, obj[_regInStr]);
    }

    let _format = '';
    _format = template;

    return _format
  }

}
