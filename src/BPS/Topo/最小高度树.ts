// 树是一个无向图，其中任何两个顶点只通过一条路径连接。 换句话说，一个任何没有简单环路的连通图都是一棵树。

// 给你一棵包含 n 个节点的树，标记为 0 到 n - 1 。给定数字 n 和一个有 n - 1 条无向边的 edges 列表（每一个边都是一对标签），其中 edges[i] = [ai, bi] 表示树中节点 ai 和 bi 之间存在一条无向边。

// 可选择树中任何一个节点作为根。当选择节点 x 作为根节点时，设结果树的高度为 h 。在所有可能的树中，具有最小高度的树（即，min(h)）被称为 最小高度树 。

// 请你找到所有的 最小高度树 并按 任意顺序 返回它们的根节点标签列表。

// 树的 高度 是指根节点和叶子节点之间最长向下路径上边的数量。

// 输入：n = 6, edges = [[3,0],[3,1],[3,2],[3,4],[5,4]]
// 输出：[3,4]

// 暴力写法 会超时
export function findMinHeightTrees_1(n: number, edges: number[][]): number[] {
  const matrix: Set<number>[] = Array.from({ length: n }, () => new Set());

  for (const [X, Y] of edges) {
    matrix[X].add(Y);
    matrix[Y].add(X);
  }

  let min = Number.MAX_SAFE_INTEGER;
  let res: number[] = [];
  // const list = Array.from({length: n}).map((_, i)=> i)
  // list.sort((a,b) => matrix[b].size - matrix[a].size)
  // let flag = false
  for (let k = 0; k < n; k++) {
    const sets = [...matrix];
    for (const [X, Y] of edges) {
      sets[X].add(Y);
      sets[Y].add(X);
    }

    let queue = [k];
    let s = 0;

    while (queue.length) {
      let cur: number[] = [];
      s++;
      if (s > min) {
        // flag = true
        break;
      }
      for (const j of queue) {
        for (let i = 0; i < n; i++) {
          sets[i].has(j) && sets[i].delete(j);
        }
        sets[j].forEach((v) => {
          cur.push(v);
        });
      }
      queue = [...cur];
    }

    if (s > min) {
    }
    if (s === min) {
      res.push(k);
    }
    if (s < min) {
      res = [k];
      min = s;
    }
    // if(flag) break
  }

  return res;
}

// 拓扑
export function findMinHeightTrees(n: number, edges: number[][]): number[] {
  const matrix: Set<number>[] = Array.from({ length: n }, () => new Set());

  for (const [X, Y] of edges) {
    matrix[X].add(Y);
    matrix[Y].add(X);
  }

  let queue = [];
  for (let i = 0; i < n; i++) {
    if (matrix[i].size === 1) queue.push(i);
  }

  while (queue.length) {
    const cur = [];
    for (let i of queue) {
      matrix[i].clear();
    }
    for (let i of queue) {
      // i 为 长度为1的节点
      for (let k = 0; k < n; k++) {
        const set = matrix[k];
        set.delete(i);
        if (set.size === 1 && cur.indexOf(k) === -1) {
          cur.push(k);
        }
      }
    }

    if (cur.length === 0) return queue;
    queue = [...cur];
  }

  return [];
}
