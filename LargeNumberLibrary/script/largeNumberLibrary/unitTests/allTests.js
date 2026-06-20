import _isOddTests from "./isOddTests.js";
import _inequalityTests from "./inequalityUnitTests.js";
import _multiplyTests from "./multiplyUnitTest.js";
import _addTests from "./addUnitTests.js"
import _subtractTests from "./subtractTests.js";
import _divideTests from "./divideTests.js";
import _generateZerosTests from "./generateZeroTests.js";
import _lengthTests from "./lengthTests.js";

const _allTests = (tests) => {
  // [ all | inequality | add | multiply | divide | reverse ]
  console.log('______________ Unit Tests Init _________________ | ' + tests);
  console.log('This systems Number.MAX_SAFE_INTEGER is: ', Number.MAX_SAFE_INTEGER);

  //_lengthTests();
//  _generateZerosTests();
 //_inequalityTests(); _isOddTests(); _addTests(); _subtractTests(); _multiplyTests();
//_divideTests();
    switch (tests) {
      case "all": _lengthTests(); _inequalityTests(); _isOddTests(); _generateZerosTests(); _addTests(); _subtractTests(); _multiplyTests();  _divideTests();   break; 
      case "length":        _lengthTests(); break; 
      case "inequality":    _inequalityTests(); break; 
      case "isOdd":         _isOddTests(); break; 
      case "generateZeros": _generateZerosTests(); break; 
      case "add":           _addTests(); break; 
      case "subtract":      _subtractTests(); break; 
      case "multiply":      _multiplyTests(); break; 
      case "divide":        _divideTests(); break; 
    } 


}
export default _allTests