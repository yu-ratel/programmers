function soultion(myString, pat) {
  let cnt = 0;

  for (let i = 0; i < myString.length; i += 1) {
    const tmp = myString.slice(i, i + pat.length);

    if (tmp.length !== pat.length) break;
    if (tmp === pat) cnt += 1;
  }

  return cnt;
}

let myString = "banana";
let pat = "ana";

console.log(soultion(myString, pat));
