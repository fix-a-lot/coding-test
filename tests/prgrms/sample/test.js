const path = require('path');
const directoryName = path.basename(__dirname);

const {solution} = require('./solution');

describe(`suite ${directoryName}`, () => {
  test('case #1', () => {
    const a = solution();
    const e = 0;
    expect(a).toEqual(e);
  });
  test('case #2', () => {
    const a = solution();
    const e = 0;
    expect(a).toEqual(e);
  });
  test('case #3', () => {
    const a = solution();
    const e = 0;
    expect(a).toEqual(e);
  });
  test('case #4', () => {
    const a = solution();
    const e = 0;
    expect(a).toEqual(e);
  });
});
