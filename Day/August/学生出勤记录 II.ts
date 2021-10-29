// 可以用字符串表示一个学生的出勤记录，其中的每个字符用来标记当天的出勤情况（缺勤、迟到、到场）。记录中只含下面三种字符：
// 'A'：Absent，缺勤
// 'L'：Late，迟到
// 'P'：Present，到场
// 如果学生能够 同时 满足下面两个条件，则可以获得出勤奖励：

// 按 总出勤 计，学生缺勤（'A'）严格 少于两天。
// 学生 不会 存在 连续 3 天或 连续 3 天以上的迟到（'L'）记录。
// 给你一个整数 n ，表示出勤记录的长度（次数）。请你返回记录长度为 n 时，可能获得出勤奖励的记录情况 数量 。答案可能很大，所以返回对 109 + 7 取余 的结果。

// 输入：n = 2
// 输出：8
// 解释：
// 有 8 种长度为 2 的记录将被视为可奖励：
// "PP" , "AP", "PA", "LP", "PL", "AL", "LA", "LL"
// 只有"AA"不会被视为可奖励，因为缺勤次数为 2 次（需要少于 2 次）。

export function checkRecord(n: number): number {
  const situation = ["A", "L", "P"];
  const mod = Math.pow(10, 9) + 7;
  let queue = situation.map((item) => [item]);

  const judge = (arr: string[]) => {
    let aNum = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === "A") {
        aNum++;
        if (aNum === 2) return false;
      }
      if (i > 2 && arr[i] === "L" && arr[i - 1] === "L" && arr[i - 2] === "L") {
        return false;
      }
    }

    return true;
  };

  while (queue.length && queue[0].length < n) {
    let tmp = [];
    for (let str of queue) {
      for (let s of situation) {
        const newStr = [...str];
        newStr.push(s);
        if (judge(newStr)) tmp.push(newStr);
      }
    }
    queue = [...tmp];
  }

  return queue.length % mod;
}

// DP
