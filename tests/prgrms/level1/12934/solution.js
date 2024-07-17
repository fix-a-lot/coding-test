function solution(n) {
  var answer = 0;

  let sqrt = Math.sqrt(n);
  console.log('sqrt:', sqrt);
  if (sqrt !== Math.trunc(sqrt)) {
    return -1;
  }
  answer = (sqrt + 1) ** 2;

  return answer;
}

exports.solution = solution;
