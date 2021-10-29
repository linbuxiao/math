// 我们有 n 栋楼，编号从 0 到 n - 1 。每栋楼有若干员工。由于现在是换楼的季节，部分员工想要换一栋楼居住。

// 给你一个数组 requests ，其中 requests[i] = [fromi, toi] ，表示一个员工请求从编号为 fromi 的楼搬到编号为 toi 的楼。

// 一开始 所有楼都是满的，所以从请求列表中选出的若干个请求是可行的需要满足 每栋楼员工净变化为 0 。意思是每栋楼 离开 的员工数目 等于 该楼 搬入 的员工数数目。比方说 n = 3 且两个员工要离开楼 0 ，一个员工要离开楼 1 ，一个员工要离开楼 2 ，如果该请求列表可行，应该要有两个员工搬入楼 0 ，一个员工搬入楼 1 ，一个员工搬入楼 2 。

// 请你从原请求列表中选出若干个请求，使得它们是一个可行的请求列表，并返回所有可行列表中最大请求数目。

export function maximumRequests(n: number, requests: number[][]): number {
  // 枚举所有请求的组合

  const m = requests.length;
  const k = 1 << m;

  function check(state: number) {
    // 离开 = 搬入
    const times = new Array(n).fill(0);
    let p = 0;
    while (state >> p > 0) {
      if ((state >> p) & 1) {
        // 此时p为选择组合的索引
        times[requests[p][0]]--;
        times[requests[p][1]]++;
      }
      p++;
    }

    return !times.some((num) => num !== 0);
  }

  function getLen(state: number): number {
    let num = 0;
    const str = state.toString(2);
    for (let i = 0; i < str.length; i++) {
      if (str[i] === "1") num++;
    }
    return num;
  }

  const set = new Set<number>();

  for (let i = 0; i < k; i++) {
    if (check(i)) {
      set.add(i);
    }
  }

  let ans = 0;
  set.forEach((state) => {
    ans = Math.max(ans, getLen(state));
  });

  return ans;
}
