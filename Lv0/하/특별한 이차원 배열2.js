function solution(arr) {
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length; j++) {
        if (arr[i][j] !== arr[j][i]) return 0;
      }
    }
    
    return 1;
}

let arr = [[5, 192, 33], [192, 72, 95], [33, 95, 999]];

console.log(solution(arr));

/**
 * 고차함수 every 풀이
  function isSymmetricMatrix(matrix) {
    return matrix.every((row, rowIndex) =>
        row.every((value, colIndex) => value === matrix[colIndex][rowIndex])
    ) ? 1 : 0;
}
 */