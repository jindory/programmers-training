function solution(A,B){
    A.sort((a,b)=>a-b);
    B.sort((a,b)=>b-a);
    
    let arr = [];
    for(let i=0; i<A.length; i++){
        arr.push(A[i]*B[i]);
    }
    return arr.reduce((a,c)=>a+c);
}