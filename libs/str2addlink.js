export function Str2AddLink(str, target='_blank'){

  if(!str) return false;

  const regexp_url = /((h?)(ttps?:\/\/[a-zA-Z0-9.\-_@:/~?%&;=+#',()*!]+))/g;

  const regexp_makeLink = function(all, url, h, href) {
    return `<a href="${h + href}" target="${target}">${url}</a>`;
  }

  return str.replace(regexp_url, regexp_makeLink);
};
