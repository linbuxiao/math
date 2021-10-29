// 给你两个 没有重复元素 的数组 nums1 和 nums2 ，其中nums1 是 nums2 的子集。

// 请你找出 nums1 中每个元素在 nums2 中的下一个比其大的值。

// nums1 中数字 x 的下一个更大元素是指 x 在 nums2 中对应位置的右边的第一个比 x 大的元素。如果不存在，对应位置输出 -1 。

// export function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
//   const result: number[] = []
//   nums1.forEach((e) => {
//     const index = nums2.findIndex(val => val === e)!
//     const val = nums2.slice(index + 1, nums2.length).find(item => item > nums2[index]!)
//     if(!val) {
//       result.push(-1)
//     } else {
//       result.push(val)
//     }
//   })

//   return result
// };

export function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
  const stack: number[] = [];
  const map = new Map<number, number>();

  nums2.forEach((v) => {
    // 如果比当前值大，则弹出 --->
    while (stack.length && stack[stack.length - 1]! < v) {
      map.set(stack.pop()!, v);
    }
    stack.push(v);
  });

  stack.forEach((v) => {
    map.set(v, -1);
  });

  const result: number[] = [];

  nums1.forEach((v) => {
    result.push(map.get(v)!);
  });

  return result;
}
