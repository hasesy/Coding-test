function solution(a, b) {
    // Math.max() 사용!
    return Math.max(`${a}${b}`, `${b}${a}`)
    
//     나의 풀이
//     const strA = String(a);
//     const strB = String(b);
//     const sumStrAB = Number(strA + strB);
//     const sumStrBA = Number(strB + strA);
    
//     if (sumStrAB < sumStrBA) {
//         return sumStrBA;
//     } else {
//         return sumStrAB;
//     }
}