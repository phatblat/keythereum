const keythereum = require('keythereum')
require('dotenv').config()

const dataDir = process.env.DATA_DIR
const address = process.env.WALLET_ADDRESS
const password = process.env.WALLET_PASSWORD

var keyObject = keythereum.importFromFile(address, dataDir)
var privateKey = keythereum.recover(password, keyObject)
console.log(`private key: ${privateKey.toString('hex')}`)
