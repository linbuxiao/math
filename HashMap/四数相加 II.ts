/**
 * 给定四个包含整数的数组列表 A , B , C , D ,计算有多少个元组 (i, j, k, l) ，使得 A[i] + B[j] + C[k] + D[l] = 0。
 * A = [ 1, 2]
 * B = [-2,-1]
 * C = [-1, 2]
 * D = [ 0, 2]
 *
 * 2
 */

// 四数之和，肯定是他妈的不能暴力解了

// 遍历出1数组和2数组的情况，放到set1中
// 遍历出3数组和4数组的情况，放到set2中

// 现在我们拥有了两组和，接着遍历这两个set中的数值相加是否能为0
// 避免了嵌套，减少了时间复杂度
// 这样仍然具有过高的时间复杂度
// a+b = -(c+d)

// 用map实现，key存放number。value存放出现的次数。此时索引不重要

// 只需要把前两个数组的和放进map
// 在遍历后两个数组进行比对即可
export function fourSumCount(
  nums1: number[],
  nums2: number[],
  nums3: number[],
  nums4: number[],
): number {
  let flag = 0;
  const getSum = (nums1: number[], nums2: number[]) => {
    const map = new Map<number, number>();
    nums1.forEach((num1) => {
      nums2.forEach((num2) => {
        const count = num1 + num2;
        if (map.has(count)) {
          map.set(count, map.get(count)! + 1);
        } else {
          map.set(count, 1);
        }
      });
    });
    return map;
  };

  const map = getSum(nums1, nums2);

  nums3.forEach((num3) => {
    nums4.forEach((num4) => {
      const count = -(num3 + num4);
      if (map.has(count)) {
        flag += map.get(count)!;
      }
    });
  });

  return flag;
}
