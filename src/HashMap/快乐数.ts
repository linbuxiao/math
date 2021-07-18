/**
 * 编写一个算法来判断一个数 n 是不是快乐数。
 * 「快乐数」定义为：
 * 对于一个正整数，每一次将该数替换为它每个位置上的数字的平方和。
 * 然后重复这个过程直到这个数变为 1，也可能是 无限循环 但始终变不到 1。
 * 如果 可以变为  1，那么这个数就是快乐数。
 *
 * 如果 n 是快乐数就返回 true ；不是，则返回 false 。
 *
 * 输入：19
 * 输出：true
 * 解释：
 * 12 + 92 = 82
 * 82 + 22 = 68
 * 62 + 82 = 100
 * 12 + 02 + 02 = 1
 *
 * 输入：n = 2
 * 输出：false
 */

/**
 * 递归实现
 * @param n
 * @PS 耗时太久
 */
export function isHappy(n: number): boolean {
  let s = getNumberArray(n);
  let basic = getAll(s);
  let circle = 0;

  function getVal(nums: number[]): boolean {
    let all = getAll(nums);
    if (all === 1) return true;

    if (circle > 2 && +nums.join("") === basic) {
      return false;
    }
    circle++;
    return getVal(getNumberArray(all));
  }

  function getNumberArray(num: number): number[] {
    return num
      .toString()
      .split("")
      .map((item) => +item);
  }

  function getAll(nums: number[]) {
    let all: number = 0;
    for (let i = 0; i < nums.length; i++) {
      all += Math.pow(nums[i], 2);
    }

    return all;
  }

  return getVal(s);
}

/**
 * 快慢指针实现
 * 空间换时间
 * @param n
 */
export function isHappy_1(n: number): boolean {
  // 两个指针一快一慢，总会相遇
  let [fast, slow] = [n, n];

  const turnToArr = (num: number) => {
    return (num + "").split("").map((item) => +item);
  };

  const calc = (nums: number[]) => {
    let all = 0;
    for (let i = 0; i < nums.length; i++) {
      all += Math.pow(nums[i], 2);
    }
    return all;
  };

  while (1) {
    // slow每求值一次，fast求值两次
    slow = calc(turnToArr(slow));
    fast = calc(turnToArr(fast));
    fast = calc(turnToArr(fast));
    if (fast === 1 || slow === 1) return true;
    if (fast === slow) return false;
  }

  return true;
}

// 我们的算法仍然有问题，第一个是拆分数字求和太尴尬
// 需要用split+map+for来求和，太基础
// 新思路

export const calc_1 = (num: number) => {
  let ret = 0;
  while (num) {
    // 取个位的幂
    ret += Math.pow(num % 10, 2);
    // 在个位时转化为0
    num = Math.floor(num / 10);
  }

  return ret;
};

// 然后用set去新建一个哈希表，用has判断这个值是否出现过
// 为1返回true，出现过返回false，其余继续循环
// 用循环完成了我们递归才做到的事，好厉害哦
