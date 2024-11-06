function solution(x) {
  let arr = x.toString().split('');
  let sum = arr.reduce((prev, cur) => Number(prev) + Number(cur));
  return x % sum === 0;
}

exports.solution = solution;
