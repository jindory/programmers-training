function solution(numbers) {
    var answer = numbers.reduce((a,c)=> a+c)
    return answer/numbers.length;
}