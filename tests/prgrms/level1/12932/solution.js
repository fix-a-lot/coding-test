function solution(n) {
  var answer = [];

  // for (let i = n; i > 0; i = Math.floor(i / 10)) {
  //   answer.push(i % 10);
  // }

  let str = n.toString();
  for (let i = str.length - 1; i >= 0; i--) {
    answer.push(Number(str[i]));
  }

  return answer;
}

exports.solution = solution;
