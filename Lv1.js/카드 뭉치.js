function solution(cards1, cards2, goal) {
    let target1 = 0;
    let target2 = 0;
    for (let i = 0; i < goal.length; i++) {
        if (goal[i] === cards1[target1]) target1++;
        else if (goal[i] === cards2[target2]) target2++;
    }
    return target1 + target2 === goal.length ? "Yes" : "NO";
}

let cards1 = ["i", "water", "drink"];
let cards2 = ["want", "to"];
let goal = 	["i", "want", "to", "drink", "water"];

console.log(solution(cards1, cards2, goal));