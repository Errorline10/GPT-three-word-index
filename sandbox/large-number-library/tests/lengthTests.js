import _length from "../length.js";
import _generateZeros from "../generateZeros.js";

const _lengthTests = () => {

    console.log('length');

    //  1000
    if (_length('1000') == '4') {
        console.log("✅ _length('1000') == '4'");
    } else {
        console.log("❌ _length('1000') == ", _length('1000'));
    }

    //  -1000
    if (_length('-1000') == '4') {
        console.log("✅ _length('-1000') == '4'");
    } else {
        console.log("❌ _length('-1000') == ", _length('-1000'));
    }

    //  1234567890123456789012345678901234567890
    if (_length('1234567890123456789012345678901234567890') == '40') {
        console.log("✅ _length('1234567890123456789012345678901234567890') == '40'");
    } else {
        console.log("❌ _length('1234567890123456789012345678901234567890') == ", _length('1234567890123456789012345678901234567890'));
    }

    //let maxLength = '1' + _generateZeros('128000000')       
    //console.log(maxLength)

}
export default _lengthTests
