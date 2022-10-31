const bip39 = require('bip39');
const { ENGINE_METHOD_ECDSA } = require('constants');
var hexgen = require('hex-generator');
const hexToBinary = require('hex-to-binary');


var pbkdf2 = require('pbkdf2');

    var hex = hexgen(128);
    
    // const entropy= bip39.generateMnemonic();
    // console.log(entropy);
    // defaults to BIP39 English word list
    // uses HEX strings for entropy
    //const mnemonic = bip39.entropyToMnemonic('00000000000000000000000000000000');
    
    const mnemonicRandom=bip39.entropyToMnemonic(hex.toString());
    // => abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon about
    //console.log(mnemonic.toString());
    console.log();
    console.log("Entropy: "+hex.toString()+"\n");
    console.log("Entropy in binary: "+hexToBinary(hex).toString()+"\n");
    console.log("length of the entropy: "+hexToBinary(hex).toString().length+"\n");
    
    console.log("Mnemonic Phrase: "+mnemonicRandom.toString()+"\n");

    // reversible
    var en=bip39.mnemonicToEntropy(mnemonicRandom);
    //console.log(en.toString());

    // => '00000000000000000000000000000000'
    var passPhrase="";
    var salt="mnemonic"+passPhrase;
    var derivedKey = pbkdf2.pbkdf2Sync(mnemonicRandom, salt, 2048, 64, 'sha512').toString("hex");

    console.log("Derived key in hex: "+(derivedKey).toString()+"\n");
    var privateKey=hexToBinary(derivedKey).slice(0,256);
    console.log("512 bit seed: "+hexToBinary(derivedKey).toString()+"\n");

    console.log("regenerate the entropy using the mnemonic: "+en.toString()+"\n");

    console.log("Master private key: "+privateKey+"\n");
   // console.log(Buffer.from(privateKey, 'utf8'));
    console.log("Master chain code : "+hexToBinary(derivedKey).slice(256,512)+"\n");

    console.log('0x'+derivedKey.slice(0,64));
//ethCrypto implementation for the public key derivation 
    const EthCrypto = require('eth-crypto');
    const publicKey =  EthCrypto.publicKeyByPrivateKey(derivedKey.slice(0,64));
    console.log("Public key: "+publicKey);
    const address=EthCrypto.calculateContractAddress(derivedKey.slice(0,64));
    console.log("Address: "+address+"\n");
    console.log("Private key: "+derivedKey.slice(0,64)+"\n");

    const secp256k1 = require('secp256k1');
    var bval = Buffer.from(derivedKey.slice(0,64), 'hex');
    console.log("buffer value: "+bval+"\n");

    var pubKey2 = secp256k1.publicKeyCreate(bval);

    console.log("Public key by secp256k1 "+pubKey2.toString()+"\n");




  
//tests 
// const encrypted =  EthCrypto.encryptWithPublicKey(
//     publicKey, // publicKey
//     'foobar' // message
//     );
//     const message =  EthCrypto.decryptWithPrivateKey(
//         '0x'+derivedKey.slice(0,64), // privateKey
//         encrypted // encrypted-data
//     );







// const { randomBytes } = require('crypto')
// const secp256k1 = require('secp256k1')
// // or require('secp256k1/elliptic')
// //   if you want to use pure js implementation in node

// // generate message to sign
// // message should have 32-byte length, if you have some other length you can hash message
// // for example `msg = sha256(rawMessage)`
// const msg = randomBytes(32)

// // generate privKey
// let privKey
// do {
//   privKey = randomBytes(32)
// } while (!secp256k1.privateKeyVerify(privKey))

// // get the public key in a compressed format
// const pubKey = secp256k1.publicKeyCreate(privKey)
// console.log(privKey);

// // sign the message
// const sigObj = secp256k1.ecdsaSign(msg, privKey)

// // verify the signature
// console.log(secp256k1.ecdsaVerify(sigObj.signature, msg, pubKey))
// // => true