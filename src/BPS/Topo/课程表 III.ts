// 这里有 n 门不同的在线课程，他们按从 1 到 n 编号。每一门课程有一定的持续上课时间（课程时间）t 以及关闭时间第 d 天。一门课要持续学习 t 天直到第 d 天时要完成，你将会从第 1 天开始。

// 给出 n 个在线课程用 (t, d) 对表示。你的任务是找出最多可以修几门课。

// 输入: [[100, 200], [200, 1300], [1000, 1250], [2000, 3200]]
// 输出: 3
// 解释:
// 这里一共有 4 门课程, 但是你最多可以修 3 门:
// 首先, 修第一门课时, 它要耗费 100 天，你会在第 100 天完成, 在第 101 天准备下门课。
// 第二, 修第三门课时, 它会耗费 1000 天，所以你将在第 1100 天的时候完成它, 以及在第 1101 天开始准备下门课程。
// 第三, 修第二门课时, 它会耗时 200 天，所以你将会在第 1300 天时完成它。
// 第四门课现在不能修，因为你将会在第 3300 天完成它，这已经超出了关闭日期。

// 整数 1 <= d, t, n <= 10,000 。
// 你不能同时修两门课程。

// dfs超时
export function scheduleCourse_1(courses: number[][]): number {
  const len = courses.length;
  let max = 0;
  const dfs = (n: number, times: number, count: number, used: Set<number>) => {
    if (max === len) return;
    if (used.has(n)) return;
    used.add(n);

    const nowTime = times + courses[n][0];

    // 超时了
    if (nowTime > courses[n][1]) {
      max = Math.max(max, count);
      return;
    }

    // 课修完了
    if (used.size === len) {
      max = Math.max(max, count + 1); // 加上这次的
      return;
    }

    // 进入下一阶段遍历
    for (let i = 0; i < len; i++) {
      dfs(i, nowTime, count + 1, new Set(used));
    }
  };

  for (let i = 0; i < len; i++) {
    // 每一门课当做第一门课的情况
    dfs(i, 0, 0, new Set());
  }

  return max;
}

//bfs超时
export function scheduleCourse_2(courses: number[][]): number {
  const len = courses.length;
  let max = 0;
  let queue: [Set<number>, number][] = [];
  for (let i = 0; i < len; i++) {
    queue.push([new Set([i]), courses[i][0]]);
  }

  while (queue.length) {
    const [used, times] = queue.shift()!;
    max = Math.max(max, used.size);
    if (used.size === len) continue;
    for (let i = 0; i < len; i++) {
      if (!used.has(i)) {
        const nextUsed = new Set(used);
        nextUsed.add(i);
        const nextTimes = times + courses[i][0];

        if (nextTimes <= courses[i][1]) {
          queue.push([nextUsed, nextTimes]);
        }
      }
    }
  }

  return max;
}

//优先队列

// 先学习结束早的，之后如果超时，就替换掉之前耗时最长的课
export function scheduleCourse(courses: number[][]): number {
  courses.sort((a, b) => a[1] - b[1]);

  const queue = [];
  let count = 0;

  for (let i = 0; i < courses.length; i++) {
    if (count + courses[i][0] <= courses[i][i]) {
      queue.push(i);
    }
  }
}
