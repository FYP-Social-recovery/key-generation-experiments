const constants = require('bip44-constants')
console.log(constants)

// iterate through constants
// format: constant, coinSymbol, coinName
// ie. [ 0x80000002, "LTC", "Litecoin" ]
// Some rows have no coin and are just indices and constants
constants.forEach(row => {
  const constant = row[0]
  const coinSymbol = row[1]
  const coinName = row[2]

  // ...
  //console.log(coinName, coinSymbol, constant)
})

// Find your coin by using filter
const liteCoin = constants.filter(item => item[1] === 'LTC')
// ---- OR filter on multiple elements if you are aware of duplicates
const liquidBitcoin = constants.filter(item => item[1] === 'LBTC' && item[2] === 'Liquid BTC')

// Be sure to assert there was only one result
// assert(liteCoin.length === 1)
// assert(liquidBitcoin.length === 1)

console.log(liteCoin[0])
// [ 2147483650, 'LTC', 'Litecoin' ]
console.log(liquidBitcoin[0])
// [ 2147485424, 'LBTC', 'Liquid BTC' ]

console.log(liteCoin[0][0])
// 2147483650 (which is 0x80000002 in hex)
console.log(liquidBitcoin[0][0])
// 2147485424 (which is 0x800006f0 in hex)