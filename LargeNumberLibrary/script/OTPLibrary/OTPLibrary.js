//     ____               _______ _                  _____          _ 
//    / __ \             |__   __(_)                |  __ \        | |
//   | |  | |_ __   ___     | |   _ _ __ ___   ___  | |__) |_ _  __| |
//   | |  | | '_ \ / _ \    | |  | | '_ ` _ \ / _ \ |  ___/ _` |/ _` |
//   | |__| | | | |  __/    | |  | | | | | | |  __/ | |  | (_| | (_| |
//    \____/|_| |_|\___|    |_|  |_|_| |_| |_|\___| |_|   \__,_|\__,_|
//          One Time Pad JS Library - by Errorline10
//
//         This is a library that uses Xor to merge two string. 
//         used for encryption and decryption of messages.
//
//           * "Rick::C-137::" is used to identify the key. 
//           * "MORTY:C-137::" is used to identify the message.
//           * "MORTY::EVIL::" is a plain text message.
//
//  example usage: 
//       <script type="module">
//         import otp from "/script/OTPLibrary/OTPLibrary.js";
//         let message = "MORTY::EVIL::Hello World!";
//         let key     = "RICK::C-137::V2FiYmEgTHViYmEgRHViIER1YiE";
//         let cipherText = otp().XorCipher(message, key);
//         let planeText = otp().XorCipher(cipherText, key);
//       </script>
//
//

const otp = () => {

  //                          ____________________
  // ________________________/  Private Variables \____________
  let _id = {
    Rick: 'RICK::C-137::',
    Morty: 'MORTY:C-137::',
    MortyEvil: 'MORTY::EVIL::',
    keyArray: [],
    messageArray: [],
    cipherArray: [],
  }


  //                          _____________________
  // ________________________/  function: _loadKey \___________
  const _loadKey = (k) => { for (let i = 0; i < k.length; i++) { _id.keyArray[i] = k.charCodeAt(i) } }


  //                          _________________________
  // ________________________/  function: _loadMessage \_______
  const _loadMessage = (m) => { for (let i = 0; i < m.length; i++) { _id.messageArray[i] = m.charCodeAt(i) } }


  //                          _______________________
  // ________________________/  function: _XorCipher \_________
  const _XorCipher = (m, r) => {
    let decrypting = false;
    let text = '';

    // Check for transposed Rick & Mortys
    _checkInputs(m, r)

    // Check if this is an encryption or decryption
    if (m.indexOf(_id.MortyEvil) == -1) { decrypting = true }

    // unwrap the message and key
    r = _unwrap(r)
    m = _unwrap(m)

    // Check that there is enough key material
    if (m.length > r.length) { console.log('The key is too short for the message! : -', m.length - r.length) }

    // load arrays with Ascii codes
    _loadKey(r);
    _loadMessage(m);

    // Xor the arrays of Ascii codes 
    for (let i = 0; i < _id.messageArray.length; i++) {
      _id.cipherArray[i] = (_id.messageArray[i] ^ _id.keyArray[i]);
    }

    // convert ascii array to string
    _id.cipherArray.map((x) => { text += String.fromCharCode(x) })

    // Wrap the cipher text and return it
    if (!decrypting) { return _id.Morty + btoa(text); } return text

  }


  //                          ____________________
  // ________________________/  function: _unwrap \_______
  // Unwrap the message or key
  function _unwrap(t) {
    if ((t.indexOf(_id.Rick) == 0) || (t.indexOf(_id.Morty) == 0)) { 
      t = t.substring(13, t.length);
      t = atob(t); // convert from base64 
    }
    if ((t.indexOf(_id.MortyEvil) == 0)) { // its not in base64})
      t = t.substring(13, t.length);
    }
    return t
  }

  //                          ________________________
  // ________________________/  function: _checkInput \____
  // Check for transposed Rick & Mortys
  function _checkInputs(m, r) {
    if (m.indexOf(_id.Rick) == 0) { console.log('Error: A key was passed as a message! : ', r) }
    if ((r.indexOf(_id.Morty) == 0) || (r.indexOf(_id.MortyEvil) == 0)) { console.log('Error: A message was passed as a Key! : ', r) }
    if ((m.indexOf(_id.Morty) == -1) && (m.indexOf(_id.MortyEvil) == -1)) { console.log('Error: The Message is malformed : ', m) }
    if (r.indexOf(_id.Rick) == -1) { console.log('Error: The Key is malformed : ', r) }
  }

  //                          ___________________________
  // ________________________/  return: public functions \____
  return {
    XorCipher: _XorCipher,
  }
}
export default otp;
