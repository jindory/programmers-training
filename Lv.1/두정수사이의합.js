// ; 두 정수 a, b가 주어졌을 때 a와 b 사이에 속한 모든 정수의 합을 리턴하는 함수, solution을 완성하세요.
// ; 예를 들어 a = 3, b = 5인 경우, 3 + 4 + 5 = 12이므로 12를 리턴합니다.

function solution(a, b) {
    var answer = 0;
    let number = [a,b];
    if(a===b) return a;
    
    number.sort((a,b)=>a-b);
    let diff = number[1]-number[0];
    for(let i=1; i<diff; i++){
        number.push(number[0]+i);
    }
    return number.reduce((a,c)=>a+c);
    
    // return (a+b)*(Math.abs(b-a)+1)/2; ㅇㅣ거뭔디?;;;
}