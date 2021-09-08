// 给定整数数组 nums 和整数 k，请返回数组中第 k 个最大的元素。

// 请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。

// 这次我们来构建一个最大堆

class MaxHeap {
  state: number[];
  constructor(nums: number[]) {
    this.adjust(nums);
    this.state = nums;
  }

  private swap(i: number, j: number, arr = this.state) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }

  private adjust(arr = this.state) {
    // 首先还是找到最大下标的根节点

    let i = Math.floor(arr.length / 2);

    while (2 * i + 1 > arr.length - 1) {
      i--;
    }

    while (i >= 0) {
      this.dfs(i, arr);
      i--;
    }
  }

  private dfs(i: number, arr: number[]) {
    const left = 2 * i + 1;
    if (left > arr.length - 1) return;
    let max: number;
    if (left === arr.length - 1) {
      max = left;
    } else {
      max = arr[left] > arr[left + 1] ? left : left + 1;
    }

    if (arr[i] >= arr[max]) return;
    this.swap(i, max, arr);

    this.dfs(max, arr);
  }

  pop() {
    const { state } = this;
    if (!state.length) return null;
    const res = state.shift()!;
    if (!state.length) return res;

    const last = state.pop()!;
    state.unshift(last);
    this.adjust();
    return res;
  }
}

export function findKthLargest(nums: number[], k: number): number {
  const heap = new MaxHeap(nums);
  let ans: number;

  while (k - 1 >= 0) {
    ans = heap.pop()!;
    k--;
  }

  return ans!;
}
