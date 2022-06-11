function solution(phone_number) {
    const a = phone_number;
    var result = "*".repeat(a.length-4) + a.slice(-4);
    return result;
}

// 크르르...
// return s.replace(/\d(?=\d{4})/g, "*");