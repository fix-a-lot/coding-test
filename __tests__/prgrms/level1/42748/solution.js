function solution(array, commands) {
  var answer = [];
  commands.forEach(ele => {
    answer.push(doSomething(array, ele[0], ele[1], ele[2]));
  });
  return answer;
}

function doSomething(array, start, end, select) {
  let slicedArr = array.slice(start - 1, end).sort((a, b) => a - b);
  return slicedArr[select - 1];
}

exports.solution = solution;
