import _add from "../add.js";

const _addTests = () => {

  console.log('add');

  // 1+1
  if (_add('1', '1') == '2') {
    console.log("✅ _add('1','1') == 2");
  } else {
    console.log("❌ _add('1','1') == ", _add('1', '1'));
  }

  // 0+1
  if (_add('0', '1') == '1') {
    console.log("✅ _add('0','1') == 2");
  } else {
    console.log("❌ _add('0','1') == ", _add('0', '1'));
  }

  // 1+0
  if (_add('1', '0') == '1') {
    console.log("✅ _add('1','0') == 1");
  } else {
    console.log("❌ _add('1','0') == ", _add('1', '0'));
  }

  // 10+10
  if (_add('10', '10') == '20') {
    console.log("✅ _add('10','10') == 20");
  } else {
    console.log("❌ _add('10','10') == ", _add('10', '10'));
  }

  //10000000 + 1
  if (_add('10000000', '1') == '10000001') {
    console.log("✅ _add('10000000','1') == 10000001");
  } else {
    console.log("❌ _add('10000000','1') == ", _add('10000000', '1'));
  }

  // -10+2
  if (_add('-10', '2') == '-8') {
    console.log("✅ _add('-10','2') == -8");
  } else {
    console.log("❌ _add('-10','2') == ", _add('-10', '2'));
  }

  // -10+ -2
  if (_add('-10', '-2') == '-12') {
    console.log("✅ _add('-10','-2') == -12");
  } else {
    console.log("❌ _add('-10','-2') == ", _add('-10', '-2'));
  }


  // todo : program _subtract

}
export default _addTests
