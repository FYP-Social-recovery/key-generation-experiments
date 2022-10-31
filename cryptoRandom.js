const { randomBytes } = require('crypto')
var msg=randomBytes(32);

const sigObj = secp256k1.ecdsaSign(msg, bval);
console.log(sigObj);

console.log(secp256k1.ecdsaVerify(sigObj.signature, msg, pubKey));