const _length = (n1) => {
  if (n1.length == -1) { return "No Number" }
  if (n1[0] == "-") {
    n1 = n1.slice(1)
  }

  // if its < 20 digits, just return the length
  if (n1.length < 128000000) {
    return n1.length.toString()
  }
  else {
    // todo - optimize for very large numbers
    //
    // note: this wont be a problem until I can store 18.01 petabytes (PB)
    //       for one number stored as a string.
    //       9,007,199,254,740,991 * 2 bytes = 18,014,398,509,481,982 bytes
    // 
    // note: this may be a consideration well before that limit is reached
    //       256,000,000 bytes / 2 bytes = 128,000,000 characters
    //
    //       :google: Although this is the theoretical maximum, modern JavaScript 
    //        engines have lower, implementation-specific limits on string 
    //        size. For example, the V8 engine (used in Chrome and Node.js) 
    //        has an effective limit of about 256MB for string constants. 
    
    console.log('_length may be currently unreliable at string lengths above 128,000,000 Bytes')
    return n1.length.toString()
  }


}
export default _length
