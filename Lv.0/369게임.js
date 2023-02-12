function solution(order) {
    return String(order).split('').filter(num => num === '3' || num === '6' || num === '9').length;
}



    // var answer = String(order).split(/[369]/g).length - 1;
