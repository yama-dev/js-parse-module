export function Str2Mustache(template, obj, removetag = true){

  if(!template) return false;

  for(let _obj in obj) {
    let _reg   = new RegExp('({{.?' + _obj + '.?}})','g');
    let _regIn = new RegExp('{{.?(' + _obj + ').?}}','g');

    template.match(_regIn);
    let _regInStr = RegExp.$1;

    template = template.replace(_regIn, obj[_regInStr]);
  }

  // remove mustache strings.
  if(removetag){
    template = template.replace(/({{.*}})/g, '');
  }

  let _format = '';
  _format = template;

  return _format;

}
