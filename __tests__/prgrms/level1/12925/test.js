const {solution} = require('./solution');
const path = require('path');

const directoryName = path.basename(__dirname);

describe(`suite ${directoryName}`, () => {
  test('case #1', () => {
    expect(solution('12345')).toEqual(12345);
  });
  test('case #1', () => {
    expect(solution('-2345')).toEqual(-2345);
  });
  test('case #1', () => {
    expect(solution('99')).toEqual(99);
  });
  test('case #1', () => {
    expect(solution('2')).toEqual(2);
  });
  test('case #1', () => {
    expect(solution('-1234')).toEqual(-1234);
  });
});
