const chai = require("chai");
const expect = chai.expect;
const sinon = require("sinon");
const { describe } = require('mocha');
const Utils = require('./utils.js');
const sendPaymentRequestToApi = require('./4-payment.js');
const stub = sinon.stub(Utils, 'calculateNumber');

describe('sendPaymentRequestToApi', function () {
    it('Makes sure stubs is being called and used', function () {
    stub.withArgs('SUM', 100, 20).returns(10);
    sendPaymentRequestToApi(100, 20);
    expect(Utils.calculateNumber('SUM', 100, 20)).to.be.equal(10);
    })

    it('Verify that console.log is logging the correct message', function () {
    const spy = sinon.spy(console, 'log');
    sendPaymentRequestToApi(100, 20);
    sinon.assert.calledOnceWithExactly(spy, 'The total is: 10');
    });
});
