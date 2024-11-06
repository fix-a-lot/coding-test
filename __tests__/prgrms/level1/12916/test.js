const {solution} = require('./solution');
const path = require('path');

const directoryName = path.basename(__dirname);

describe(`suite ${directoryName}`, () => {
  test('case #1', () => {
    expect(solution('pPoooyY')).toEqual(true);
  });
  test('case #2', () => {
    expect(solution('Pyy')).toEqual(false);
  });
  test('case #3', () => {
    expect(solution('aaa')).toEqual(true);
  });
  test('case #4', () => {
    expect(solution('pppp')).toEqual(false);
  });
  test('case #5', () => {
    expect(solution('ppppy')).toEqual(false);
  });
  test('case #6', () => {
    expect(solution('PYYp')).toEqual(true);
  });
  test('case #7', () => {
    expect(solution('Y')).toEqual(false);
  });
  test('case #8', () => {
    expect(solution('')).toEqual(true);
  });
});
