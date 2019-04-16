// 'reverse()" function receives integer as parameter and should return the opposite sequence of its given integer.

let x = -1234;

function reverse(x) {
  let z = [];
  if (x >= 0) {
    let y = x.toString();
    for (let i = y.length-1; i >= 0; i--) {
      z += y[i];
    }
    let a = Number(z);
    return a;
  } else {
    let y = x.toString();
    for (let i = y.length-1; i > 0; i--) {
      z += y[i];
    }
    let a = Number(z);
    return a * -1;
  }
}

reverse(x);
