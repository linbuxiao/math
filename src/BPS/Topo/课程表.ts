// 你这个学期必须选修 numCourses 门课程，记为 0 到 numCourses - 1 。

// 在选修某些课程之前需要一些先修课程。 先修课程按数组 prerequisites 给出，其中 prerequisites[i] = [ai, bi] ，表示如果要学习课程 ai 则 必须 先学习课程  bi 。

// 例如，先修课程对 [0, 1] 表示：想要学习课程 0 ，你需要先完成课程 1 。
// 请你判断是否可能完成所有课程的学习？如果可以，返回 true ；否则，返回 false 。

// 输入：numCourses = 2, prerequisites = [[1,0]]
// 输出：true
// 解释：总共有 2 门课程。学习课程 1 之前，你需要完成课程 0 。这是可能的。

// 这是一个典型的拓扑

export function canFinish(
  numCourses: number,
  prerequisites: number[][]
): boolean {
  const matrix: Set<number>[] = Array.from(
    { length: numCourses },
    () => new Set()
  );

  for (let [i, j] of prerequisites) {
    matrix[i].add(j);
  }

  let queue: number[] = [];
  for (let i = 0; i < numCourses; i++) {
    queue.push(i);
  }

  while (queue.length) {
    const tmp = [];
    const wait = [];
    for (let i of queue) {
      if (matrix[i].size === 0) {
        wait.push(i);
      } else {
        tmp.push(i);
      }
    }

    if (wait.length === 0) return false;
    for (let a = 0; a < matrix.length; a++) {
      for (let k of wait) {
        matrix[a].has(k) && matrix[a].delete(k);
      }
    }

    queue = [...tmp];
  }

  return true;
}
