// 已知有 N 门课程，它们以 1 到 N 进行编号。

// 给你一份课程关系表 relations[i] = [X, Y]，用以表示课程 X 和课程 Y 之间的先修关系：课程 X 必须在课程 Y 之前修完。

// 假设在一个学期里，你可以学习任何数量的课程，但前提是你已经学习了将要学习的这些课程的所有先修课程。

// 请你返回学完全部课程所需的最少学期数。

// 如果没有办法做到学完全部这些课程的话，就返回 -1。

// 输入：N = 3, relations = [[1,3],[2,3]]
// 输出：2
// 解释：
// 在第一个学期学习课程 1 和 2，在第二个学期学习课程 3。

// 输入：N = 3, relations = [[1,2],[2,3],[3,1]]
// 输出：-1
// 解释：
// 没有课程可以学习，因为它们相互依赖。

// 构建矩阵会超时

// 利用数组储存set进行映射

export function minimumSemesters(n: number, relations: number[][]): number {
  const neighbor = Array.from({ length: n }, () => new Set<number>());
  for (const [X, Y] of relations) {
    neighbor[X - 1].add(Y - 1);
  }

  let queue: number[] = [];
  for (let i = 0; i < n; i++) {
    queue.push(i);
  }

  let s = 0;

  while (queue.length) {
    const tmp = []; // 下一轮的队列，将去除已为0的部分
    const wait = [];
    s++;
    for (let i of queue) {
      // 遍历
      if (neighbor[i].size === 0) {
        // 全为0，则无入度
        wait.push(i);
      } else {
        tmp.push(i);
      }
    }
    if (wait.length === 0) return -1;
    for (let x of wait) {
      for (let k = 0; k < n; k++) {
        neighbor[k].delete(x);
      }
    }
    queue = [...tmp];
  }

  return s;
}
