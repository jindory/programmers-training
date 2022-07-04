function solution(x) {
    let arr = String(x).split('');
    let sum = arr.reduce((a,c)=> Number(a)+Number(c),0);
    console.log(arr, sum);
    if(x % sum === 0) return true;
    return false
}