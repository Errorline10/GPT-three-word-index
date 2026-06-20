import _add from './add.js'

const _multiply = (num1, num2) => {

  let negative = false;

  // deal with negative numbers
  if(num1[0] == '-'){
    negative = true;
    num1 = num1.slice(1)
  }

  if(num2[0] == '-'){
    if (negative == true){ // both negative so toggle to positive
      negative = false
    } else {
      negative = true
    }
    num2 = num2.slice(1)
  }
  
 
  // make num1 the longer one.
  if (num1.length < num2.length) {
    let temp = num2
    num2 = num1
    num1 = temp
  }

  let result = "0"
  let r = 0
  let onePassTally = ""
  let zeroPad = ""
  let n3 = 0

  for (let x = num2.length - 1; x >= 0; x--) {
    let n2 = parseInt(num2[x])
    r = 0
    for (let y = num1.length - 1; y >= 0; y--) {
      let n1 = parseInt(num1[y])
      let mult = (n2 * n1 + r).toString()


      if (mult > 9) {
        r = parseInt(mult[0])
        n3 = mult[1]
      } else {
        r = 0
        n3 = mult[0]
      }

      onePassTally = n3 + onePassTally
    }
    onePassTally = onePassTally + zeroPad
    result = _add(result, onePassTally)
    onePassTally = ""
    zeroPad = zeroPad + "0"
  }
  //console.log("result", result, "r", r, "negative", negative)
  if (r !== 0){result = r + result}

  if (negative == true){result = '-'+ result}
  return result
}
export default _multiply