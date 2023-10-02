function solution(strlist) {
    return strlist.map((str)=> str.length);
}

const strlist = [["We", "are", "the", "world!"],["I", "Love", "Programmers."]];

strlist.map((strs) => console.log(solution(strs)));
