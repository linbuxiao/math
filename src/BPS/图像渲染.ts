// 有一幅以二维整数数组表示的图画，每一个整数表示该图画的像素值大小，数值在 0 到 65535 之间。

// 给你一个坐标 (sr, sc) 表示图像渲染开始的像素值（行 ，列）和一个新的颜色值 newColor，让你重新上色这幅图像。

// 为了完成上色工作，从初始坐标开始，记录初始坐标的上下左右四个方向上像素值与初始坐标相同的相连像素点，接着再记录这四个方向上符合条件的像素点与他们对应四个方向上像素值与初始坐标相同的相连像素点，……，重复该过程。将所有有记录的像素点的颜色值改为新的颜色值。

// 最后返回经过上色渲染后的图像。

// 输入:
// image = [[1,1,1],[1,1,0],[1,0,1]]
// sr = 1, sc = 1, newColor = 2
// 输出: [[2,2,2],[2,2,0],[2,0,1]]
// 解析:
// 在图像的正中间，(坐标(sr,sc)=(1,1)),
// 在路径上所有符合条件的像素点的颜色都被更改成2。
// 注意，右下角的像素没有更改为2，
// 因为它不是在上下左右四个方向上与初始点相连的像素点。

export function floodFill(
  image: number[][],
  sr: number,
  sc: number,
  newColor: number
): number[][] {
  const queue: number[][] = [[sr, sc]];
  const [m, n] = [image.length, image[0].length];
  const direct_x = [0, 0, 1, -1];
  const direct_y = [1, -1, 0, 0];
  const color = image[sr][sc];

  const valid = (row: number, col: number): boolean => {
    if (row < 0 || col < 0 || row > m - 1 || col > n - 1) return false;
    return true;
  };

  const used = Array.from({ length: m }, () => new Array(n).fill(false));

  while (queue.length) {
    const [i, j] = queue.shift()!;
    if (!valid(i, j) || used[i][j] || image[i][j] !== color) continue;
    used[i][j] = true;
    for (let k in direct_x) {
      queue.push([i + direct_x[k], j + direct_y[k]]);
    }
  }

  for (let row = 0; row < m; row++) {
    for (let col = 0; col < n; col++) {
      if (used[row][col]) image[row][col] = newColor;
    }
  }

  return image;
}
