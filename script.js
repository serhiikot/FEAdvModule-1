const firstStr = 'qwertyuiop[]',
  secondStr = 'asdfghjkl;\'',
  thirdStr = 'zxcvbnm,.\/',
  lengthOfFirstStr = firstStr.length,
  lengthOfSecondStr = secondStr.length,
  lengthOfThirdStr = thirdStr.length;

var randomSymbol1 = firstStr.indexOf('['),
  randomSymbol2 = firstStr.indexOf(']');

console.log('First sting begins with symbol - ' 
  + firstStr.charAt(0) + ' and ends with symbol - ' 
  + firstStr.charAt(lengthOfFirstStr - 1));

console.log('Second sting begins with symbol - ' 
  + secondStr.charAt(0) + ' and ends with symbol - ' 
  + secondStr.charAt(lengthOfSecondStr - 1));

console.log('Third sting begins with symbol - ' 
  + thirdStr.charAt(0) + ' and ends with symbol - ' 
  + thirdStr.charAt(lengthOfThirdStr - 1));

const message = `firstStr = ${firstStr}, secondStr = ${secondStr}, thirdStr = ${thirdStr},
  lengthOfFirstStr = ${lengthOfFirstStr}, lengthOfSecondStr = ${lengthOfSecondStr}, lengthOfThirdStr = ${lengthOfThirdStr},
  randomSymbol1 = ${randomSymbol1}, randomSymbol2 = ${randomSymbol2}`;

  console.log(message);