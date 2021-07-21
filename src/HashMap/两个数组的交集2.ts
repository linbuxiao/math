/**
 * 给定两个数组，编写一个函数来计算它们的交集。
 *
 * nums1 = [1,2,2,1], nums2 = [2,2]
 * [2,2]
 *
 * 如果给定的数组已经排好序呢？你将如何优化你的算法？
 * 如果 nums1 的大小比 nums2 小很多，哪种方法更优？
 * 如果 nums2 的元素存储在磁盘上，内存是有限的，并且你不能一次加载所有的元素到内存中，你该怎么办？
 *
 * 输入：nums1 = [1,2,2,1], nums2 = [2,2]
 * 输出：[2,2]
 */

export function intersect_1(nums1: number[], nums2: number[]): number[] {
  let [shortArr, longArr] =
    nums1.length < nums2.length ? [nums1, nums2] : [nums2, nums1];

  let res: number[] = [];
  let i = 0;
  while (i < shortArr.length) {
    let val = shortArr[i];
    let index = longArr.indexOf(val);

    if (index !== -1) {
      res = res.concat(shortArr.splice(i, 1));
      longArr.splice(index, 1);
    } else {
      i++;
    }
  }

  return res;
}

// 双指针解法
// 倒不如暴力法快
export function intersect(nums1: number[], nums2: number[]): number[] {
  nums1.sort((a, b) => a - b);
  nums2.sort((a, b) => a - b);
  let a = 0;
  let b = 0;
  let res: number[] = [];
  while (a < nums1.length && b < nums2.length) {
    if (nums1[a] === nums2[b]) {
      res.push(nums1[a]);
      a++;
      b++;
    } else {
      nums1[a] < nums2[b] ? a++ : b++;
    }
  }
  return res;
}
