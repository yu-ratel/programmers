class MinHeap {
  constructor() {
    this.heap = [];
  }

  insert(value) {
    this.heap.push(value);
    this.heapifyUp();
  }

  extractMin() {
    if (this.isEmpty()) {
      return null;
    }
    if (this.heap.length === 1) {
      return this.heap.pop();
    }

    const minValue = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown(0);

    return minValue;
  }

  heapifyUp() {
    let currentIndex = this.heap.length - 1;
    while (currentIndex > 0) {
      const parentIndex = Math.floor((currentIndex - 1) / 2);
      if (this.heap[currentIndex] < this.heap[parentIndex]) {
        [this.heap[currentIndex], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[currentIndex]];
        currentIndex = parentIndex;
      } else {
        break;
      }
    }
  }

  heapifyDown(index) {
    const leftChildIndex = 2 * index + 1;
    const rightChildIndex = 2 * index + 2;
    let smallest = index;

    if (leftChildIndex < this.heap.length && this.heap[leftChildIndex] < this.heap[smallest]) {
      smallest = leftChildIndex;
    }

    if (rightChildIndex < this.heap.length && this.heap[rightChildIndex] < this.heap[smallest]) {
      smallest = rightChildIndex;
    }

    if (smallest !== index) {
      [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
      this.heapifyDown(smallest);
    }
  }

  isEmpty() {
    return this.heap.length === 0;
  }

  size() {
    return this.heap.length;
  }
}


function solution (scoville, k) {
  let minHeap = new MinHeap();
  let answer = 0;

  for(let i = 0; i < scoville.length; i++) {
    minHeap.insert(scoville[i]);
  }

  while (minHeap.size() !== 1) {
    // minHeap.heap[0] < k && Minheap.size() > 1 로 변경하면 81번째 줄 삭제가능
    let first = minHeap.extractMin();
    let second = minHeap.extractMin();

    if (first >= k) return answer;

    minHeap.insert(first + second * 2);
    answer++;
  }

  return minHeap.heap[0] > k ? answer : -1;
}
let scoville = [1, 1, 10];
let k = 4;

console.log(solution(scoville, k));


// 틀렸던 부분

// heap 에 대한 기본 개념적인 문제

/* 테스트케이스 21~25 
  for(let i = 0; i < scoville.length; i++) {
    minHeap.insert(scoville[i]);
  }
  이 부분에서 scovile[i] < k 로 k 보다 큰값과 섞는 경우를 지웠음
  ex) [1, 1, 10] k = 4 라면 1과 10을 사용하여 정답을 2로 만들어야하지만 
  10을 heap에 넣지 않았으니 4를 넘지 못하고 -1이 나옴 */
