export function Str2AddLinkHashtag(str, target='_blank'){

  if(!str) return false

  return str.replace(/\#(\S*)\s?/g,'<a href="https://twitter.com/search?q=%23$1" target="'+target+'">#$1</a>');
}
