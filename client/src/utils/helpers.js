export function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

export function validateEmptyField(input) {
  var re = /^ *$/ ///^\s+$/;
  return re.test(String(input).toLowerCase());
}

export function validatePasswordLength(input) {
  var len = input.toString().length;
  return (len < 8 )? false : true;
}

export function validateColorCodeLength(input) {
  var len = input.toString().length;
   
  if( 8 < len ){
    return false;
  }
  else if ( 8 > len ){
    return false
  }else{
    return true;
  }
  
}
 
export function validateColorCodeField(input) {
  var re = /^([a-zA-Z0-9])+$/;
  return re.test(String(input));
}

export function validateRequiredField(input){
  var len = input.toString().length;
  if (len <= 0)
  {
    return false;
  }
  else{
    return true;
  }
}


// return (( 8 < len ) || (len < 8 )) ? false : true;





 