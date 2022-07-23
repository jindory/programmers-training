function solution(n) {
    let arr = new Array(n+1).fill(true);
    let end = Math.sqrt(n);
    let count = 0;
    
    // 1~n까지의 true값을 담은 배열을 만든다.
    // n의 제곱근값을 준비
    
    for(let i=2; i<=n; i++){
        if(arr[i]===false){
            continue;
        }
        
        for(let j=i*2; j<=n; j+=i){
            arr[j] = false;
        }
    }
    // 만약 값이 false라면 일단 ㄱ
    // 배수인 데이터는 소수가 아니므로 false로 설정;
    
    for(let i=2; i<=n; i++){
        if(arr[i]===true){
            count++
        }
    }
    return count
}