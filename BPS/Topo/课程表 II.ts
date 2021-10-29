// 现在你总共有 n 门课需要选，记为 0 到 n-1。

// 在选修某些课程之前需要一些先修课程。 例如，想要学习课程 0 ，你需要先完成课程 1 ，我们用一个匹配来表示他们: [0,1]

// 给定课程总量以及它们的先决条件，返回你为了学完所有课程所安排的学习顺序。

// 可能会有多个正确的顺序，你只要返回一种就可以了。如果不可能完成所有课程，返回一个空数组。

// 输入: 2, [[1,0]]
// 输出: [0,1]
// 解释: 总共有 2 门课程。要学习课程 1，你需要先完成课程 0。因此，正确的课程顺序为 [0,1] 。

// 输入: 4, [[1,0],[2,0],[3,1],[3,2]]
// 输出: [0,1,2,3] or [0,2,1,3]
// 解释: 总共有 4 门课程。要学习课程 3，你应该先完成课程 1 和课程 2。并且课程 1 和课程 2 都应该排在课程 0 之后。
//      因此，一个正确的课程顺序是 [0,1,2,3] 。另一个正确的排序是 [0,2,1,3] 。

export function findOrder(
  numCourses: number,
  prerequisites: number[][],
): number[] {
  const matrix: Set<number>[] = Array.from(
    { length: numCourses },
    () => new Set(),
  );

  for (const [X, Y] of prerequisites) {
    matrix[X].add(Y);
  }

  let queue: number[] = [];
  for (let i = 0; i < numCourses; i++) {
    queue.push(i);
  }
  const path = [];
  while (queue.length) {
    const tmp: number[] = [];
    const wait = [];

    for (let i of queue) {
      if (matrix[i].size === 0) {
        wait.push(i);
      } else {
        tmp.push(i);
      }
    }

    if (wait.length === 0) return [];
    for (let k of wait) {
      for (let i = 0; i < matrix.length; i++) {
        matrix[i].has(k) && matrix[i].delete(k);
      }
    }

    path.push(...wait);

    queue = [...tmp];
  }

  return path;
}
