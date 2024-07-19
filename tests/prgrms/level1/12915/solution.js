function solution(strings, n) {
  strings.sort((a, b) => {
    let [codePointA, codePointB] = getDifferentLetter(a, b, n);
    return codePointA - codePointB;
  });
  return strings;
}

function getDifferentLetter(a, b, idx) {
  if (a[idx] === b[idx]) {
    return getDifferentLetter(a, b, ++idx);
  }
  return [a.charCodeAt(idx), b.charCodeAt(idx)];
}

exports.solution = solution;
