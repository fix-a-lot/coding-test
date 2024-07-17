const path = require('path');
const directoryName = path.basename(__dirname);

const {solution} = require('./solution');

describe(`suite ${directoryName}`, () => {
  test('case #1', () => {
    expect(solution(10)).toEqual(3);
  });
  test('case #2', () => {
    expect(solution(12)).toEqual(11);
  });
});
