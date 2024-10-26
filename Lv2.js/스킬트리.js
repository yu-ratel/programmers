function solution(skill, skill_trees) {
  let answer = skill_trees.length;

  skill_trees.map((el) => {
    const stack = [...skill];

    for (let i = 0; i < el.length; i += 1) {
      if (!skill.includes(el)) continue;
      if (stack.shift() !== el) {
        answer -= 1;
        break;
      }
    }
  });

  return answer;
}

let skill = "CBD";
let skill_trees = ["BACDE", "CBADF", "AECB", "BDA"];
