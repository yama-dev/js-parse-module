export function Str2DateFormat(str){

  if(!str) return false;

  let _data = str.split(/\D/);

  if(_data.length >= 4){
    let _data_copy = [];
    _data.map((val)=>{
      if(val == '') return false;
      _data_copy.push(val);
    });
    _data = _data_copy;
  }

  _data = _data.map((val)=>{
    let _return = val;
    if(Number(val) <= 9) _return = '0' + Number(val);
    return _return
  });

  let _format = '';
  _format = _data.join('-');

  return _format
};
