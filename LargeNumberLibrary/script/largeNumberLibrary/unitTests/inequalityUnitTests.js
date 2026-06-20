import _inequality from "../inequality.js";

const _inequalityTests = () => {

  console.log('inequality');

  // 1==1
  if (_inequality('1', '1') == '0') {
    console.log("✅ inequality('1','1') == 0");
  } else {
    console.log("❌ inequality('1','1') == ", _inequality('1', '1'));
  }

  // 1 == 2
  if (_inequality('1', '2') == '1') {
    console.log("✅ inequality('1','2') == 1");
  } else {
    console.log("❌ inequality('1','2') == ", _inequality('1', '2'));
  }

  // 2 == 1
  if (_inequality('2', '1') == '-1') {
    console.log("✅ inequality('2','1') == -1");
  } else {
    console.log("❌ inequality('2','1') == ", _inequality('2', '1'));
  }

  // -1 == 1
  if (_inequality('-1', '1') == '-1') {
    console.log("✅ inequality('-1','1') == -1");
  } else {
    console.log("❌ inequality('-1','1') == ", _inequality('-1', '1'));
  }

  // 1 == -1
  if (_inequality('1', '-1') == '1') {
    console.log("✅ inequality('1','-1') == 1");
  } else {
    console.log("❌ inequality('1','-1') == ", _inequality('1', '-1'));
  }


  // -1 == -1
  if (_inequality('-1', '-1') == '0') {
    console.log("✅ inequality('-1','-1') == 0");
  } else {
    console.log("❌ inequality('-1','-1') == ", _inequality('-1', '-1'));
  }

  // -1 == -2
  if (_inequality('-1', '-2') == '-1') {
    console.log("✅ inequality('-1','-2') == 1");
  } else {
    console.log("❌ inequality('-1','-2') == ", _inequality('-1', '-2'));
  }

  // -2 == -1
  if (_inequality('-2', '-1') == '1') {
    console.log("✅ inequality('-2','-1') == 1");
  } else {
    console.log("❌ inequality('-2','-1') == ", _inequality('-2', '-1'));
  }

  // big 4 == big 4
  if (_inequality('123456789012345678901234', '123456789012345678901234') == '0') {
    console.log("✅ inequality('123456789012345678901234','123456789012345678901234') == '0'");
  } else {
    console.log("❌ inequality('123456789012345678901234','123456789012345678901234') ==",
      _inequality('123456789012345678901234', '123456789012345678901234'))
  }

  // big 4 == big 5
  if (_inequality('123456789012345678901234', '123456789012345678901235') == '1') {
    console.log("✅ inequality('123456789012345678901234','123456789012345678901235') == '2'");
  } else {
    console.log("❌ inequality('123456789012345678901234','123456789012345678901235') ==",
      _inequality('123456789012345678901234', '123456789012345678901235'))
  }

  // big 5 == big 4
  if (_inequality('123456789012345678901235', '123456789012345678901234') == '-1') {
    console.log("✅ inequality('123456789012345678901235','123456789012345678901234') == '1'");
  } else {
    console.log("❌ inequality('123456789012345678901235','123456789012345678901234') ==",
      _inequality('123456789012345678901235', '123456789012345678901234'))
  }

  // big 5 == 0
  if (_inequality('123456789012345678901235', '0') == '-1') {
    console.log("✅ inequality('123456789012345678901235','0') == '1'");
  } else {
    console.log("❌ inequality('123456789012345678901235','0') ==",
      _inequality('123456789012345678901235', '0'))
  }

  // big -5 == big -5
  if (_inequality('-123456789012345678901235', '-123456789012345678901235') == '0') {
    console.log("✅ inequality('123456789012345678901235','123456789012345678901235') == '0'");
  } else {
    console.log("❌ inequality('123456789012345678901235','123456789012345678901235') ==",
      _inequality('123456789012345678901235', '123456789012345678901235'))
  }
}
export default _inequalityTests