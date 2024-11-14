// Tests
const calculateNumber = require('./0-calcul.js');
const assert = require('assert');

describe('calculateNumber', function() {
    it('rounded sum of 2 numbers integers', function() {
        assert.strictEqual(calculateNumber(1, 2), 3);
        assert.strictEqual(calculateNumber(3, 5), 8);
    });
    it('When adding flosts, the numbers should be rounded up', function() {
        assert.strictEqual(calculateNumber(1.6, 8.2), 10);
        assert.strictEqual(calculateNumber(8.8, 1.1), 10);
    });

    it('If only one number is a float, it should add and round up normally', function() {
        assert.strictEqual(calculateNumber(8, 1.7), 10);
        assert.strictEqual(calculateNumber(1, 8.9), 10);
    })

})