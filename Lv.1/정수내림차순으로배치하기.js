// 함수 solution은 정수 n을 매개변수로 입력받습니다. 
// n의 각 자릿수를 큰것부터 작은 순으로 정렬한 새로운 정수를 리턴해주세요.

function solution(n) {
    let result = n.toString();
    let newArr = result.split('');
    let rev = newArr.sort((a,b)=>b-a);
    return Number(rev.join(''));
}