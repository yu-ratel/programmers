function solution(user_id, banned_id) {
  let answer = [];

  const check = (id, banId) => {
    if (id.length !== banId.length) return false;

    for (let i = 0; i < id.length; i += 1) {
      if (banId[i] !== "*" && id[i] !== banId[i]) return false;
    }

    return true;
  };

  const visited = [];

  const dfs = (idx, arr) => {
    if (arr.length === banned_id.length) {
      answer.push(arr.sort().join(", "));
      return;
    }

    for (let i = 0; i < user_id.length; i += 1) {
      for (let j = idx; j < banned_id.length; j += 1) {
        if (check(user_id[i], banned_id[j]) && !visited[i]) {
          visited[i] = true;
          arr.push(user_id[i]);
          dfs(idx + 1, arr);
          visited[i] = false;
          arr = [];
        }
      }
    }
  };

  dfs(0, []);

  return new Set(answer).size;
}

let user_id = ["frodo", "fradi", "crodo", "abc123", "frodoc"];
let banned_id = ["*rodo", "*rodo", "******"];

console.log(solution(user_id, banned_id));
