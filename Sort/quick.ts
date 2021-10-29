/**
 * 快速排序
 */

// 1. 将数组分区，并获得中间值的下标
export function partition(arr: number[], start?: number, end?: number) {
  if (!start) start = 0;
  if (!end) end = arr.length - 1;

  let middle = quickSort(arr, start, end);
  if (!middle && middle !== 0) return;
  partition(arr, start, middle - 1);
  partition(arr, middle + 1, end);

  return arr;
}

function quickSort(arr: number[], start: number, end: number) {
  if (start >= end) return null;
  // 取第一个数为基数
  let priot = arr[start];
  // 从第二个数开始分区
  let left = start + 1;
  // 右边界
  let right = end;
  while (left < right) {
    while (left < right && arr[left] <= priot) {
      left++;
    }
    while (left < right && arr[right] >= priot) {
      right--;
    }
    if (left < right) {
      [arr[left], arr[right]] = [arr[right], arr[left]];
      left++;
      right--;
    }
  }
  if (left === right && arr[right] > priot) {
    right--;
  }
  [arr[start], arr[right]] = [arr[right], arr[start]];
  return right;
}

/**
 * 练习
 */

// 1. 给你一个整数数组 nums，请你将该数组升序排列。
// 输入：nums = [5,2,3,1]
// 输出：[1,2,3,5]

export function getMiddle(arr: number[], start: number, end: number) {
  if (start >= end) return null;

  let p = start;
  let left = start + 1;
  let right = end;

  while (left < right) {
    while (left < right && arr[left] <= arr[p]) left++;
    while (left < right && arr[right] >= arr[p]) right--;
    if (left < right) {
      [arr[left], arr[right]] = [arr[right], arr[left]];
      left++;
      right--;
    }
  }

  if (left === right && arr[right] > arr[p]) right--;
  [arr[start], arr[right]] = [arr[right], arr[start]];

  return right;
}

export function sortArray(arr: number[], start?: number, end?: number) {
  if (arr.length === 1) return arr;
  if (!start && start !== 0) start = 0;
  if (!end && end !== 0) end = arr.length - 1;
  let middle = getMiddle(arr, start, end);
  if (!middle && middle !== 0) return null;
  sortArray(arr, start, middle - 1);
  sortArray(arr, middle + 1, end);
  return arr;
}

// 2. 给定一个大小为 n 的数组，找到其中的多数元素。多数元素是指在数组中出现次数 大于 ⌊ n/2 ⌋ 的元素。
// 输入：[2,2,1,1,1,2,2]
// 输出：2

// 只会出现一个，因为要大于二分之一
// 中间值必为多数
// 只需一次二分排序
export function majorityElement(nums: number[]) {
  getArr(nums);

  return nums[Math.floor(nums.length / 2)];
}

export function getArr(nums: number[], start?: number, end?: number) {
  if (!start && start !== 0) start = 0;
  if (!end && end !== 0) end = nums.length - 1;
  let middle = getMiddle_2(nums, start, end);
  if (!middle && middle !== 0) return null;
  getArr(nums, start, middle - 1);
  getArr(nums, middle + 1, end);
}

export function getMiddle_2(
  nums: number[],
  start: number,
  end: number,
): number | null {
  if (start >= end) return null;
  let p = nums[start];
  let left = start + 1;
  let right = end;

  while (left < right) {
    while (left < right && nums[left] <= p) left++;
    while (left < right && nums[right] >= p) right--;

    if (left < right) {
      [nums[left], nums[right]] = [nums[right], nums[left]];
      left++;
      right--;
    }
  }

  if (left === right && nums[right] > p) right--;
  [nums[start], nums[right]] = [nums[right], nums[start]];

  return right;
}
