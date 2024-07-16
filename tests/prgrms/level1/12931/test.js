const {solution} = require('./solution');
const path = require('path');

const directoryName = path.basename(__dirname);

describe(`suite ${directoryName}`, () => {
  test('case #1', () => {
    expect(solution(123)).toEqual(6);
  });
  test('case #1', () => {
    expect(solution(987)).toEqual(24);
  });
});
