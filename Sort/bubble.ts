/**
 * 冒泡排序
 */

import { swap } from "../Utils/index";

// 1. 一边比较一边向后两两交换，将最大值 / 最小值冒泡到最后一位
export function bubble_1(arr: number[]) {
  for (let x = 0; x < arr.length - 1; x++) {
    // 每一轮比较，能保证最大的已经到了最右边，所以只需要比剩下的
    for (let y = 0; y < arr.length - 1 - x; y++) {
      if (arr[y] > arr[y + 1]) {
        swap(arr, y, y + 1);
      }
    }
  }

  return arr;
}

// 2. 经过优化的写法：使用一个变量记录当前轮次的比较是否发生过交换，如果没有发生交换表示已经有序，不再继续排序；
export function bubble_2(arr: number[]) {
  let swapped = true;
  for (let x = 0; x < arr.length - 1; x++) {
    if (!swapped) break;
    swapped = false;

    for (let y = 0; y < arr.length - 1 - x; y++) {
      if (arr[y] > arr[y + 1]) {
        swap(arr, y, y + 1);
        // 如果没有更改为true，则表示无交换。直接跳出循环。
        swapped = true;
      }
    }
  }

  return arr;
}

// 3. 进一步优化的写法：除了使用变量记录当前轮次是否发生交换外，再使用一个变量记录上次发生交换的位置，下一轮排序时到达上次交换的位置就停止比较。
export function bubble_3(arr: number[]) {
  let swapped = true;
  let indexOfLastUnsortedElement = arr.length - 1;
  let swappedIndex = -1;

  while (swapped) {
    swapped = false;
    for (let x = 0; x < indexOfLastUnsortedElement; x++) {
      if (arr[x] > arr[x + 1]) {
        swap(arr, x, x + 1);
        swapped = true;
        swappedIndex = x;
      }
    }

    // 因为最后一次比较后的元素已经是最大，所以下一次跳过比较。
    indexOfLastUnsortedElement = swappedIndex;
  }

  return arr;
}

// 4. 如何在不使用第三个变量的情况下，完成两两互换
function singleSwap(arr: number[], x: number, y: number) {
  arr[y] = arr[y] + arr[x]; // arr[y]此时为arr[x] + arr[y]
  arr[x] = arr[y] - arr[x]; // arr[x]此时已被置换为arr[y]
  arr[y] = arr[y] - arr[x]; // arr[y]此时为总和 - arr[y] 也就是被置换为了arr[x]

  return arr;
}

/**
 * 练习
 */

// 1. 输入一个非负整数数组，把数组里所有数字拼接起来排成一个数，打印能拼接出的所有数字中最小的一个。
// 输入: [10,2]
// 输出: "102"

export function minNumber(nums: number[]): string {
  for (let x = 0; x < nums.length - 1; x++) {
    for (let y = 0; y < nums.length - x - 1; y++) {
      if (
        +(nums[y].toString() + nums[y + 1].toString()) >
          +(nums[y + 1].toString() + nums[y].toString())
      ) {
        swap(nums, y, y + 1);
      }
    }
  }

  return nums.join("");
}

// 2. 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。
// 输入: [0,1,0,3,12]
// 输出: [1,3,12,0,0]

export function moveZeroes(nums: number[]): void {
  for (let x = 0; x < nums.length - 1; x++) {
    for (let y = 0; y < nums.length - x - 1; y++) {
      if (nums[y] === 0) {
        swap(nums, y, y + 1);
      }
    }
  }
}
