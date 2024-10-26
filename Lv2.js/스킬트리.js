function solution(skill, skill_trees) {
  let answer = skill_trees.length;

  skill_trees.map((target) => {
    const stack = [...skill];

    for (let i = 0; i < target.length; i += 1) {
      if (!skill.includes(target[i])) continue;
      if (stack.shift() !== target[i]) {
        answer -= 1;
        break;
      }
    }
  });

  return answer;
}

let skill = "CBD";
let skill_trees = ["BACDE", "CBADF", "AECB", "BDA"];
