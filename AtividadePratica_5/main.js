const { numberRequest } = require('./input');
const { validNumber } = require('./numberPrime');

const number = numberRequest();
validNumber(number);