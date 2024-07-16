const {solution} = require('./solution');
const path = require('path');

const directoryName = path.basename(__dirname);

describe(`suite ${directoryName}`, () => {
  test('case #1', () => {
    let result = solution(
      ['muzi', 'ryan', 'frodo', 'neo'],
      [
        'muzi frodo',
        'muzi frodo',
        'ryan muzi',
        'ryan muzi',
        'ryan muzi',
        'frodo muzi',
        'frodo ryan',
        'neo muzi'
      ]
    );
    expect(result).toEqual(2);
  });
  test('case #2', () => {
    const result = solution(
      ['joy', 'brad', 'alessandro', 'conan', 'david'],
      [
        'alessandro brad',
        'alessandro joy',
        'alessandro conan',
        'david alessandro',
        'alessandro david'
      ]
    );
    expect(result).toEqual(4);
  });
  test('case #3', () => {
    const result = solution(
      ['a', 'b', 'c'],
      ['a b', 'b a', 'c a', 'a c', 'a c', 'c a']
    );
    expect(result).toEqual(0);
  });
});
