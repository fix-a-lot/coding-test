const path = require('path');
const directoryName = path.basename(__dirname);

const {solution} = require('./solution');

describe(`suite ${directoryName}`, () => {
  test('case #1', () => {
    expect(solution(3)).toEqual('Odd');
  });
  test('case #2', () => {
    expect(solution(4)).toEqual('Even');
  });
});
