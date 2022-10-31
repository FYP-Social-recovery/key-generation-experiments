const BIP86 = require('bip86')
var mnemonic = 'crush borrow clerk myth crunch expand abuse breeze reveal donate stuff rally'
var root = new BIP86.fromMnemonic(mnemonic)
console.log(root)
var child0 = root.deriveAccount(0)

console.log('mnemonic:', mnemonic)
console.log('rootpriv:', root.getRootPrivateKey())
console.log('rootpub:', root.getRootPublicKey())
console.log('\n');

var account0 = new BIP86.fromXPrv(child0)

console.log("Account 0, root = m/86'/0'/0'");
console.log('Account 0 xprv:', account0.getAccountPrivateKey())
console.log('Account 0 xpub:', account0.getAccountPublicKey())
console.log('\n');

console.log("Account 0, first receiving address = m/86'/0'/0'/0/0");
console.log('Prvkey:', account0.getPrivateKey(0))
console.log('Pubkey:', account0.getPublicKey(0))
console.log('Address:', account0.getAddress(0))
console.log('\n');

console.log("Account 0, second receiving address = m/86'/0'/0'/0/1");
console.log('Prvkey:', account0.getPrivateKey(1))
console.log('Pubkey:', account0.getPublicKey(1))
console.log('Address:', account0.getAddress(1))
console.log('\n');

console.log("Account 0, first change address = m/86'/0'/0'/1/0");
console.log('Prvkey:', account0.getPrivateKey(0, true))
console.log('Pubkey:', account0.getPublicKey(0, true))
console.log('Address:', account0.getAddress(0, true))
console.log('\n');

var xpub = 'tpubDE9d2eQdaQrwREoNYVm63BH1TQz5XYizB3rMxeJpFsfxxzXzNGCrguxaip9shs9TLahkfvgQPNWdKXvWqCqWgKk5SxT9wuFtLQg7RQvRsTV'
var account1 = new BIP86.fromXPub(xpub)

console.log("Account 1, root = m/86'/0'/1'");
console.log('Account 1 xpub:', account1.getAccountPublicKey());
console.log('\n');

console.log("Account 1, first receiving address = m/86'/0'/1'/0/0");
console.log('Pubkey:', account1.getPublicKey(0))
console.log('Address:', account1.getAddress(0))
console.log('\n');

console.log("Account 1, second receiving address = m/86'/0'/1'/0/1");
console.log('Pubkey:', account1.getPublicKey(1))
console.log('Address:', account1.getAddress(1))
console.log('\n');

console.log("Account 1, first change address = m/86'/0'/1'/1/0");
console.log('Pubkey:', account1.getPublicKey(0, true))
console.log('Address:', account1.getAddress(0, true))
console.log('\n');

console.log("Account 1, second change address = m/86'/0'/1'/1/1");
console.log('Pubkey:', account1.getPublicKey(1, true))
console.log('Address:', account1.getAddress(1, true))
console.log('\n');