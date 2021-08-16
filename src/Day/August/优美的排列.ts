// 假设有从 1 到 N 的 N 个整数，如果从这 N 个数字中成功构造出一个数组，使得数组的第 i 位 (1 <= i <= N) 满足如下两个条件中的一个，我们就称这个数组为一个优美的排列。条件：

// 第 i 位的数字能被 i 整除
// i 能被第 i 位上的数字整除
// 现在给定一个整数 N，请问可以构造多少个优美的排列？

// 输入: 2
// 输出: 2
// 解释:

// 第 1 个优美的排列是 [1, 2]:
//   第 1 个位置（i=1）上的数字是1，1能被 i（i=1）整除
//   第 2 个位置（i=2）上的数字是2，2能被 i（i=2）整除

// 第 2 个优美的排列是 [2, 1]:
//   第 1 个位置（i=1）上的数字是2，2能被 i（i=1）整除
//   第 2 个位置（i=2）上的数字是1，i（i=2）能被 1 整除

export function countArrangement(n: number): number {
  // 首先要确定，每个数字出现在哪个位置是符合要求的，然后进行拼接
  const map = new Map<number, number[]>();
  /**
   * 判断该值放在这个索引符不符合要求
   * @param i 值
   * @param k 索引
   */
  const judge = (i: number, k: number): boolean => {
    if (!(k % i) || !(i % k)) return true;
    return false;
  };
  for (let i = 1; i <= n; i++) {
    // i 为值
    for (let k = 1; k <= n; k++) {
      // k为索引
      // 把值放在每个位置上进行测试
      if (judge(i, k)) {
        const oldArr = map.get(k) || [];
        oldArr.push(i);
        map.set(k, oldArr);
      }
    }
  }

  const bfs = (i: number, used: Set<number>): number => {
    if (i > n) return 1;

    const arr = map.get(i)!;

    let num = 0;
    arr.forEach((item) => {
      if (!used.has(item)) {
        const nextUsed = new Set(used);
        nextUsed.add(item);
        num += bfs(i + 1, nextUsed);
      }
    });

    return num;
  };

  return bfs(1, new Set());
}
