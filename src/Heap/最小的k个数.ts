// 输入整数数组 arr ，找出其中最小的 k 个数。例如，输入4、5、1、6、2、7、3、8这8个数字，则最小的4个数字是1、2、3、4。

// Parent(i) = floor((i-1)/2)，i 的父节点下标
// Left(i) = 2i + 1，i 的左子节点下标
// Right(i) = 2(i + 1)，i 的右子节点下标

class MinHeap {
  state: number[];
  constructor(nums: number[]) {
    this.adjust(nums);
    this.state = nums;
  }

  private swap(i: number, j: number, arr = this.state) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }

  private adjust(arr = this.state) {
    let i = Math.floor(arr.length / 2);

    while (arr[2 * (i + 1)] > arr.length - 1) {
      i--;
    } // 此时`i`的索引为最大根节点

    while (i >= 0) {
      this.dfs(i, arr);
      i--;
    }
    // 以根节点开始遍历子节点，
    // 每进行一次交换，以新的根节点为根节点向下深度遍历
    // 遍历结束，找到此根节点的根节点，再次遍历
  }

  private dfs(i: number, arr = this.state) {
    const left = 2 * i + 1;
    if (left > arr.length - 1) return;
    const right = left + 1;
    let min: number;
    if (right === arr.length) {
      min = left;
    } else {
      min = arr[left] < arr[right] ? left : right;
    }

    if (arr[min] >= arr[i]) return;
    this.swap(min, i, arr);
    this.dfs(min, arr);
  }

  pop() {
    if (!this.state.length) return null;
    const res = this.state.shift()!;
    if (!this.state.length) return res;
    const last = this.state.pop()!;
    this.state.unshift(last);
    this.adjust();
    return res;
  }
}

export function getLeastNumbers(arr: number[], k: number): number[] {
  const heap = new MinHeap(arr);
  const ans: number[] = [];

  for (let i = 0; i < k; i++) {
    ans.push(heap.pop()!);
  }

  return ans;
}
