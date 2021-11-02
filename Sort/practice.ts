// 1. 给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有和为 0 且不重复的三元组。
// 输入：nums = [-1,0,1,2,-1,-4]
// 输出：[[-1,-1,2],[-1,0,1]]

import { ListNode } from '../type.ts'

export function threeSum(nums: number[]) {
  const arr: number[][] = [];
  // a. 输入数目小于3， 返回空数组
  if (nums.length < 3) return [];

  // b. 先进行排序
  // 快速排序 手写实现
  // nums.sort()
  handleArray(nums);
  for (let p = 0; p < nums.length; p++) {
    if (nums[p] > 0) return arr;
    if (p > 0 && nums[p] === nums[p - 1]) continue;

    let l = p + 1;
    let r = nums.length - 1;

    while (l < r) {
      const temp = nums[p] + nums[l] + nums[r];

      if (temp > 0) {
        r--;
      }

      if (temp < 0) {
        l++;
      }

      if (temp === 0) {
        arr.push([nums[p], nums[l], nums[r]]);
        while (l < r && nums[l] === nums[l + 1]) {
          l++;
        }
        // 同上
        while (l < r && nums[r] === nums[r - 1]) {
          r--;
        }
        l++;
        r--;
      }
    }
  }

  return arr;
}

function handleArray(nums: number[], start?: number, end?: number) {
  if (!start && start !== 0) start = 0;
  if (!end && end !== 0) end = nums.length - 1;
  const middle = handleQuickSort(nums, start, end);
  if (!middle && middle !== 0) return null;
  handleArray(nums, start, middle - 1);
  handleArray(nums, middle + 1, end);
}

function handleQuickSort(
  nums: number[],
  start: number,
  end: number,
): number | null {
  if (start >= end) return null;
  const p = nums[start];
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

// 2. 给定一个包括 n 个整数的数组 nums 和 一个目标值 target。找出 nums 中的三个整数，使得它们的和与 target 最接近。返回这三个数的和。假定每组输入只存在唯一答案。
// 输入：nums = [-1,2,1,-4], target = 1
// 输出：2

export function threeSumClosest(nums: number[], target: number): number {
  if (nums.length === 3) return nums.reduce((a, b) => a + b);
  const res: number[] = [];
  nums.sort();
  for (let x = 0; x < nums.length; x++) {
    if (x > 0 && nums[x] === nums[x - 1]) continue;
    for (let y = x + 1; y < nums.length; y++) {
      for (let z = nums.length - 1; z > y; z--) {
        const temp = nums[x] + nums[y] + nums[z];
        res.push(temp);
      }
    }
  }

  const result = res.reduce((a, b) => {
    if (Math.abs(b - target) < Math.abs(a - target)) return b;
    return a;
  });

  return result;
}

// 3. 给定一个包含 n 个整数的数组 nums 和一个目标值 target，判断 nums 中是否存在四个元素 a，b，c 和 d ，使得 a + b + c + d 的值与 target 相等？找出所有满足条件且不重复的四元组。
// 输入：nums = [1,0,-1,0,-2,2], target = 0
// 输出：[[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]

export function fourSum(nums: number[], target: number): number[][] {
  const res: number[][] = [];
  nums.sort();

  for (let a = 0; a < nums.length; a++) {
    if (a > 0 && nums[a] === nums[a - 1]) continue;
    for (let b = a + 1; b < nums.length; b++) {
      if (b > a + 1 && nums[b] === nums[b - 1]) continue;
      for (let c = b + 1; c < nums.length; c++) {
        if (c > b + 1 && nums[c] === nums[c - 1]) continue;
        let r = nums.length - 1;
        while (c < r) {
          while (c < r && nums[r] === nums[r + 1]) r--;
          if (c < r && nums[a] + nums[b] + nums[c] + nums[r] === target) {
            res.push([nums[a], nums[b], nums[c], nums[r]]);
          }
          r--;
        }
      }
    }
  }

  return res;
}

// 4. 给定一个字符串数组，将字母异位词组合在一起。字母异位词指字母相同，但排列不同的字符串。
// 输入: ["eat", "tea", "tan", "ate", "nat", "bat"]
// 输出:
// [
//   ["ate","eat","tea"],
//   ["nat","tan"],
//   ["bat"]
// ]

export function groupAnagrams(strs: string[]): string[][] {
  const cur = [];
  for (let a = 0; a < strs.length; a++) {
    // a. 重新排序，索引不变
    cur[a] = strs[a].split("").sort().join("");
  }
  const s = [];
  const flag: number[] = [];
  // b. 遍历，
  for (let b = 0; b < cur.length; b++) {
    if (
      (b > 0 && cur[b] === cur[b - 1]) ||
      flag.findIndex((item) => item === b) !== -1
    ) {
      continue;
    }
    const k = [strs[b]];
    let p = cur.length - 1;
    while (p > b) {
      if (cur[b] === cur[p]) {
        k.push(strs[p]);
        flag.push(p);
      }
      p--;
    }
    s.push(k);
  }

  return s;
}

// 5. 以数组 intervals 表示若干个区间的集合，其中单个区间为 intervals[i] = [starti, endi] 。请你合并所有重叠的区间，并返回一个不重叠的区间数组，该数组需恰好覆盖输入中的所有区间。
export function merge(intervals: number[][]): number[][] {
  // a. 排序，以start为基准
  intervals.sort((a, b) => a[0] - b[0]);

  for (let a = 0; a < intervals.length - 1; a++) {
    const start = intervals[a][1];
    const end = intervals[a + 1][0];
    if (start >= end) {
      const data = [...intervals[a], ...intervals[a + 1]];
      const item = [Math.min(...data), Math.max(...data)];
      intervals.splice(a, 2, item);
      a--;
    }
  }
  return intervals;
}

// 6. 给你链表的头结点 head ，请将其按 升序 排列并返回 排序后的链表 。
export function sortList(head: ListNode | null) {
  // a. 获取中间节点
  function middleNode(head: ListNode) {
    let fast = head;
    let slow = head;
    while (fast && fast.next && fast.next.next) {
      fast = fast.next.next;
      slow = slow.next!;
    }

    return slow;
  }

  // b. 合并两个有序链表
  function mergeTwoList(a: ListNode | null, b: ListNode | null) {
    const preHead = new ListNode(-1);
    let cur = preHead;
    while (a && b) {
      if (a.val < b.val) {
        cur.next = a;
        a = a.next;
      } else {
        cur.next = b;
        b = b.next;
      }
      cur = cur.next;
    }

    cur.next = a || b;

    return preHead.next;
  }

  function mergeSortRec(head: ListNode | null): ListNode | null {
    if (!head || !head.next) {
      return head;
    }

    const middle = middleNode(head);

    // middle.next代表剩下的
    const temp = middle.next;

    // 赋予null之后，截断
    middle.next = null;
    let left: ListNode | null = head;
    let right: ListNode | null = temp;

    left = mergeSortRec(left);
    right = mergeSortRec(right);

    return mergeTwoList(left, right);
  }

  return mergeSortRec(head);
}
