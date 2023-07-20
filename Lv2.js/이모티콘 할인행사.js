function solution(users, emoticons) {
  let [join, sales] = [0, 0];
  let discount = [10, 20, 30, 40];

  users.map((user) => {
    let list = [];
    let sum = [];
    discount.map((el) => {
      el >= user[0] ? list.push([el, user[1]]) : null;
    });
    list.map((el) => {
      let max = [];
      let dis = 1 - el[0] / 100;
      emoticons.map((emoticon) => max.push(emoticon * dis));

      el[1] = Math.max(...max);
    });

    list = list.sort((a, b) => a[1] - b[1]);

    if (list.length > 1) {
      sum.push(list.pop()[1] + list.pop()[1]);
      if (sum >= user[1]) join++;
      else sales = sum;
    } else {
      if (list[0][1] >= user[1]) join++;
      else sales = list[0][1];
    }
  });

  return [join, sales];
}

let users = [
  [40, 2900],
  [23, 10000],
  [11, 5200],
  [5, 5900],
  [40, 3100],
  [27, 9200],
  [32, 6900],
];
let emoticons = [1300, 1500, 1600, 4900];

console.log(solution(users, emoticons));
