// 有一份由 n 个问题组成的调查问卷，每个问题的答案要么是 0（no，否），要么是 1（yes，是）。

// 这份调查问卷被分发给 m 名学生和 m 名导师，学生和导师的编号都是从 0 到 m - 1 。学生的答案用一个二维整数数组 students 表示，其中 students[i] 是一个整数数组，包含第 i 名学生对调查问卷给出的答案（下标从 0 开始）。导师的答案用一个二维整数数组 mentors 表示，其中 mentors[j] 是一个整数数组，包含第 j 名导师对调查问卷给出的答案（下标从 0 开始）。

// 每个学生都会被分配给 一名 导师，而每位导师也会分配到 一名 学生。配对的学生与导师之间的兼容性评分等于学生和导师答案相同的次数。

// 例如，学生答案为[1, 0, 1] 而导师答案为 [0, 0, 1] ，那么他们的兼容性评分为 2 ，因为只有第二个和第三个答案相同。
// 请你找出最优的学生与导师的配对方案，以 最大程度上 提高 兼容性评分和 。

// 给你 students 和 mentors ，返回可以得到的 最大兼容性评分和 。

export function maxCompatibilitySum(
  students: number[][],
  mentors: number[][],
): number {
  const m = students.length;
  const h = students[0].length;
  let ans = 0;

  function dfs(used = 0, k = 0, sum = 0) {
    if (k === m) {
      ans = Math.max(sum, ans);
      return;
    }
    for (let i = 0; i < m; i++) {
      if ((used >> i) & 1) continue; // 该老师已用过
      const newUsed = used | (1 << i);
      const student = students[k];
      const mentor = mentors[i];
      let val = 0;
      for (let j = 0; j < h; j++) {
        if (student[j] === mentor[j]) val++;
      }
      dfs(newUsed, k + 1, sum + val);
    }
  }

  dfs();

  return ans;
}
