// The function should return a boolean value of whether the givien object number is equal to when they are reversed.

let num1 = 123
let num2 = 1221
let num3 = -121
let num4 = 10


function sameReverse(num) {
  let str = num.toString();
  let rev = '';
  for (let i = str.length -1 ; i >= 0; i--) {
    rev += str[i];
  }
  if (rev === str) {
    return true
  } else {
    return false
  }
  
}
sameReverse(num4);
