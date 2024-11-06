const path = require('path');
const directoryName = path.basename(__dirname);

const {solution} = require('./solution');

describe(`suite ${directoryName}`, () => {
  test('case #1', () => {
    expect(solution(10)).toEqual(true);
  });
  test('case #2', () => {
    expect(solution(12)).toEqual(true);
  });
  test('case #3', () => {
    expect(solution(11)).toEqual(false);
  });
  test('case #4', () => {
    expect(solution(13)).toEqual(false);
  });
});
