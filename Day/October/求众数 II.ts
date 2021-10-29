// 给定一个大小为 n 的整数数组，找出其中所有出现超过 ⌊ n/3 ⌋ 次的元素。

export function majorityElement(nums: number[]): number[] {
  const max = Math.floor(nums.length / 3); // 求出现次数大于 max 的元素
  const map = new Map<number, number>(); // 元素值 -> 出现次数
  const result: number[] = [];
  nums.forEach((num) => {
    if (map.has(num)) {
      const next = map.get(num)! + 1;
      map.set(num, next);
    } else {
      map.set(num, 1);
    }
  });
  map.forEach((value, key) => {
    if (value > max) result.push(key);
  });

  return result;
}
