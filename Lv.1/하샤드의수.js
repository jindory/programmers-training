function solution(x) {
    let arr = String(x).split('');
    let sum = arr.reduce((a,c)=> Number(a)+Number(c),0);
    if(x % sum === 0) return true;
    return false
}