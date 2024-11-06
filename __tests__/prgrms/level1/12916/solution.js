exports.solution = s => {
  let answer = true;

  const p = s.match(/p/gi);
  const y = s.match(/y/gi);

  if (p === null && y === null) {
    answer = true;
  } else if (p === null || y === null) {
    answer = false;
  } else {
    answer = p.length === y.length;
  }

  return answer;
};
