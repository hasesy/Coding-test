function solution(arr, queries) {
    let answer = [];

  for (let i = 0; i < queries.length; i++) {
    const query = queries[i];

    const result = arr
      .slice(query[0], query[1] + 1)
      .filter((num) => num > query[2]);

    if (result.length === 1) {
      answer.push(result[0]);
    } else if (result.length >= 2) {
      answer.push(Math.min(...result));
    } else {
      answer.push(-1);
    }
  }

  return answer;
}