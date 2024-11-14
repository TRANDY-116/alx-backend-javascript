const {
    expect,
  } = require('chai');
  const request = require('request');
  
  describe('IndexPage', () => {
    it('make sure of correct status code', () => {
      request('http://localhost:7865', (_error, response, _body) => {
        expect(response.statusCode).to.equal(200);
      });
    });
  
    it('make sure of correct result', () => {
      request('http://localhost:7865', (_err, _res, body) => {
        expect(body).to.contain('Welcome to the payment system');
      });
    });
  
    it('make sure of correct content length', () => {
        request('http://localhost:7865', (_err, res, _body) => {
          expect(res.headers['content-length']).to.equal('29');
       });
    });

    it('make sure of correct content type', () => {
      request('http://localhost:7865', (_err, res, _body) => {
        expect(res.headers['content-type']).to.equal('text/html; charset=utf-8');
      });
    }); 
  });

  describe('Test CartPage', () => {
    it('make sure of correct status code with number id', () => {
      request('http://localhost:7865/cart/12', (_error, response, _body) => {
        expect(response.statusCode).to.equal(200);
      });
    });
  
    it('make sure of correct result with number id', () => {
      request('http://localhost:7865/cart/12', (_err, _res, body) => {
        expect(body).to.contain('Payment methods for cart 12');
      });
    });
  
    it('make sure of error status with non number id', () => {
      request('http://localhost:7865/cart/jes', (_error, response, _body) => {
        expect(response.statusCode).to.equal(404);
      });
    });
  
    it('make sure of error body content with non number id', () => {
      request('http://localhost:7865/cart/jes', (_error, _response, body) => {
        expect(body).to.contain('Cannot GET /cart/jes');
      });
    });
  
    it('make sure of correct content type', () => {
      request('http://localhost:7865/cart/12', (_err, res, _body) => {
        expect(res.headers['content-type']).to.equal('text/html; charset=utf-8');
      });
    });
  
    it('make sure of correct content length', () => {
      request('http://localhost:7865/cart/12', (_err, res, _body) => {
        expect(res.headers['content-length']).to.equal('27');
      });
    });
  });

  describe('Test for equality and post integration', () => {
    it('Makes sure of correct status code', () => {
      request('http://localhost:7865/available_payments', (_error, res, _body) => {
        expect(res.statusCode).to.equal(200);
      });
    });
  
    it('Makes sure of correct content type', () => {
      request('http://localhost:7865/available_payments', (_error, res, _body) => {
        expect(res.headers['content-type']).to.equal('application/json; charset=utf-8');
      });
    });
  
    it('Make sure of correct result with form data value', () => {
        request('http://localhost:7865/available_payments', (_error, _res, body) => {
          expect(JSON.parse(body)).to.deep.equal({
            payment_methods: {
              credit_cards: true,
              paypal: false
            }
          });
        });
      });
    
    it('Make sure of correct content length', () => {
      request('http://localhost:7865/available_payments', (_error, res, _body) => {
        expect(res.headers['content-length']).to.equal('56');
      });
    });
  });
  