function solution(s) {
    let arr = s.split(' ');
    arr = arr.map((el) =>  parseInt(el));
    arr.sort((a,b)=> a-b);
    result = arr[0] + ' ' + arr[arr.length-1];
    return String(result);
}

// 헥;;;;;; !! 
// const arr = s.split(' ');
// return Math.min(...arr)+' '+Math.max(...arr);