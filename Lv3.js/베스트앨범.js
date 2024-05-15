function solution(genres, plays) {
  let playCountMap = new Map();
  let songNumberMap = new Map();

  genres.forEach((genre, index) => {
    playCountMap.set(
      genre,
      playCountMap.has(genre)
        ? playCountMap.get(genre) + plays[index]
        : plays[index]
    );

    songNumberMap.set(
      genre,
      songNumberMap.has(genre)
        ? songNumberMap
            .get(genre)
            .concat([plays[index] + `${index}`])
            .sort((a, b) => {
              const [na, nb] = [
                a.slice(0, a.length - 1),
                b.slice(0, b.length - 1),
              ];
              return nb - na;
            })
        : [plays[index] + `${index}`]
    );
  });

  const procedure = [...playCountMap]
    .sort((a, b) => b[1] - a[1])
    .map((el) => el[0]);

  const answer = [];
  procedure.map((genre) => {
    if (songNumberMap.get(genre)) {
      answer.push(
        songNumberMap
          .get(genre)
          .slice(0, 2)
          .map((el) => Number(el.slice(-1)))
      );
    }
  });

  return answer.flat();
}

let genres = ["classic", "pop", "classic", "classic", "pop"];
let plays = [500, 600, 150, 800, 2500];

console.log(solution(genres, plays));
