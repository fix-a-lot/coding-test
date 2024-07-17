const path = require('path');
const directoryName = path.basename(__dirname);

const {solution} = require('./solution');

describe(`suite ${directoryName}`, () => {
  test('case #1', () => {
    expect(solution(121)).toEqual(144);
  });
  test('case #2', () => {
    expect(solution(3)).toEqual(-1);
  });
  test('case #3', () => {
    expect(solution(4)).toEqual(9);
  });
  test('case #4', () => {
    expect(solution(12345)).toEqual(-1);
  });
  test('case #5', () => {
    expect(solution(1)).toEqual(4);
  });
});
