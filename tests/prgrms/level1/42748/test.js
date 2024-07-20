const path = require('path');
const directoryName = path.basename(__dirname);

const {solution} = require('./solution');

describe(`suite ${directoryName}`, () => {
  test('case #1', () => {
    const foo = [
      solution(
        [1, 5, 2, 6, 3, 7, 4],
        [
          [2, 5, 3],
          [4, 4, 1],
          [1, 7, 3]
        ]
      ),
      [5, 6, 3]
    ];
    expect(foo[0]).toEqual(foo[1]);
  });
  // test('case #2', () => {
  //   const foo = [solution(), 0];
  //   expect(foo[0]).toEqual(foo[1]);
  // });
  // test('case #3', () => {
  //   const foo = [solution(), 0];
  //   expect(foo[0]).toEqual(foo[1]);
  // });
  // test('case #4', () => {
  //   const foo = [solution(), 0];
  //   expect(foo[0]).toEqual(foo[1]);
  // });
});
