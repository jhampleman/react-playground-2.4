//const sum = require('./sum');


const obj = [
  {
    name: "option A",
    price: 5.2,
    id: 1
  },
  {
    name: "option B",
    price: 2.5,
    id: 2
  },
  {
    name: "option C",
    price: 9,
    id: 3
  }
];

/* Trying to Add Up Price of all 3 */
const nums = obj.map((...obj) => obj[0].price);
const value = nums.reduce((total, cost) => total + cost);

test('two plus two', () => {
/* Trying to Add Up Price of all 3 */



  expect(value).toBeGreaterThan(3);
  expect(value).toBeGreaterThanOrEqual(3.5);
  expect(value).toBeLessThan(20);
  expect(value).toBeLessThanOrEqual(17);

  // toBe and toEqual are equivalent for numbers
  expect(value).toBe(16.7);
});
