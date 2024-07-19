const path = require('path');
const directoryName = path.basename(__dirname);

const {solution} = require('./solution');

describe(`suite ${directoryName}`, () => {
  test('case #1', () => {
    const foo = [solution(['sun', 'bed', 'car'], 1), ['car', 'bed', 'sun']];
    expect(foo[0]).toEqual(foo[1]);
  });
  test('case #2', () => {
    const foo = [solution(['abce', 'abcd', 'cdx'], 2), ['abcd', 'abce', 'cdx']];
    expect(foo[0]).toEqual(foo[1]);
  });
  test('case #3', () => {
    const foo = [solution(['qwe', 'asd'], 2), ['asd', 'qwe']];
    expect(foo[0]).toEqual(foo[1]);
  });
  test('case #4', () => {
    const foo = [solution(['ase', 'awd'], 2), ['awd', 'ase']];
    expect(foo[0]).toEqual(foo[1]);
  });
  test('case #5', () => {
    const foo = [solution(['ase', 'awd'], 0), ['ase', 'awd']];
    expect(foo[0]).toEqual(foo[1]);
  });
  test('case #6', () => {
    const foo = [solution(['z', 'a'], 0), ['a', 'z']];
    expect(foo[0]).toEqual(foo[1]);
  });
  test('case #7', () => {
    const foo = [solution(['zxcvb', 'zsxcvg', 'zwefv'], 2), ['awd', 'ase']];
    expect(foo[0]).toEqual(foo[1]);
  });
  test('case #8', () => {
    const foo = [solution(['abc', 'abd', 'abe', 'ac'], 2), ['awd', 'ase', 'abc', 'abd', 'abe', 'ac']];
    expect(foo[0]).toEqual(foo[1]);
  });
});
