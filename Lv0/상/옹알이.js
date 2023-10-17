function solution(babbling) {
  let answer = 0;
  const answerString = ["aya", "ye", "woo", "ma"];

  babbling.forEach((str) => {
    let totalList = str.toString();

    answerString.forEach((answerStr) => {
      totalList = totalList.replaceAll(answerStr, ' ');
    })

    if(totalList.trim().length === 0) answer +=1;
  })
  return answer;
}

const babbling =["ayaye", "uuuma", "ye", "yemawoo", "ayaa"]

console.log(solution(babbling));

/**
 머쓱이는 태어난 지 6개월 된 조카를 돌보고 있습니다. 
 조카는 아직 "aya", "ye", "woo", "ma" 네 가지 발음을 최대 한 번씩 사용해 조합한(이어 붙인) 발음밖에 하지 못합니다. 
 문자열 배열 babbling이 매개변수로 주어질 때, 머쓱이의 조카가 발음할 수 있는 단어의 개수를 return하도록 solution 함수를 완성해주세요.
 */

 /** 문제풀이 
  주어진 문자열에 각 원소마다 replaceAll을 이용하여 정답문자열의 원소를 공백으로 바꾸어주고 trim()한 후 길이가 0으로 모두 지워졌다면 카운팅
  */ 
