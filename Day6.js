// The function should return its arabic numbers from the roman numbers.

let roman = {
  I     : 1,
  V     : 5,
  X     : 10,
  L     : 50,
  C     : 100,
  D     : 500,
  M     : 1000
};

function romanToNum(s) {
  let num = 0;
  
  for (let i = 0; i < s.length; i++) {
    if (roman[s[i]] < roman[s[i+1]]) {
      num += (roman[s[i+1]] - roman[s[i]]);
      i++;
    } else {
    num += roman[s[i]];
    }
  }
  return num;
}

romanToNum("MDCCCXCIII")
