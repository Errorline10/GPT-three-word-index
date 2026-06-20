const _isOdd = (n1) => {
    //                           ________
    // _________________________/ is Odd \____
    // returns true if odd false if not
    if (n1[0] == "-") { n1 = n1.slice(1) } // remove negative sign if there is one
    
    let lastDigit = n1[n1.length - 1]
    if (
        lastDigit == "1" || 
        lastDigit == "3" || 
        lastDigit == "5" || 
        lastDigit == "7" || 
        lastDigit == "9") {
        return true
        } else { return false }
  }
  export default _isOdd;