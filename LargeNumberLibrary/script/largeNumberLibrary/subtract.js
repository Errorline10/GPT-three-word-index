import _inequality from './inequality.js'
import _add from './add.js'


//
//                                              ___________________
// ____________________________________________/ SUBTRACT FUNCTION \____________________
const _subtract = (n1, n2) => {
  // they are equal so return "0"
  if (n1 === n2) return "0";

  // check for negative numbers (throw to add if they are)
  let negative = false
  if ((n1[0] == "-") && (n2[0] !== "-")) { n1 = n1.slice(1); return "-" + _add(n1, n2); }
  if ((n2[0] == "-") && (n1[0] !== "-")) { n2 = n2.slice(1); return _add(n1, n2); }

  // swap so n1 is the high one.
  if (_inequality(n1, n2) == 1) { negative = true; let t = n2; n2 = n1; n1 = t; }

  // pad out second number with zeros
  for (let x = 0; x < n1.length; x++) { if (n2.length < n1.length) { n2 = "0" + n2 } }


  // one pass left to right, n1 is the top larger number.
  // at this point we know that n1 is larger, so we can borrow 
  // on good faith that it will resolve.
  // (A = 10; Z=-1)

  let finalSum = "";
  for (let i = n1.length - 1; i >= 0; i--) {

    let regLower = parseInt(n2[i]);
    let regUpper = alphaToNum(n1[i]);

    if (regUpper < regLower) {                          // we do need to borrow on this column

      if (parseInt(n1[i]) === 0) {                      // the top number is zero
        n1 = n1.slice(0, i) + "A" + n1.slice(i + 1);    // insert a 10 automatically if its a zero
      } else {                                          // the top number is not zero
        let tempUpper = alphaToNum(n1[i]);
        n1 = n1.slice(0, i) + numToAlpha(tempUpper + 10) + n1.slice(i + 1);  // insert number+10
      }

      if (parseInt(n1[i - 1]) === 0) {                  // borrow from zero, so place holder -1
        n1 = n1.slice(0, i - 1) + "Z" + n1.slice(i);
      } else {
        let newVal = parseInt(n1[i - 1]) - 1;
        n1 = n1.slice(1, i - 1) + newVal + n1.slice(i); // insert new value into the n1 string
      }

    }

    // do the subtraction for this column
    let r1 = alphaToNum(n1[i])
    let r2 = parseInt(n2[i])
    finalSum = (r1 - r2).toString() + finalSum;
  }


  // find and trim leading zeros
  finalSum = trimLeadingZeros(finalSum)

  // if both where negitive return it as a negitive
  if (negative == true) { return "-" + finalSum }
  
  // return the final sum.
  return finalSum 
}
export default _subtract;






//                            ____________________
// __________________________/ utility functiions \___________
// we need a way to store numbers larger than 9 in a string
// ie 19A = 100 + 90 + 10 
// this is to facilitate a one pass borrow / subtraction cycle.
//
function numToAlpha(x) {
  switch (x) {
    case 10: return ('A'); break;
    case 11: return ('B'); break;
    case 12: return ('C'); break;
    case 13: return ('D'); break;
    case 14: return ('E'); break;
    case 15: return ('F'); break;
    case 16: return ('G'); break;
    case 17: return ('H'); break;
    case 18: return ('I'); break;
    case 19: return ('J'); break;
    case 20: return ('K'); break;  // is 20 even possable? 
    case -1: return ('Z'); break;  // this has borrowed from a zero,  but at this point we know n1 is good for it. 
  }
  return x;
}

function alphaToNum(x) {
  switch (x) {
    case "A": return (10); break;
    case "B": return (11); break;
    case "C": return (12); break;
    case "D": return (13); break;
    case "E": return (14); break;
    case "F": return (15); break;
    case "G": return (16); break;
    case "H": return (17); break;
    case "I": return (18); break;
    case "J": return (19); break;
    case "K": return (20); break;  // is 20 even possable? 
    case "Z": return (-1); break;  // this has borrowed from a zero,  but at this point we know n1 is good for it. 
  }
  return parseInt(x);
}


function trimLeadingZeros(numberString){
  let z = 0
  for (let x = 0; x < numberString.length; x++) {
    if (parseInt(numberString[x]) !== 0){break}
    z++;

  }
  return numberString.slice(z, numberString.length);
}
