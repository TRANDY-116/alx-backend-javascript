// Tests
const assert = require('assert');
const chai = require('chai');
const expect = chai.expect;
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber of type SUM', function () {
    it('rounded sum of 2 numbers integers', function () {
        expect(calculateNumber('SUM', 1, 2)).to.equal(3);
        expect(calculateNumber('SUM', 3, 5)).to.equal(8);
    });
    it('When adding floats, the numbers should be rounded up', function () {
        expect(calculateNumber('SUM', 1.6, 8.2)).to.equal(10);
        expect(calculateNumber('SUM', 8.8, 1.1)).to.equal(10);
    });

    it('If only one number is a float, it should add and round up normally', function () {
        expect(calculateNumber('SUM', 8, 1.7)).to.equal(10);
        expect(calculateNumber('SUM', 1, 8.9)).to.equal(10);
    });
});

describe('calculateNumber of type SUBTRACT', function () {
    it('rounded difference of 2 numbers integers', function () {
        expect(calculateNumber('SUBTRACT', 5, 2)).to.equal(3);
        expect(calculateNumber('SUBTRACT', 13, 5)).to.equal(8);
    });
    it('When subtracting floats, the numbers should be rounded up', function () {
        expect(calculateNumber('SUBTRACT', 10.5, 3.1)).to.equal(7);
        expect(calculateNumber('SUBTRACT', 8.8, 1.1)).to.equal(8);
    });

    it('If only one number is a float, it should subtract and round up normally', function () {
        expect(calculateNumber('SUBTRACT', 8, 1.7)).to.equal(6);
        expect(calculateNumber('SUBTRACT', 10, 8.9)).to.equal(1);
    });
});

describe('calculateNumber of type DIVIDE', function () {
    it('rounded division of 2 numbers integers', function () {
        expect(calculateNumber('DIVIDE', 10, 2)).to.equal(5);
        expect(calculateNumber('DIVIDE', 21, 3)).to.equal(7);
    });
    it('When dividing floats, the numbers should be rounded up', function () {
        expect(calculateNumber('DIVIDE', 15.5, 3)).to.equal(5);
        expect(calculateNumber('DIVIDE', 8.8, 2.2)).to.equal(4);
    });

    it('If only one number is a float, it should divide and round up normally', function () {
        expect(calculateNumber('DIVIDE', 8, 1.7)).to.equal(5);
        expect(calculateNumber('DIVIDE', 125.1, 18.9)).to.equal(7);
    });

    it('If the rounded value of b is equal to zero, return the string Error', function () {
        expect(calculateNumber('DIVIDE', 12.4, 0.2)).to.equal('Error');
        expect(calculateNumber('DIVIDE', 4, 0)).to.equal('Error');
        expect(calculateNumber('DIVIDE', -4, 0.8)).to.equal('Error');
    });
});