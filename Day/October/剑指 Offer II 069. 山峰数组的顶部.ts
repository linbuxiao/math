// 符合下列属性的数组 arr 称为 山峰数组（山脉数组） ：

// arr.length >= 3
// 存在 i（0 < i < arr.length - 1）使得：
// arr[0] < arr[1] < ... arr[i-1] < arr[i]
// arr[i] > arr[i+1] > ... > arr[arr.length - 1]
// 给定由整数组成的山峰数组 arr ，返回任何满足 arr[0] < arr[1] < ... arr[i - 1] < arr[i] > arr[i + 1] > ... > arr[arr.length - 1] 的下标 i ，即山峰顶部。

export function peakIndexInMountainArray(arr: number[]): number {
  // 这道题会有一个点在于：两端必定是单调递增或递减的，不存在同时出现两个山峰的可能。
  let [left, right] = [0, arr.length - 1];
  let ans = 0;
  while (left <= right) {
    const mid = (left + right) >> 1;
    if (arr[mid] > arr[mid + 1]) {
      ans = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return ans;
}
