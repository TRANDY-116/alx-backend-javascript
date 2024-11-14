const chai = require("chai");
const expect = chai.expect;
const sinon = require("sinon");
const { describe } = require('mocha');
const Utils = require('./utils.js');
const sendPaymentRequestToApi = require('./3-payment.js');
const spy = sinon.spy(Utils, 'calculateNumber');

describe('sendPaymentRequestToApi', function() {
    it('Makes sure the math function used are the same.', function() {
        sendPaymentRequestToApi(100, 20);
        sinon.assert.calledOnce(spy);
    });
});