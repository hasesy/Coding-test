function solution(str1, str2) {
    let answer = '';
    const arrStr1 = str1.split('');
    const arrStr2 = str2.split('');
    
    answer = arrStr1.map((value, index) => value + arrStr2[index]);

    
//     나의 풀이
//     let i = 0;
    
//     arrStr1.forEach((value) => {
//         answer += value + arrStr2[i];
//         i++;
//         });
    return answer.join('');
}