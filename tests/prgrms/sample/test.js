const path = require('path');
const directoryName = path.basename(__dirname);

const {solution} = require('./solution');

describe(`suite ${directoryName}`, () => {
  test('case #1', () => {
    expect(solution()).toEqual(0);
  });
  test('case #2', () => {
    expect(solution()).toEqual(0);
  });
  test('case #3', () => {
    expect(solution()).toEqual(0);
  });
  test('case #4', () => {
    expect(solution()).toEqual(0);
  });
});
