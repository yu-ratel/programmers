function solution(wallpaper) {
    let answer = [];
    let x1 = y1 = 0;
    let x = wallpaper.map((el) => el.replace(/#/g, 0).indexOf(0));
    for (let i = 0; i < x.length; i++) {
        if(x[i] >= 0) {
            x1 = i;
            break ;
        }
    }
    let y = wallpaper.map((el) => el.replace(/#/g, 0).lastIndexOf(0));
    for (let i = y.length; i >= 0; i--) {
        if(y[i] >= 0) {
            y1 = i + 1;
            break ;
        }
    }
    let xList = [x1, Math.min(...x.filter((el) => el > -1))];
    let yList = [y1, Math.max(...y)+1];
    
    return answer.concat(xList, yList);
}

let wallpaper = ["..", "#."];
console.log(solution(wallpaper));

// 칸의 개수를 구하고 -> 제일 왼쪽을 찾아서 행 3 제일 위에있는것중에 파일을 찾아서 그 열 (1, 3)
// 가장 오른쪽을 찾아서 열  제일아래 행 (행 ,열 )