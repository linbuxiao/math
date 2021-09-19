// 总共有 n 个人和 40 种不同的帽子，帽子编号从 1 到 40 。

// 给你一个整数列表的列表 hats ，其中 hats[i] 是第 i 个人所有喜欢帽子的列表。

// 请你给每个人安排一顶他喜欢的帽子，确保每个人戴的帽子跟别人都不一样，并返回方案数。

// 由于答案可能很大，请返回它对 10^9 + 7 取余后的结果。

export function numberWays(hats: number[][]): number {
  let maxHatId = 0;
  const map = new Map<number, number[]>();
  for (let i = 0; i < hats.length; i++) {
    for (let h of hats[i]) {
      maxHatId = Math.max(maxHatId, h);
      if (map.has(h)) {
        map.get(h)!.push(i);
      } else {
        map.set(h, [i]);
      }
    }
  }

  const f: any[] = Array.from({ length: maxHatId + 1 }).fill(1 << hats.length);

  for (let i = 1; i <= maxHatId; i++) {
    for (let mask = 0; mask < 1 << hats.length; mask++) {
      f[i][mask] = f[i - 1][mask];
      const res = map.get(i)!;
      if (!res) continue;

      for (let j of res) {
        if (mask & (1 << j)) {
          f[i][mask] += f[i - 1][mask ^ (1 << j)];
          f[i][mask] %= Math.pow(10, 9) + 7;
        }
      }
    }
  }

  return f[maxHatId][(1 << hats.length) - 1];
}
