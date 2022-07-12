function solution(s, n) {
    let arr = s.split('');
    let result = [];
    
    //65 - 90
    //97 - 122
    for(let i=0; i<s.length; i++){
        let asc = arr[i].charCodeAt();
        if(s[i]===' '){
            result.push(' ');
        }
        else if(asc >= 65 && asc <= 90){
            if(asc + n > 90){
                asc = asc - 26;
            }
            result.push(String.fromCharCode(asc + n));
        } 
        
        else if (asc >= 97 && asc <= 122){
            if(asc + n > 122){
                asc = asc - 26;
            }
            result.push(String.fromCharCode(asc + n));
        }
        
    }
    return result.join('');

    // "문자열".charCodeAt([문자열 자릿수]);
    // String.fromCharCode([아스키코드값]);
}