/**
 * 给你一个大小为 m * n 的矩阵 mat，矩阵由若干军人和平民组成，分别用 1 和 0 表示。
 * 请你返回矩阵中战斗力最弱的 k 行的索引，按从最弱到最强排序。
 * 如果第 i 行的军人数量少于第 j 行，或者两行军人数量相同但 i 小于 j，那么我们认为第 i 行的战斗力比第 j 行弱。
 * 军人 总是 排在一行中的靠前位置，也就是说 1 总是出现在 0 之前。
 */

export function kWeakestRows(mat: number[][], k: number): number[] {
  // 索引，军人数量
  const [m, n] = [mat.length, mat[0].length];
  const map: { index: number; times: number }[] = [];
  for (let row = 0; row < m; row++) {
    let num = 0;
    for (let col = 0; col < n; col++) {
      if (mat[row][col] === 1) num++;
    }

    if (map.length === k && num >= Math.max(...map.map((item) => item.times))) {
      continue;
    }

    map.push({
      index: row,
      times: num,
    });
  }

  let res: { index: number; times: number }[] = [];

  let p = 0;
  while (p < map.length) {
    if (res.length === k) {
      let last = res[k - 1];
      if (last.times === map[p].times) {
        p++;
        continue;
      }
      if (last.times < map[p].times) {
        p++;
        continue;
      }

      if (last.times > map[p].times) {
        res.pop();
      }
    }
    res.push(map[p]);
    p++;
    res.sort((a, b) => a.times - b.times);
  }

  return res.map((item) => {
    return item.index;
  });
}
