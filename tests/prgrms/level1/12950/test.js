const path = require('path');
const directoryName = path.basename(__dirname);

const {solution} = require('./solution');

describe(`suite ${directoryName}`, () => {

  test('case #1', () => {
    const foo = [solution([[1,2],[2,3]], [[3,4],[5,6]]), [[4,6],[7,9]]];
    expect(foo[0]).toEqual(foo[1]);
  });
  test('case #2', () => {
    const foo = [solution([[1],[2]], [[3],[4]]), [[4],[6]]];
    expect(foo[0]).toEqual(foo[1]);
  });
});
