const { expect } = require('chai');
const arrayChange = require('./src/18arrayChange');

test('array Change', () => {
 expect(arrayChange.arrayChange([1, 1, 1])).toBe(3);

});