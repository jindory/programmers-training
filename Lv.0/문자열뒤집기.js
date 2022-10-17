function solution(my_string) {
    let strong = "";
    for(let i = my_string.length-1 ; i>=0; i--){
        strong = strong + my_string[i]
    }
    return strong;
}

// my_string.split('').reverse().join('');