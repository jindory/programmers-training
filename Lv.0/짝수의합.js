function solution(n) {
    let count = 0;
    for(let i=n; i>=0; i--){
        if(i%2===0){
            count = count+i
        }
    }
    return count;
}