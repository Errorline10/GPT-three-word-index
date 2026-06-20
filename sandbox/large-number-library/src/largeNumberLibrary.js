//  _                        _  _            _               _    _ _                      
// | |   __ _ _ _ __ _ ___  | \| |_  _ _ __ | |__  ___ _ _  | |  (_) |__ _ _ __ _ _ _ _  _ 
// | |__/ _` | '_/ _` / -_) | .` | || | '  \| '_ \/ -_) '_| | |__| | '_ \ '_/ _` | '_| || |
// |____\__,_|_| \__, \___| |_|\_|\_,_|_|_|_|_.__/\___|_|   |____|_|_.__/_| \__,_|_|  \_, |
//               |___/   Large Number Library for Arbitrary-Precision Arithmetic...    |__/ 
//   
//
//
//

import _add from './add.js'
import _subtract from './subtract.js'
import _multiply from './multiply.js'
import _divide from './divide.js'
import _inequality from './inequality.js'
import _reverse from './reverse.js'
import _allTests from './unitTests/allTests.js'

const LNL = () => {
  return {
    add: _add,
    subtract: _subtract,
    multiply: _multiply,
    divide: _divide,
    inequality: _inequality,
    reverse: _reverse,
    allTests: _allTests,
  };
}
export default LNL();
