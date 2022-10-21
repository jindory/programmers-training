function solution(my_string, n) {
    var answer = '';
    for(let i=0; i<my_string.length; i++){
        answer = answer + my_string[i].repeat(n)
    }
    return answer;
}

//return my_string.split('').reduce((acc, cur) => acc + cur.repeat(n), '')