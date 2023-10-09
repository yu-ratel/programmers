function solution(num_list) {
  let [odd, even] = [0, 0];

  num_list.map((v, i) => i % 2 === 1 ? odd += v : even += v);

  return Math.max(odd, even);
}

