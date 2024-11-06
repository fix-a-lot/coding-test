const path = require('path');
const directoryName = path.basename(__dirname);

const {solution} = require('./solution');

describe(`suite ${directoryName}`, () => {
  test('case #1', () => {
    const foo = [solution([1, 1, 3, 3, 0, 1, 1]), [1, 3, 0, 1]];
    expect(foo[0]).toEqual(foo[1]);
  });
  test('case #2', () => {
    const foo = [solution([4, 4, 4, 3, 3]), [4, 3]];
    expect(foo[0]).toEqual(foo[1]);
  });
});
