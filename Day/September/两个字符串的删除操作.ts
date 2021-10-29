// 给定两个单词 word1 和 word2，找到使得 word1 和 word2 相同所需的最小步数，每步可以删除任意一个字符串中的一个字符。

export function minDistance(word1: string, word2: string): number {
  // 求最长公共子序列
  const [m, n] = [word1.length, word2.length];

  const dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));

  for (let i = 1; i <= m; i++) {
    const c1 = word1[i - 1];
    for (let j = 1; j <= n; j++) {
      const c2 = word2[j - 1];
      if (c1 === c2) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  const publicLen = dp[m][n];

  return m - publicLen + n - publicLen;
}
