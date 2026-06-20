import _inequality from './inequality.js'
import _add from './add.js'
import _multiply from './multiply.js'
import _subtract from './subtract.js'
import _generateZeros from './generateZeros.js'
import _isOdd from './isOdd.js'
import _length from './length.js'

const _divide = (dividend, divisor) => {
  let bigOCount = 0;

  // handle simple cases
  let dividendLength = _length(dividend)
  let divisorLength = _length(divisor)
  // divisor is larger than dividend
  //if (_inequality(dividend, divisor) == 1) { return "0" }


  let negative = false
  if (divisor == "0") { return "Infinity" }
  if (divisor == "1") { return dividend }
  if (divisor == "-1") {
    if (dividend[0] == "-") { return dividend.slice(1) } else { return "-" + dividend }
  }

  // check for negative numbers
  if ((dividend[0] == "-") && (divisor[0] == "-")) { // both negative
    dividend = dividend.slice(1)
    divisor = divisor.slice(1)
  } else { // one negative
    if (dividend[0] == "-") {
      negative = true
      dividend = dividend.slice(1)
    }
    if (divisor[0] == "-") {
      negative = true
      divisor = divisor.slice(1)
    }
  }

  // they are the same number
  if (_inequality(dividend, divisor) == 0) {
    if (negative == true) { return "-1" } else { return "1" }
  }

  // start the brute force divide
  let guessIncrement = "1";
  let guess = "1"
  if (dividendLength > 1){
    let maxLength = dividendLength - divisorLength
    guess = "1"+_generateZeros(maxLength) // initial max guess
    console.log(dividend,'/',divisor, 'Initial Guess set to', guess , typeof(guess))
  }

// dividend = 1000
// divisor = 20

// 20*x = 1000



  let tempResult = _multiply(divisor, guess)

  // optimized method to get close to the answer
  //if (_isOdd(dividend) == false && _isOdd(divisor) == false) { // both even
    //guessIncrement = '1'
    //console.log("Both Even, guess increment set to 2")
  //}


  for (let x = 0; x < 100000; x++) {
    console.log(guess, "*", divisor, "=" , tempResult) 

    bigOCount++
    let overUnder = _inequality(tempResult, dividend)
    if (overUnder == 1) {
      console.log("adding", guessIncrement)
       guess = _add(guess, guessIncrement) 
      }  // under
    if (overUnder == -1) { 
      console.log("subtracting: ", guess, "-", guessIncrement, ' | ',_subtract(guess, guessIncrement))
      guess = _subtract(guess, guessIncrement) 
    } // over 
    if (overUnder == 0) { break } // equal
    tempResult = _multiply(divisor, guess)


    if (x >= 99999) {
      console.log("❌ _divide: loop limit reached, guess may not be accurate == 100,000 iterations");
      break;
    }

  }


  // brute force method to get close to the answer

  // for (let x = 0; x < 100000; x++) { 
  //   let overUnder = _inequality(tempResult, dividend)
  //   if (overUnder == 1) {  guess = _add(guess, guessIncrement) }  // under
  //   if (overUnder == -1) { guess = _subtract(guess, guessIncrement) } // over 
  //   if (overUnder == 0) {  break } // equal
  //   tempResult = _multiply(divisor, guess)

  //   if (x >= 999999) { 
  //     console.log("❌ _divide: loop limit reached, guess may not be accurate")
  //   }

  // }





  //console.log("guess", guess, "tempResult", tempResult)
  console.log("Acheved in ", bigOCount, " iterations")
  if (negative == true) { return "-" + guess } else { return guess }

}
export default _divide