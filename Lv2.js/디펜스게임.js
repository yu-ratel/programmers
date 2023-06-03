class PriorityQueue {
  constructor() {
    this.heap = [];
  }

  push(value) {
    const heap = this.heap;
    heap.push(value);
    let index = heap.length - 1;
    let parent = Math.floor((index - 1) / 2);

    while (index > 0 && heap[index] < heap[parent]) {
      [heap[index], heap[parent]] = [heap[parent], heap[index]];
      index = parent;
      parent = Math.floor((index - 1) / 2);
    }
  }

  pop() {
    const heap = this.heap;
    if (heap.length <= 1) {
      return heap.pop();
    }

    const output = heap[0];
    heap[0] = heap.pop();
    let index = 0;

    while (index * 2 + 1 < heap.length) {
      let left = index * 2 + 1,
        right = index * 2 + 2,
        next = index;

      if (heap[next] > heap[left]) {
        next = left;
      }

      if (right < heap.length && heap[next] > heap[right]) {
        next = right;
      }

      if (next === index) {
        break;
      }

      [heap[index], heap[next]] = [heap[next], heap[index]];
      index = next;
    }

    return output;
  }
}
function solution(n, k, enemy) {
  let queue = new PriorityQueue();
  let sum = 0;

  enemy.slice(0, k).map((el) => queue.push(el));
  for (let i = k; i < enemy.length; i++) {
    queue.push(enemy[i]);
    let min = queue.pop();
    if (sum + min > n) return i;
    sum += min;
  }

  return enemy.length;
}

let n = 7;
let k = 3;
let enemy = [4, 2, 4, 5, 3, 3, 1];

console.log(solution(n, k, enemy));

// 시간초과 풀이
// function solution(n, k, enemy) {
//   let cnt = 0;
//   let stack = [];
//   let sum = 0;

//   if (k === enemy.length) return k;

//   for (let i = 0; i < enemy.length; i++) {
//     stack.push(enemy[i]);
//     sum += enemy[i];
//     if (sum > n && cnt < k) {
//       let bonus = Math.max(...stack);
//       stack[stack.indexOf(bonus)] = 0;
//       sum -= bonus;
//       cnt++;
//     }
//     if (cnt === k && sum + enemy[i + 1] > n) break;
//   }
//   return stack.filter((el) => el).length + cnt;
// }

//우선순위 queue 와 heap 에 대한 공부필요..
