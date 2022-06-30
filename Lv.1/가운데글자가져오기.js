function solution(s) {
    let c = Math.floor(s.length/2);
    return s.length%2===1 ? s[c] : s[c-1]+s[c];
}