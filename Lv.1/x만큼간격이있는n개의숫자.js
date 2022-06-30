function solution(x, n) {
    let newArr = []
    for(let i=1; i<=n; i++){
        newArr.push(x*i)
    }
    return newArr
}