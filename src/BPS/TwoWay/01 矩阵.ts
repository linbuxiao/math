// 给定一个由 0 和 1 组成的矩阵 mat ，请输出一个大小相同的矩阵，其中每一个格子是 mat 中对应位置元素到最近的 0 的距离。

// 两个相邻元素间的距离为 1 。

// 输入：mat = [[0,0,0],[0,1,0],[0,0,0]]
// 输出：[[0,0,0],[0,1,0],[0,0,0]]

// 暴力从1往0搜索 会存在多次遍历同一点
export function updateMatrix_1(mat: number[][]): number[][] {
  const [m, n] = [mat.length, mat[0].length];
  const [direct_x, direct_y] = [
    [1, -1, 0, 0],
    [0, 0, 1, -1],
  ];
  const result = Array.from({ length: m }, () => new Array(n).fill(0));

  const bfs = (row: number, col: number): number => {
    const visited = Array.from({ length: m }, () => new Array(n).fill(false));
    let step = 0;
    let queue = [[row, col]];

    while (queue.length) {
      let tmp = [];
      for (let [X, Y] of queue) {
        if (X < 0 || Y < 0 || X > m - 1 || Y > n - 1 || visited[X][Y]) continue;
        visited[X][Y] = true;
        if (mat[X][Y] === 0) return step;
        for (let k in direct_x) {
          tmp.push([X + direct_x[k], Y + direct_y[k]]);
        }
      }
      step++;
      queue = [...tmp];
    }

    return step;
  };

  for (let row = 0; row < m; row++) {
    for (let col = 0; col < n; col++) {
      if (mat[row][col] === 1) {
        // 进入遍历
        result[row][col] = bfs(row, col);
      }
    }
  }

  return result;
}

// 优化成岛屿边界问题
// 首先找到1的边界  为0 并且 周围存在1， 全部放入队列
// BFS扩散，先找到的打上标记，然后赋值

export function updateMatrix(mat: number[][]): number[][] {
  const [m, n] = [mat.length, mat[0].length];
  const [direct_x, direct_y] = [
    [1, -1, 0, 0],
    [0, 0, 1, -1],
  ];

  const result = Array.from({ length: m }, () => new Array(n).fill(0));
  const visited = Array.from({ length: m }, () => new Array(n).fill(false));

  let queue = [];
  for (let row = 0; row < m; row++) {
    for (let col = 0; col < n; col++) {
      if (
        mat[row][col] === 1 &&
        ((row > 0 && mat[row - 1][col] === 0) ||
          (col > 0 && mat[row][col - 1] === 0) ||
          (row < m - 1 && mat[row + 1][col] === 0) ||
          (col < n - 1 && mat[row][col + 1] === 0))
      ) {
        // 进入遍历
        queue.push([row, col]);
      }
    }
  }

  let step = 0;
  while (queue.length) {
    let tmp = [];
    step++;
    for (let [row, col] of queue) {
      if (
        row < 0 ||
        col < 0 ||
        row > m - 1 ||
        col > n - 1 ||
        visited[row][col] ||
        mat[row][col] !== 1
      )
        continue;
      visited[row][col] = true;
      result[row][col] = step;
      for (let k in direct_x) {
        tmp.push([row + direct_x[+k], col + direct_y[+k]]);
      }
    }
    queue = [...tmp];
  }

  return result;
}
