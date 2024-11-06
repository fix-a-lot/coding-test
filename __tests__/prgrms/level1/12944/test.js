const path = require('path');
const directoryName = path.basename(__dirname);

const {solution} = require('./solution');

describe(`suite ${directoryName}`, () => {
  test('case #1', () => {
    expect(solution([1, 2, 3, 4])).toEqual(2.5);
  });
  test('case #2', () => {
    expect(solution([5, 5])).toEqual(5);
  });
});
