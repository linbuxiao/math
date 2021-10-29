// 给你一个字符串 s ，找出其中最长的回文子序列，并返回该序列的长度。

// 子序列定义为：不改变剩余字符顺序的情况下，删除某些字符或者不删除任何字符形成的一个序列。

const longestPalindromeSubseq = (s: string) => {
  // 字符串长度
  const len = s.length;
  // 创建dp数组
  const dp = new Array(len).fill(0).map((x) => new Array(len).fill(0));
  // dp数组初始化，矩阵主对角线都为1
  for (let i = 0; i < len; i++) dp[i][i] = 1;

  // 遍历顺序，从下往上，从左往右
  for (let i = len - 1; i >= 0; i--) {
    for (let j = i + 1; j < len; j++) {
      // 根据s[i]和s[j]的关系更新dp[i][j]
      if (s[i] === s[j]) {
        // 头尾相等，则dp[i][j]等于减去头尾的数量+2
        dp[i][j] = dp[i + 1][j - 1] + 2;
      } else {
        // 头尾不相等，则dp[i][j]等于减去头或减去尾的最大值
        dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1]);
      }
    }
  }
  // 返回字符串的头到尾的数量
  return dp[0][len - 1];
};
