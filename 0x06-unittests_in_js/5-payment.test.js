const chai = require("chai");
const expect = chai.expect;
const sinon = require("sinon");
const { describe, beforeEach, afterEach } = require('mocha');
const Utils = require('./utils.js');
const sendPaymentRequestToApi = require('./5-payment.js');

describe('sendPaymentRequestToApi', function () {
    beforeEach(function() {
        sinon.spy(console, 'log');
    });

    it('Makes sure console is logging the string "The total is: 120"', function () {
        sendPaymentRequestToApi(100, 20);
        expect(console.log.calledWith('The total is: 120')).to.be.true;
        expect(console.log.calledOnce).to.be.true;
    })

    it('Makes sure console.log is logging the string "The total is: 20"', function() {
        sendPaymentRequestToApi(10, 10);
        expect(console.log.calledWith('The total is: 20')).to.be.true;
        expect(console.log.calledOnce).to.be.true;
    });

    afterEach(function() {
        sinon.restore();
    });
});