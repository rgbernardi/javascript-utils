//////////////////////////////////////////////////////////////////
//================================================================
// Function to generate a new valid CPF.
//================================================================
// CPF is a Brazilian ID.
//
// It is made by a sequence of 11 digits. 
// The last 2 digits are responsible for make it valid or not.
//
// The parameter is regarding the sequence format (mask).
// If none is informed <TRUE> is considered by default.
//
// Returns: String.
//
// Author: Regis G Bernardi 
// E-mail: rgbernardi @ gmail.com
//////////////////////////////////////////////////////////////////
function getCPF(hasMask = true){
  var newCPF = '';
  var indexA = Math.floor(Math.random() * 10);
  var indexB = Math.floor(Math.random() * 10);
  var indexC = Math.floor(Math.random() * 10);
  var indexD = Math.floor(Math.random() * 10);
  var indexE = Math.floor(Math.random() * 10);
  var indexF = Math.floor(Math.random() * 10);
  var indexG = Math.floor(Math.random() * 10);
  var indexH = Math.floor(Math.random() * 10);
  var indexI = Math.floor(Math.random() * 10);
 
  //to define indexJ
  var indexJ = 0;

  var baseJ = (indexA * 10) +
                (indexB * 9) +
                (indexC * 8) +
                (indexD * 7) +
                (indexE * 6) +
                (indexF * 5) +
                (indexG * 4) +
                (indexH * 3) +
                (indexI * 2);

  if ((baseJ % 11) > 1){
    indexJ = (11 - (baseJ % 11));
  }

  //to definde indexK
  var indexK = 0;

  var baseK = (indexA * 11) +
                (indexB * 10) +
                (indexC * 9) +
                (indexD * 8) +
                (indexE * 7) +
                (indexF * 6) +
                (indexG * 5) +
                (indexH * 4) +
                (indexI * 3) +
                (indexJ * 2);

  if ((baseK % 11) > 1){
    indexK = (11 - (baseK % 11));
  }
  
  //Formatting
  newCPF = newCPF.concat(indexA, indexB, indexC);
  if (hasMask) {newCPF = newCPF.concat('.');}
  newCPF = newCPF.concat(indexD, indexE, indexF);
  if (hasMask) {newCPF = newCPF.concat('.');}
  newCPF = newCPF.concat(indexG, indexH, indexI);
  if (hasMask) {newCPF = newCPF.concat('-');}
  newCPF = newCPF.concat(indexJ, indexK);

  return newCPF;
}

//////////////////////////////////////////////////////////////////
//================================================================
// Function to remove mask from a CPF sequence.
//================================================================
// CPF is a Brazilian ID.
//
// It is made by a sequence of 11 digits. 
// The last 2 dçigits are responsible for make it valid or not.
//
// This function is responsible for removing the mask from a CPF 
// sequence informed.
//
// Returns: String.
//
// Author: Regis G Bernardi 
// E-mail: rgbernardi @ gmail.com
//////////////////////////////////////////////////////////////////
function unMask(idCPF) {
  var auxCPF = idCPF;
  var unMaskCPF = '';
  var index = 0;

  while(index < auxCPF.length){
    if (!(isNaN(auxCPF[index]))){
      unMaskCPF = unMaskCPF.concat(auxCPF[index]);
    }
    index = index + 1;
  }

  return unMaskCPF;
}

//////////////////////////////////////////////////////////////////
//================================================================
// Function to check CPF.
//================================================================
// CPF is a Brazilian ID.
//
// It is made by a sequence of 11 digits. 
// The last 2 digits are responsible for make it valid or not.
//
// This function is responsible for checking if a given sequence is 
// a valid CPF or not.
//
// Returns: Boolean.
//
// Author: Regis G Bernardi 
// E-mail: rgbernardi @ gmail.com
//////////////////////////////////////////////////////////////////
function isCPF(idCPF){
  var auxCPF = unMask(idCPF);
  
  try{
    //if (isNaN(auxCPF)) throw "CPF informed is not a number";
    if (auxCPF.length != 11 ) throw "CPF informed has not 11 digits";
  
  }catch(err){
    return "Error: " + err + ".";
  }

  //Checking digit J  
  var indexJ = auxCPF.substring(9,10);
  var iteratorJ = 0;
  var baseJ = 0;
  var multJ = 10;

  while (iteratorJ < 9){
    baseJ = baseJ + (multJ * auxCPF[iteratorJ]);
      
    multJ = multJ - 1;
    iteratorJ = iteratorJ + 1;
  }

  if (indexJ != (11 - (baseJ % 11))){ return new Boolean(false); }
  
  //Checking digit K
  var indexK = auxCPF.substring(10,11);
  var iteratorK = 0;
  var baseK = 0;
  var multK = 11;

  while (iteratorK < 10){
    baseK = baseK + (multK * auxCPF[iteratorK]);
      
    multK = multK - 1;
    iteratorK = iteratorK + 1;
  }

  if (indexK != (11 - (baseK % 11))){ return new Boolean(false); }

  return new Boolean(true);
}

//////////////////////////////////////////////////////////////////
//================================================================
// Function to insert mask to a valid CPF.
//================================================================
// CPF is a Brazilian ID.
//
// It is made by a sequence of 11 digits. 
// The last 2 digits are responsible for make it valid or not.
//
// This function is responsible for inserting a mask to a CPF.
//
// returns: String.
//
// Author: Regis G Bernardi 
// E-mail: rgbernardi @ gmail.com
//////////////////////////////////////////////////////////////////
function mask(idCPF){
  var auxCPF = idCPF;

  try {
    if (isCPF(auxCPF) != true){ throw "CPF informed is not valid"; }
  } catch(err) {
    return "Error: " + err + ".";
  }

  var maskCPF = '';
  var index = 0;

  while (index < auxCPF.length){
    if (index != 0 && index % 3 == 0){
      if (index != 9){
        maskCPF = maskCPF.concat(".");
      } else {
        maskCPF = maskCPF.concat("-");
      }
    }
    maskCPF = maskCPF.concat(auxCPF[index]);
    index = index + 1;
  }

  return maskCPF;
}
