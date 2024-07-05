function solution(queue1, queue2) {
  const end = queue1.length * 3;
  let count = 0;
  let q1Sum = queue1.reduce((acc, cur) => (acc += cur), 0);
  let q2Sum = queue2.reduce((acc, cur) => (acc += cur), 0);
  let q1Idx = 0;
  let q2Idx = 0;

  while (count < end) {
    if (q1Sum > q2Sum) {
      q1Sum -= queue1[q1Idx];
      queue2.push(queue1[q1Idx]);
      q2Sum += queue1[q1Idx];
      q1Idx++;
      count++;
    } else if (q1Sum < q2Sum) {
      q2Sum -= queue2[q2Idx];
      queue1.push(queue2[q2Idx]);
      q1Sum += queue2[q2Idx];
      q2Idx++;
      count++;
    } else {
      return count;
    }
  }

  return -1;
}