// 设计一个找到数据流中第 k 大元素的类（class）。注意是排序后的第 k 大元素，不是第 k 个不同的元素。

// 请实现 KthLargest 类：

// KthLargest(int k, int[] nums) 使用整数 k 和整数流 nums 初始化对象。
// int add(int val) 将 val 插入数据流 nums 后，返回当前数据流中第 k 大的元素。

class MaxHeap {
  state: number[];
  constructor(nums: number[]) {
    this.adjust(nums);
    this.state = nums;
  }

  private adjust(arr: number[]) {
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
    const right = left + 1;
    let max: number;
    if (left === arr.length - 1) {
      max = left;
    } else {
      max = arr[left] > arr[right] ? left : right;
    }

    if (arr[i] > arr[max]) return;

    this.swap(i, max, arr);
    this.dfs(max, arr);
  }

  private swap(i: number, j: number, arr: number[]) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }

  insert(val: number) {
    // 插入到末尾 重排
    this.state.push(val);
    this.adjust(this.state);
    return this.state[0];
  }

  pop(arr = this.state) {
    const res = arr.shift()!;
    if (!arr.length) return null;
    const last = this.state.pop()!;
    this.state.unshift(last);
    this.adjust(arr);
    return res;
  }
}

export class KthLargest {
  heap: MaxHeap;
  tmp: number[] = [];
  constructor(k: number, nums: number[]) {
    this.heap = new MaxHeap(nums);
    if (nums.length < k) {
      let diff = k - nums.length;

      while (diff) {
        this.heap.state.push(Number.MIN_SAFE_INTEGER);
        diff--;
      }
    }
    let ans = Number.MIN_SAFE_INTEGER;
    while (k - 2 >= 0) {
      const res = this.heap.pop()!;
      this.tmp.push(res);
      if (res > ans) {
        ans = res;
      }
      k--;
    }
  }

  add(val: number): number {
    const len = this.tmp.length;
    for (let i = len - 1; i >= 0; i--) {
      if (this.tmp[i] < val) {
        let k = this.tmp[i];
        this.tmp[i] = val;
        val = k;
      }
    }

    const res = this.heap.insert(val);
    return res;
  }
}

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */
