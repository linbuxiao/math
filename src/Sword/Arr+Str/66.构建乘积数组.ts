/**
 * 给定一个数组 A[0,1,…,n-1]，请构建一个数组 B[0,1,…,n-1]，其中 B[i] 的值是数组 A 中除了下标 i 以外的元素的积, 即 B[i]=A[0]×A[1]×…×A[i-1]×A[i+1]×…×A[n-1]。不能使用除法。
 * [1,2,3,4,5]
 * [120,60,40,30,24]
 */

export function constructArr(nums: number[]): number[] {
  // a. 确定是否有0
  let zero = 0;
  // b. 确定总乘积
  let s = 1;
  for (let a = 0; a < nums.length; a++) {
    if (nums[a] === 0) {
      zero++;
    } else {
      s *= nums[a];
    }
  }

  // c. 新建新数组
  let b: number[] = [];

  // d. 处理有1个0的数组。0的位置为全乘积，其余为0
  for (let d = 0; d < nums.length && zero === 1; d++) {
    if (nums[d]) {
      b.push(0);
    } else {
      b.push(s);
    }
  }

  // f. 处理没有0的数组
  for (let e = 0; e < nums.length && !zero; e++) {
    b.push(s / nums[e]);
  }

  // g. 0的数量大于1时，全为0
  if (zero > 1) {
    b.length = nums.length;
    b.fill(0);
  }

  return b;
}

// 三角形解法
export function constructArr_1(nums: number[]): number[] {
  let B = [1];
  for (let a = 1; a < nums.length; a++) {
    B[a] = B[a - 1] * nums[a - 1];
  }

  let temp = 1;
  for (let b = nums.length - 2; b >= 0; b--) {
    temp *= nums[b + 1];
    B[b] *= temp;
  }

  return B;
}
