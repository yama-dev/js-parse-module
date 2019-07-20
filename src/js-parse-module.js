import {
  Str2AddLink,
  Str2AddLinkHashtag,
  Str2DateFormat,
  Str2Mustache,
  Str2zeroPadding
} from './core/';

export class PARSE_MODULE {

  static Str2AddLink(str, target='_blank') {
    return Str2AddLink(str, target);
  }

  static Str2AddLinkHashtag(str, target='_blank') {
    return Str2AddLinkHashtag(str, target);
  }

  static Str2DateFormat(str){
    return Str2DateFormat(str);
  }

  static Str2Mustache(template, obj, removetag = true){
    return Str2Mustache(template, obj, removetag);
  }

  static Str2zeroPadding(str, length, padstr = '0'){
    return Str2zeroPadding(str, length, padstr);
  }

}
