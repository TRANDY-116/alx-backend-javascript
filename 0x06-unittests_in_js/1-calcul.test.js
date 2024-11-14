// Tests
const calculateNumber = require('./1-calcul.js');
const assert = require('assert');

describe('calculateNumber of type SUM', function () {
    it('rounded sum of 2 numbers integers', function() {
        assert.equal(calculateNumber('SUM', 1, 2), 3);
        assert.equal(calculateNumber('SUM', 3, 5), 8);
    });
    it('When adding floats, the numbers should be rounded up', function() {
        assert.equal(calculateNumber('SUM', 1.6, 8.2), 10);
        assert.equal(calculateNumber('SUM', 8.8, 1.1), 10);
    });

    it('If only one number is a float, it should add and round up normally', function() {
        assert.equal(calculateNumber('SUM', 8, 1.7), 10);
        assert.equal(calculateNumber('SUM', 1, 8.9), 10);
    });

});

describe('calculateNumber of type SUBTRACT', function () {
    it('rounded difference of 2 numbers integers', function() {
        assert.equal(calculateNumber('SUBTRACT', 5, 2), 3);
        assert.equal(calculateNumber('SUBTRACT', 13, 5), 8);
    });
    it('When subtracting floats, the numbers should be rounded up', function() {
        assert.equal(calculateNumber('SUBTRACT', 10.5, 3.1), 8);
        assert.equal(calculateNumber('SUBTRACT', 8.8, 1.1), 8);
    });

    it('If only one number is a float, it should subtract and round up normally', function() {
        assert.equal(calculateNumber('SUBTRACT', 8, 1.7), 6);
        assert.equal(calculateNumber('SUBTRACT', 10, 8.9), 1);
    });

});

describe('calculateNumber of type DIVIDE', function () {
    it('rounded division of 2 numbers integers', function() {
        assert.equal(calculateNumber('DIVIDE', 10, 2), 5);
        assert.equal(calculateNumber('DIVIDE', 21, 3), 7);
    });
    it('When dividing floats, the numbers should be rounded up', function() {
        assert.equal(calculateNumber('DIVIDE', 15.5, 5), 3.2);
        assert.equal(calculateNumber('DIVIDE', 8.8, 2.2), 4.5);
    });

    it('If only one number is a float, it should divide and round up normally', function() {
        assert.equal(calculateNumber('DIVIDE', 8, 1.7), 4);
        assert.equal(calculateNumber('DIVIDE', 12.1, 5), 2.4);
    });

    it('If the rounded value of b is equal to zero, return the string Error', function() {
        assert.equal(calculateNumber('DIVIDE', 12.4, 0), 'Error');
        assert.equal(calculateNumber('DIVIDE', 4, 0), 'Error');
        assert.equal(calculateNumber('DIVIDE', -4, 0), 'Error');
    });

});