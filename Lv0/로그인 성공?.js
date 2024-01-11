function solution(id_pw, db) {
  const id = new Set(db.map((el) => el[0]).concat(id_pw[0]));
  const cnt = db.length;

  if (id.size === cnt) {
    if (db.filter((el) => el[0] === id_pw[0] && el[1] === id_pw[1]).length > 0) return 'login'

    return 'wrong pw';
  }

  return 'fail';
}

let id_pw = ["programmer01", "15789"];
let db = [["programmer02", "111111"], ["programmer00", "134"], ["programmer01", "1145"]];

console.log(solution(id_pw, db));