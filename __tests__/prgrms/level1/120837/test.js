const path = require('path');
const directoryName = path.basename(__dirname);

const {solution} = require('./solution');

describe(`suite ${directoryName}`, () => {
  test('case #1', () => {
    const foo = [solution(23), 5];
    expect(foo[0]).toEqual(foo[1]);
  });
  test('case #2', () => {
    const foo = [solution(24), 6];
    expect(foo[0]).toEqual(foo[1]);
  });
  // test('case #3', () => {
  //   const foo = [solution(), 0];
  //   expect(foo[0]).toEqual(foo[1]);
  // });
  // test('case #4', () => {
  //   const foo = [solution(), 0];
  //   expect(foo[0]).toEqual(foo[1]);
  // });
});
