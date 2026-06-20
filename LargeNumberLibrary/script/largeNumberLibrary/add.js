import _inequality from "./inequality.js";
import _subtract from "./subtract.js";

const _add = (n1, n2) => {
  let negative = false;

  // check if both are negative numbers
  if (n1[0] == "-" && n2[0] == "-") {
    negative = true;
    n1 = n1.slice(1)
    n2 = n2.slice(1)
  } 

  // if both are negative, use subtract
  if (n1[0] == "-" && n2[0] != "-") {
    n1 = n1.slice(1)
    return "-" + _subtract(n1, n2)
  }

  // swap so num1 is the high one.
  if (_inequality(n1,n2)==1 ) { let t = n2; n2 = n1; n1 = t }

  // pad out second number
  for (let x = 0; x < n1.length; x++) {
    if (n2.length < n1.length) { n2 = "0" + n2 }
  }

  // do the math
  let finalSum = "";
  let carry = 0;
  let len = n1.length;
  for (let x = len - 1; x >= 0; x--) {
    let r1 = parseInt(n1[x])
    let r2 = parseInt(n2[x])
    let singleSum = (r1 + r2 + carry).toString()
    if (x == 0) {
      finalSum = singleSum + finalSum;
    } else {
      if (singleSum > 9) {
        carry = parseInt(singleSum[0]);
        finalSum = singleSum[1] + finalSum;
      } else {
        carry = 0;
        finalSum = singleSum[0] + finalSum;
      }
    }
  }
  if (negative == true) {
    return "-" + finalSum
  }
  return finalSum
}
export default _add;
