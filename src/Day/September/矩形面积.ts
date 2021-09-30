// 给你 二维 平面上两个 由直线构成的 矩形，请你计算并返回两个矩形覆盖的总面积。

// 每个矩形由其 左下 顶点和 右上 顶点坐标表示：

// 第一个矩形由其左下顶点 (ax1, ay1) 和右上顶点 (ax2, ay2) 定义。
// 第二个矩形由其左下顶点 (bx1, by1) 和右上顶点 (bx2, by2) 定义。

export function computeArea(
  ax1: number,
  ay1: number,
  ax2: number,
  ay2: number,
  bx1: number,
  by1: number,
  bx2: number,
  by2: number
): number {
  // 求交集
  const ans =
    Math.abs(ax1 - ax2) * Math.abs(ay1 - ay2) +
    Math.abs(bx1 - bx2) * Math.abs(by1 - by2); // 面积总和
  if (bx1 >= ax2 || ax1 >= bx2 || ay1 >= by2 || by1 >= ay2) return ans;

  return (
    ans -
    (Math.min(ax2, bx2) - Math.max(ax1, bx1)) *
      (Math.min(ay2, by2) - Math.max(ay1, by1))
  );
}
