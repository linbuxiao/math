// 给定平面上 n 对 互不相同 的点 points ，其中 points[i] = [xi, yi] 。回旋镖 是由点 (i, j, k) 表示的元组 ，其中 i 和 j 之间的距离和 i 和 k 之间的距离相等（需要考虑元组的顺序）。

// 返回平面上所有回旋镖的数量。

export function numberOfBoomerangs(points: number[][]): number {
  // 求距离：Math.abs((y2 - y1) + (x2 - x1))
  let ans = 0;
  const map = new Map<number, number>();
  for (let i = 0; i < points.length; i++) {
    for (let k = 0; k < points.length; k++) {
      if (i === k) continue;
      const [x1, y1] = points[i];
      const [x2, y2] = points[k];
      const distance = Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2);
      if (map.has(distance)) {
        map.set(distance, map.get(distance)! + 1);
      } else {
        map.set(distance, 1);
      }
    }

    map.forEach((times) => {
      ans += times * (times - 1);
    });
    map.clear();
  }

  return ans;
}
