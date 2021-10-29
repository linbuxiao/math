// 你准备参加一场远足活动。给你一个二维 rows x columns 的地图 heights ，其中 heights[row][col] 表示格子 (row, col) 的高度。一开始你在最左上角的格子 (0, 0) ，且你希望去最右下角的格子 (rows-1, columns-1) （注意下标从 0 开始编号）。你每次可以往 上，下，左，右 四个方向之一移动，你想要找到耗费 体力 最小的一条路径。

// 一条路径耗费的 体力值 是路径上相邻格子之间 高度差绝对值 的 最大值 决定的。

// 作者：力扣 (LeetCode)
// 链接：https://leetcode-cn.com/leetbook/read/dfs/eqy1nj/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

// dfs算法有缺陷，而且会直接超时
export function minimumEffortPath_1(heights: number[][]): number {
  const [m, n] = [heights.length, heights[0].length];
  const INF = Number.MAX_SAFE_INTEGER;

  const returnAbs = (row: number, col: number, used: boolean[][]) => {
    let [up, down, left, right] = [INF, INF, INF, INF];
    const char = heights[row][col];
    if (row !== 0) {
      up = Math.abs(heights[row - 1][col] - char);
    }
    if (row !== m - 1) {
      down = Math.abs(heights[row + 1][col] - char);
    }
    if (col !== 0) {
      left = Math.abs(heights[row][col - 1] - char);
    }
    if (col !== n - 1) {
      right = Math.abs(heights[row][col + 1] - char);
    }

    used[row][col] = true;

    return Math.min(up, down, left, right);
  };

  const dfs = (
    row: number,
    col: number,
    abs: number,
    used: boolean[][],
  ): number => {
    console.log();

    if (row < 0 || col < 0 || row > m - 1 || col > n - 1 || used[row][col]) {
      return INF; // 返回一个最大值，证明是死路
    }
    if (row === m - 1 && col === n - 1) {
      // 到达目的地
      return abs;
    }
    console.log(row, col, abs);

    // used[row][col] = true
    const usedBak = [...used];

    const absValue = returnAbs(row, col, usedBak);

    const value = Math.max(abs, absValue);
    const up = dfs(row - 1, col, value, [...usedBak]);
    const down = dfs(row + 1, col, value, [...usedBak]);
    const left = dfs(row, col - 1, value, [...usedBak]);
    const right = dfs(row, col + 1, value, [...usedBak]);

    // console.log(usedBak);

    return Math.min(up, down, left, right);
  };

  const used = Array.from({ length: m }, () => new Array(n).fill(false));

  const min = dfs(0, 0, 0, used);

  return min;
}

class node {
  parent = this;
  val: number;
  constructor(i: number) {
    this.val = i;
  }
}

const find = (x: node) => {
  while (x !== x.parent) {
    x = x.parent;
  }
  return x;
};

// 并查集
export function minimumEffortPath(heights: number[][]): number {
  const [m, n] = [heights.length, heights[0].length];

  let res = 0;

  let nodes = Array(m * n)
    .fill(0)
    .map((_, i) => new node(i));

  let nodesMap = [];

  for (let row = 0; row < m; row++) {
    for (let col = 0; col < n; col++) {
      let id = m * row + col;
      if (row !== m - 1) {
        nodesMap.push([
          id,
          id + n,
          Math.abs(heights[row][col] - heights[row + 1][col]),
        ]); // 指向下一行，所以+n
      }
      if (col !== n - 1) {
        nodesMap.push([
          id,
          id + 1,
          Math.abs(heights[row][col] - heights[row][col + 1]),
        ]); // 指向右方，所以+1
      }
    }
  }

  nodesMap.sort((a, b) => a[2] - b[2]); // 每一组按最小值摆放

  for (let i = 0; i < nodesMap.length; i++) {
    let [x, y, l] = nodesMap[i];
    res = l;
    find(nodes[y]).parent = find(nodes[x]);
    if (find(nodes[0]) === find(nodes[m * n - 1])) {
      break;
    }
  }

  return res;
}

// class UnionFind {
//   parent: number[]
//   size: number[]
//   setCount: number
//   constructor(n: number) {
//     this.parent = new Array(n).fill(0).map((_, index)=> index)
//     this.size = new Array(n).fill(1)
//     this.setCount = n
//   }

//   findSet
// }
