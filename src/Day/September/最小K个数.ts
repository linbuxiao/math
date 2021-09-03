// 设计一个算法，找出数组中最小的k个数。以任意顺序返回这k个数均可。

// 示例：

// 输入： arr = [1,3,5,7,2,4,6,8], k = 4
// 输出： [1,2,3,4]

export function smallestK(arr: number[], k: number): number[] {
  return arr.sort((a, b) => a - b).slice(0, k);
}
