function solution(arr) {
  var answer = [];

  // for (let i = 0; i < arr.length; ++i) {
  //   if (answer.length && answer[answer.length - 1] === arr[i]) {
  //     continue;
  //   }
  //   answer.push(arr[i]);
  // }

  answer = arr.filter((ele, index, originalArr) => ele !== originalArr[index -1 ]);

  return answer;
}

exports.solution = solution;
