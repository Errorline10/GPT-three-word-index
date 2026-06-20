import _subtract from "../subtract.js";

const _subtractTests = () => {

  console.log('subtract');

  // 3-1
  if (_subtract('3', '1') == '2') {
    console.log("✅ _subtract('3','1') == 2");
  } else {
    console.log("❌ _subtract('3','1') == ", _subtract('3', '1'));
  }

  // 1-1
  if (_subtract('1', '1') == '0') {
    console.log("✅ _subtract('1','1') == 0");
  } else {
    console.log("❌ _subtract('1','1') == ", _subtract('1', '1'));
  }
    
  // 5-3
  if (_subtract('5', '3') == '2') {
    console.log("✅ _subtract('5','3') == 2");
  } else {
    console.log("❌ _subtract('5','3') == ", _subtract('5', '3'));
  }

  // 100-10
  if (_subtract('100', '10') == '90') {
    console.log("✅ _subtract('100','10') == 90");
  } else {
    console.log("❌ _subtract('100','10') == ", _subtract('100', '10'));
  }

  // 10-100
  if (_subtract('10', '100') == '-90') {
    console.log("✅ _subtract('10','100') == -90");
  } else {
    console.log("❌ _subtract('10','100') == ", _subtract('10', '100'));
  }


  // 5 - 10
  if (_subtract('5','10') == '-5') {
    console.log("✅ _subtract('5','10') == -5");
  } else {
    console.log("❌ _subtract('5','10') == ", _subtract('5', '10'));
  }



  // 100-9
  if (_subtract('100', '9') == '91') {
    console.log("✅ _subtract('100','9') == 91");
  } else {
    console.log("❌ _subtract('100','9') == ", _subtract('100', '9'));
  }



  // 123456789-123456789
  if (_subtract('123456789', '123456789') == '0') {
    console.log("✅ _subtract('123456789','123456789') == 0");
  } else {
    console.log("❌ _subtract('123456789','123456789') == ", _subtract('123456789', '123456789'));
  }


  // 123456780-123456789
  if (_subtract('123456780', '123456789') == '-9') {
    console.log("✅ _subtract('123456780','123456789') == -9");
  } else {
    console.log("❌ _subtract('123456780','123456789') == ", _subtract('123456780', '123456789'));
  }

  // -2 - 10
  if (_subtract('-2', '10') == '-12') {
    console.log("✅ _subtract('-2','10') == -12");
  } else {
    console.log("❌ _subtract('-2','10') == ", _subtract('-2', '10'));
  }

  // 2 - -10
  if (_subtract('2', '-10') == '12') {
    console.log("✅ _subtract('2','-10') == 12");
  } else {
    console.log("❌ _subtract('2','-10') == ", _subtract('2', '-10'));
  }


  // 100000 - 99999
  if (_subtract('100000', '99999') == '1') {
    console.log("✅ _subtract('100000','99999') == 1");
  } else {
    console.log("❌ _subtract('100000','99999') == ", _subtract('100000', '99999'));
  }



  // 2-1000
  if (_subtract('2','1000') == '-998') {
    console.log("✅ _subtract('2','1000') == -998");
  } else {
    console.log("❌ _subtract('2','1000') == ", _subtract('2', '1000'));
  }

}
export default _subtractTests
