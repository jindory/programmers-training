// ; 배열 arr가 주어집니다. 배열 arr의 각 원소는 숫자 0부터 9까지로 이루어져 있습니다. 
// ; 이때, 배열 arr에서 연속적으로 나타나는 숫자는 하나만 남기고 전부 제거하려고 합니다. 
// ; 단, 제거된 후 남은 수들을 반환할 때는 배열 arr의 원소들의 순서를 유지해야 합니다.

//문제 제대로 읽ㅈㅑ.... 제발...;ㅅ;...끝까지...글을 읽자...제발.... ㅎ-ㅎ🤨
function solution(arr)
{
    let area = []
    for(let i=0; i<arr.length; i++){
        if(arr[i]!==arr[i+1]){
            area.push(arr[i])
        } 
    }
    return area;
}