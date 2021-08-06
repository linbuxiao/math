// 这里有一个非负整数数组 arr，你最开始位于该数组的起始下标 start 处。当你位于下标 i 处时，你可以跳到 i + arr[i] 或者 i - arr[i]。

// 请你判断自己是否能够跳到对应元素值为 0 的 任一 下标处。

// 注意，不管是什么情况下，你都无法跳到数组之外。

// 输入：arr = [4,2,3,0,3,1,2], start = 5
// 输出：true
// 解释：
// 到达值为 0 的下标 3 有以下可能方案：
// 下标 5 -> 下标 4 -> 下标 1 -> 下标 3
// 下标 5 -> 下标 6 -> 下标 4 -> 下标 1 -> 下标 3

export function canReach(arr: number[], start: number): boolean {
  let queue: number[] = [start];
  const m = arr.length;

  while (queue.length) {
    const i = queue.shift()!;

    if (i < 0 || i > m - 1 || arr[i] === -1) continue;

    if (arr[i] === 0) {
      return true;
    }

    for (const k of [i + arr[i], i - arr[i]]) {
      queue.push(k);
    }
    arr[i] = -1;
  }

  return false;
}
