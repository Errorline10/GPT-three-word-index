import _multiply from "../multiply.js";

const _multiplyTests = () => {

  console.log('multiply');

  // 1*0
  if (_multiply('1', '0') == '0') {
    console.log("✅ _multiply('1','0') == 0");
  } else {
    console.log("❌ _multiply('1','0') == ", _multiply('1', '0'));
  }
    
 // 0*1
 if (_multiply('0', '1') == '0') {
  console.log("✅ _multiply('0','1') == 0");
  } else {
  console.log("❌ _multiply('1','0') == ", _multiply('0', '1'));
  }

  // 1*1
  if (_multiply('1', '1') == '1') {
    console.log("✅ _multiply('1','1') == 1");
  } else {
    console.log("❌ _multiply('1','1') == ", _multiply('1', '1'));
  }

  // 5*5
  if (_multiply('5', '5') == '25') {
    console.log("✅ _multiply('5','5') == 25");
  } else {
    console.log("❌ _multiply('5','5') == ", _multiply('5', '5'));
  }


  // 10*10
  if (_multiply('10', '10') == '100') {
    console.log("✅ _multiply('10','10') == 100");
  } else {
    console.log("❌ _multiply('10','10') == ", _multiply('10', '10'));
  }

  // 999*2
  if (_multiply('999', '2') == '1998') {
    console.log("✅ _multiply('999','2') == 1998");
  } else {
    console.log("❌ _multiply('999','2') == ", _multiply('999', '2'));
  }

  // -2 * 2
  if (_multiply('-2', '2') == '-4') {
    console.log("✅ _multiply('-2','2') == -4");
  } else {
    console.log("❌ _multiply('-2','2') == ", _multiply('-2', '2'));
  }

  // 2 * -2
  if (_multiply('2', '-2') == '-4') {
    console.log("✅ _multiply('2','-2') == -4");
  } else {
    console.log("❌ _multiply('2','-2') == ", _multiply('2', '-2'));
  }

  // -2 * -2
  if (_multiply('-2', '-2') == '4') {
    console.log("✅ _multiply('-2','-2') == 4");
  } else {
    console.log("❌ _multiply('-2','-2') == ", _multiply('-2', '-2'));
  }

  // 10009 * 2
  if (_multiply('10009', '2') == '20018') {
    console.log("✅ _multiply('10009','2') == 20018");
  } else {
    console.log("❌ _multiply('10009','2') == ", _multiply('10009', '2'));
  }


  // 1000000000 * 20
  if (_multiply('1000000000', '20') == '20000000000') {
    console.log("✅ _multiply('1000000000','20') == 1000000000");
  } else {
    console.log("❌ _multiply('1000000000','20') == ", _multiply('1000000000', '20'));
  }


  // 1000000000000000000000000000009 * 2
  if (_multiply('1000000000000000000000000000009', '2') == '2000000000000000000000000000018') {
    console.log("✅ _multiply('1000000000000000000000000000009','2') == 2000000000000000000000000000018");
  } else {
    console.log("❌ _multiply('1000000000000000000000000000009','2') == ", _multiply('1000000000000000000000000000009', '2'));
  }


}
export default _multiplyTests
