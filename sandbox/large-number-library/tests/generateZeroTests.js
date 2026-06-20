import _generateZeros from "../generateZeros.js";

const _generateZerosTests = () => {

  console.log('generateZeros');

  // 0
  if (_generateZeros(0) == '') {
    console.log("✅ _generateZero(0) == ''");
  } else {
    console.log("❌ _generateZero(0) == ", _generateZeros(0));
  }

  // 1
  if (_generateZeros(1) == '0') {
    console.log("✅ _generateZero(1) == '0'");
  } else {
    console.log("❌ _generateZero(1) == ", _generateZeros(1));
  }

  
  // 3
  if (_generateZeros(3) == '000') {
    console.log("✅ _generateZero(3) == '000'");
  } else {
    console.log("❌ _generateZero(1) == ", _generateZeros(1));
  }


  // 10
  if (_generateZeros(10) == '0000000000') {
    console.log("✅ _generateZero(10) == '0000000000'");
  } else {
    console.log("❌ _generateZero(10) == ", _generateZeros(10));
  }


}
export default _generateZerosTests
