function solution(before, after) {
    return before.split('').sort().join('') === after.split('').sort().join('') ? 1 : 0;
    
//     before = [...before].sort()
//     after = [...after].sort();
    
//     return  before.filter((a,i)=> a === after[i]).length === after.length? 1:0
}