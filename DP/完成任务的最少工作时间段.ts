// 你被安排了 n 个任务。任务需要花费的时间用长度为 n 的整数数组 tasks 表示，第 i 个任务需要花费 tasks[i] 小时完成。一个 工作时间段 中，你可以 至多 连续工作 sessionTime 个小时，然后休息一会儿。

// 你需要按照如下条件完成给定任务：

// 如果你在某一个时间段开始一个任务，你需要在 同一个 时间段完成它。
// 完成一个任务后，你可以 立马 开始一个新的任务。
// 你可以按 任意顺序 完成任务。
// 给你 tasks 和 sessionTime ，请你按照上述要求，返回完成所有任务所需要的 最少 数目的 工作时间段 。

// 测试数据保证 sessionTime 大于等于 tasks[i] 中的 最大值 。

export function minSessions(tasks: number[], sessionTime: number): number {
  const n = tasks.length;
  const m = 1 << n;
  const INF = 20;
  const dp = Array.from({ length: m }, () => INF);

  for (let i = 0; i < m; i++) {
    let state = i;
    let idx = 0;
    let spend = 0;
    while (state > 0) {
      let bit = state & 1;
      if (bit === 1) {
        spend += tasks[idx];
      }
      state = state >> 1;
      idx++;
    }
    if (spend <= sessionTime) {
      dp[i] = 1;
    }
  }

  for (let i = 1; i < m; i++) {
    if (dp[i] === 1) {
      continue;
    }
    for (let j = 1; j <= i; j++) {
      if ((i | j) === i) {
        dp[i] = Math.min(dp[i], dp[j] + dp[i ^ j]);
      }
    }
  }

  return dp[m - 1];
}
