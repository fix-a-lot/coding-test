function solution(arr) {
  let answer = 0;

  answer = arr.reduce((previousValue, currentValue, currentIndex, array) => {
    let sum = previousValue + currentValue;
    if (currentIndex === array.length - 1) {
      return sum / array.length;
    }
    return sum;
  }, 0);

  return answer;
}

exports.solution = solution;
