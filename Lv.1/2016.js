function solution(a, b) {
    let days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"]
    let dt = new Date(`2016-${a}-${b}`);
    let day = dt.getDay()
    
    return days[day];
}