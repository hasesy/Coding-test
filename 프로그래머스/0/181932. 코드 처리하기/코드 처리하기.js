function solution(code) {
    const arrCode = code.split('');
    let mode = 0;
    let ret = [];
    
    for (let i =0; i < arrCode.length; i++) {
        if (mode === 0 && arrCode[i] === '1') {
                mode = 1;
        } else if ( mode === 0 && i % 2 === 0) {
                ret.push(arrCode[i]);
        } else if (mode === 1 && arrCode[i] === '1') {
                mode = 0;
        } else if (mode === 1 && i % 2 === 1) {
                ret.push(arrCode[i]);
        }
    }
    
    let answer = ret.join('');
    
    if (answer === '') {
        answer = 'EMPTY';
    }
    
    return answer;
}