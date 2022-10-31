const EthCrypto = require("eth-crypto");
const crypto = require("crypto");
const random=crypto.randomBytes(32);
console.log(random);
const privateKey = crypto.randomBytes(32).toString("hex");

const publicKey = EthCrypto.publicKeyByPrivateKey(privateKey);

const address = EthCrypto.publicKey.toAddress(publicKey);


const publicKeyUncompressed = EthCrypto.publicKey.compress(publicKey);


console.log(`Private key: ${privateKey}\n`);
console.log(`Public key: ${publicKey}\n`);
console.log(` Compressed public key ${publicKeyUncompressed}\n`);
console.log(`Signer address ${address}\n`);