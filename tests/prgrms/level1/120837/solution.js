function solution(n) {
  let answer = 0;

  const ga = 5;
  const aa = 3;
  const la = 1;
  let remainHp = 0;

  answer += Math.floor(n / ga);
  remainHp = n % ga;

  answer += Math.floor(remainHp / aa);
  remainHp = remainHp % aa;

  answer += Math.floor(remainHp / la);

  return answer;
}

exports.solution = solution;
