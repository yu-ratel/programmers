function solution(food) {
    let answer = '';
    for (let i = 1; i <food.length; i++) {
        let cnt = Math.floor(food[i] / 2);
        let roop = i;
        while(cnt != 0) {
            answer+= roop;
            cnt --;
        }
    }
    return answer + 0 + answer.split('').reverse().join('');
}

let food = [1, 3, 4, 6];