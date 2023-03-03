function solution(today, terms, privacies) {
    let answer = [];
    let timeSet = [];
    terms = terms.map((el) => el.split(' '));
    privacies = privacies.map((el) => el.split(' '));
    privacies.map((el) => {
        let day = el[0].split('.');
        for(let i = 0; i <terms.length; i++) {
            if (el[1] === terms[i][0]) el[1] = terms[i][1];
        }
        let data = day[1] * 1 + el[1] * 1;
        while (data > 12) {
            day[0] = (day[0] * 1 + 1).toString();
            data -= 12;
        }
        let time = data * 28 + (day[2] * 1);
        timeSet.push([day[0] * 1, time]);
    })
    let todayList = today.split('.');
    today = [todayList[0] * 1, (todayList[1] * 28 + todayList[2] * 1) + 1];

    for (let i = 0; i <timeSet.length; i++) {
        if (today[0] > timeSet[i][0]) answer.push(i + 1);
        else if (today[0] === timeSet[i][0]) {
            if(today[1] > timeSet[i][1]) answer.push(i + 1);
        } 
    }
    return answer;
}

let today = "2022.05.19";
let terms =["A 6", "B 12", "C 3"];
let privacies = ["2021.05.02 A", "2021.07.01 B", "2022.02.19 C", "2022.02.20 C"];

console.log(solution(today, terms, privacies));

// 모든 달은 28일 
// 약관의 기한을 넘어섰다면 파기
//[] 리터럴을 사용한다면 더 깔끔한 풀이가 되었을 것.