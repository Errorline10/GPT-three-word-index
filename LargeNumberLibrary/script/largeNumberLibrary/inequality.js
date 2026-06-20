const _inequality = (n1, n2) => {
    //                           ____________
    // _________________________/ inequality \____
    // returns -1,0,1 for what number is highest
    //console.log(inequality("123", "4444") == 1)
    
  
    // shortcut the obviously solutions
    if (n1 === n2) { return "0" }  // if they are the same
    if (n1.length > n2.length) { return "-1" }  // if n1 is longer
    if (n1.length < n2.length) { return "1" }  // if n2 is longer
    if (n1[0] == "-" && n2[0] !== '-') { return "1" }  // first is negative
    if (n1[0] !== "-" && n2[0] == '-') { return "-1" }  // second is negative
  
    // they are the same length check each digit.
    let result = "larger"
    for (let x = 0; x <= n1.length - 1; x++) {
      if (parseInt(n1[x]) < parseInt(n2[x])) {
        result = "smaller"
        break; // stop processing as soon as possible. 
      }
    }
  
    if (n1[0] == "-" && n2[0] == "-") { // flip results if both are negative
      if (result == "smaller") { return "-1" } else { return "1" }
    }
  
    // finally just return the larger one
    if (result == "smaller") { return "1" } else { return "-1" }
  }
  export default _inequality;