// 有两个容量分别为 x升 和 y升 的水壶以及无限多的水。请判断能否通过使用这两个水壶，从而可以得到恰好 z升 的水？

// 如果可以，最后请用以上水壶中的一或两个来盛放取得的 z升 水。

// 你允许：

// 装满任意一个水壶
// 清空任意一个水壶
// 从一个水壶向另外一个水壶倒水，直到装满或者倒空

// 输入: x = 3, y = 5, z = 4
// 输出: True

// 输入: x = 2, y = 6, z = 5
// 输出: False

export function canMeasureWater(m: number, n: number, target: number): boolean {
  const queue = [[0, 0]];

  const used = new Set<number>();

  while (queue.length) {
    const [i, j] = queue.shift()!;
    if (i === target || j === target || i + j === target) return true;

    for (const item of [
      i + j <= n ? [0, i + j] : [i + j - n, n],
      i + j <= m ? [i + j, 0] : [m, i + j - m],
      [m, j],
      [i, n],
      [0, j],
      [i, 0],
    ]) {
      const index = item[0] * (n + 1) + item[1];
      if (!used.has(index)) {
        used.add(index);
        queue.push(item);
      }
    }
  }

  return false;
}
