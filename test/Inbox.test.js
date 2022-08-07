// // const assert = require('assert');
// import assert from 'assert';
// import ganache from 'ganache-cli';
// import Web3 from 'web3';    // always capitalise constructor function 
// import { interface, bytecode } from '../compile';

// https://rinkeby.infura.io/v3/619c42f3f22a4c9a84b595a6f6221098

const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const { interface, bytecode } = require('../compile');



const web3 = new Web3(ganache.provider());  // create a provider

let accounts;
let inbox;
// const INITIAL_STRING = 'Hi there!'

beforeEach(async()=>{
   //Get a list of all accounts
   accounts = await web3.eth.getAccounts();

    // Use one of those account to deploy the contract
    inbox = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode, arguments: ['Hi there!'] })
    .send({ from: accounts[0], gas:'1000000' });
});


describe('Inbox',()=>{
    it('deploys a contract', ()=>{
        assert.ok(inbox.options.address);   // .ok =  check if the return is a defined value
    });                                      //   inbox.options.address is the return array {inbox:{option{address:"xxxx"}}}
    it('has a default message',async ()=>{
        const message = await inbox.methods.message().call();   // message is the name of the vaiable as well as the automatically in-built function to return the value of the variable
        assert.equal(message, 'Hi there!')
    });
    it('can change the message', async()=>{
        await inbox.methods.setMessage('bye').send({ 
            from: accounts[0], gas:'1000000' 
        })
        const message = await inbox.methods.message().call();
        assert.equal(message, 'bye');
    });
})