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
  newCPF = newCPF.concat(indexA, 
                          indexB, 
                          indexC, 
                          '.',
                          indexD, 
                          indexE, 
                          indexF, 
                          '.',
                          indexG, 
                          indexH, 
                          indexI, 
                          '-',
                          indexJ, 
                          indexK);

  //optional - to remove mask
  if (hasMask != true) {
    var index = 0;

    while(index < newCPF.length){
      newCPF = newCPF.replace('.','');
      index = index++;
    }

    newCPF = newCPF.replace('-', '');
  }

  return newCPF;
}

//////////////////////////////////////////////////////////////////
//================================================================
// Function to remove mask from a CPF sequence.
//================================================================
// CPF is a Brazilian ID.
//
// It is made by a sequence of 11 digits. 
// The last 2 digits are responsible for make it valid or not.
//
// This function is responsible for removing the mask from a CPF 
// sequence informed.
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
