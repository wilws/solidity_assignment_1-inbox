// require('./contracts/Inbox.sol') //Bad! We dun use it as node will execute it as js file.

// we do it in this way:
const path = require('path');    // no matter use linux / window system, it generate a correct path
const fs = require('fs');
const solc = require('solc');
const { default: Web3 } = require('web3');

// Get access to raw file content
const inboxPath = path.resolve(__dirname, 'contracts', 'Inbox.sol');  // __dirname is the absolute path to the directory containing the source file.
const source = fs.readFileSync(inboxPath,'utf8');

// use compile to translate raw content 
module.exports = solc.compile(source,1).contracts[':Inbox'];

