function solution(arr1, arr2) {
  // var answer = [[]];
  // for (let i = 0; i < arr1.length; ++i) {
  //     for (let j = 0; j < arr1[i].length; ++j) {
  //         if (typeof answer[i] === 'undefined') {
  //             answer.push([]);
  //         }
  //         answer[i][j] = arr1[i][j] + arr2[i][j];
  //     }
  // }
  // return answer;

  let map1 = arr1.map((subArr1, idx1) => {
    let map = subArr1.map((subSubArr1, idx2) => {
      let newVar = subSubArr1 + arr2[idx1][idx2];
      // console.log('newVar:', newVar);
      return newVar;
    });
    // console.log('map:', map);
    return map;
  });
  // console.log('map1:', map1);
  return map1;
}

exports.solution = solution;
