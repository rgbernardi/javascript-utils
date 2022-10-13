//////////////////////////////////////////////////////////////////
//================================================================
// Function to validate an E-mail.
//================================================================
// The parameter is regarding the e-mail address to be checked.
// If none is informed <TRUE> is considered by default.
//
// Returns: Boolean.
//
// Author: Regis G Bernardi 
// E-mail: rgbernardi @ gmail.com
//////////////////////////////////////////////////////////////////
function isValid(email){
  var regex = /^(([À-ü^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return new Boolean(regex.test(String(email).toLowerCase()));
}
