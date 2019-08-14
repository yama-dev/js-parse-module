export function Str2zeroPadding(str, length, padstr = '0'){

  if(!str) return false;

  if(typeof str == 'number') str = String(str);

  if(!length) length = str.length;

  // https://github.com/uxitten/polyfill/blob/master/string.polyfill.js
  // https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
  if (!String.prototype.padStart) {
    String.prototype.padStart = function padStart(targetLength, padString) {
      targetLength = targetLength >> 0; //truncate if number or convert non-number to 0;
      padString = String(typeof padString !== 'undefined' ? padString : ' ');
      if (this.length >= targetLength) {
        return String(this);
      } else {
        targetLength = targetLength - this.length;
        if (targetLength > padString.length) {
          padString += padString.repeat(targetLength / padString.length); //append to original to ensure we are longer than needed
        }
        return padString.slice(0, targetLength) + String(this);
      }
    };
  }

  return str.padStart(length, padstr);
};
