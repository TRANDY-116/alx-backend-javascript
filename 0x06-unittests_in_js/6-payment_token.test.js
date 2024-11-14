const getPaymentTokenFromAPI = require('./6-payment_token');
const { expect } = require('chai');

describe('getPaymentTokenFromAPI', function() {
    it('Make sure it returns a promise', function(done) {
        const promise = getPaymentTokenFromAPI();
        expect(promise).to.be.an.instanceof(Promise);
        done();
    });

    it('Makes sure it gives the correct response', function(done) {
        getPaymentTokenFromAPI(true).then(data => {
            expect(data).to.be.an('object');
            expect(data).to.have.property('data');
            done();
        }).catch(error => {
            done(error);
        });
    });
});
