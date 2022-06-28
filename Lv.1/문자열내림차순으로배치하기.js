// 문자열 s에 나타나는 문자를 큰것부터 작은 순으로 정렬해 새로운 문자열을 리턴하는 함수, 
//solution을 완성해주세요.

function solution(s) {
    // console.log(s.split(''));
    // ['Z', 'b', 'c', 'd', 'e', 'f', 'g']
    // console.log(s.split('').sort()); => 대문자는 소문자보다 작은 것으로 간주
    // ['Z', 'b', 'c', 'd', 'e', 'f', 'g']
    // console.log(s.split('').sort().reverse());
    // ['g', 'f', 'e', 'd', 'c', 'b', 'Z']
    // console.log(s.split('').sort().reverse().join(''));
    // gfedcbZ

    return s.split('').sort().reverse().join('');
}
