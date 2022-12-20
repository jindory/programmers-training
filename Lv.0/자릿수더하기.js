function solution(n) {
    let str = String(n).split('');
    let arr = []
    for(let i=0; i<str.length; i++){
        arr.push(Number(str[i]))
    }
    return arr.reduce((a,c)=> a+c)
}


//     return n
//     .toString()
//     .split("")
//     .reduce((acc, cur) => acc + Number(cur), 0);

