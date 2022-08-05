// const assert = require('assert');
import assert from 'assert';
import ganache from 'ganache-cli';
import Web3 from 'web3';    // always capitalise constructor function 


const web3 = new Web3(ganache.provider());  // create a provider

// Provider is a communication layer between web3 Library and some etheruim network
// like a phone.  Ganache and Web3 are like 2 people communicate
// No Provider , Web3 does not know whcih network to communicate


class Car {
    park() {
        return 'stopped';
    }

    drive(){
        return 'vroom';
    }
}

let car;            // outside the scope, can globally use

beforeEach(()=>{         // doing common initiatialise code before test commence
    car = new Car();
});

describe('Car',()=>{
    it('can park',()=>{
        assert.equal(car.park(), 'stopped');
    });
    it('can park',()=>{
        assert.equal(car.drive(), 'vroom');
    });
});