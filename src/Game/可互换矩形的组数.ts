// 用一个下标从 0 开始的二维整数数组 rectangles 来表示 n 个矩形，其中 rectangles[i] = [widthi, heighti] 表示第 i 个矩形的宽度和高度。

// 如果两个矩形 i 和 j（i < j）的宽高比相同，则认为这两个矩形 可互换 。更规范的说法是，两个矩形满足 widthi/heighti == widthj/heightj（使用实数除法而非整数除法），则认为这两个矩形 可互换 。

// 计算并返回 rectangles 中有多少对 可互换 矩形。

// export function interchangeableRectangles(rectangles: number[][]): number {
//   const scale = rectangles.map(([w, h])=> w / h)
//   let ans = 0
//   for(let i = 0; i < scale.length; i++) {
//     for(let k = i + 1; k < scale.length; k++) {
//       if(scale[i] === scale[k]) ans++
//     }
//   }

//   return ans
// };

export function interchangeableRectangles(rectangles: number[][]): number {
  const map = new Map<number, number>();

  for (let i = 0; i < rectangles.length; i++) {
    const scale = rectangles[i][0] / rectangles[i][1];
    if (map.has(scale)) {
      map.set(scale, map.get(scale)! + 1);
    } else {
      map.set(scale, 1);
    }
  }

  let ans = 0;
  map.forEach((item) => {
    ans += (item * (item - 1)) / 2;
  });

  return ans;
}
