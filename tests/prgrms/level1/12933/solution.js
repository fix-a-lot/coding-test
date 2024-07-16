function solution(n) {
  let answer = 0;
  // let arr = [...n.toString()];
  // arr.sort((a, b) => b - a);
  // answer = Number.parseInt(arr.join(''));

  let str = String(n);
  answer = str.split('').sort().reverse().join('');
  return Number(answer);
}

exports.solution = solution;
