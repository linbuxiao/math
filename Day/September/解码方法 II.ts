// 一条包含字母 A-Z 的消息通过以下的方式进行了编码：

// 'A' -> 1
// 'B' -> 2
// ...
// 'Z' -> 26
// 要 解码 一条已编码的消息，所有的数字都必须分组，然后按原来的编码方案反向映射回字母（可能存在多种方式）。例如，"11106" 可以映射为：

// "AAJF" 对应分组 (1 1 10 6)
// "KJF" 对应分组 (11 10 6)
// 注意，像 (1 11 06) 这样的分组是无效的，因为 "06" 不可以映射为 'F' ，因为 "6" 与 "06" 不同。

// 除了 上面描述的数字字母映射方案，编码消息中可能包含 '*' 字符，可以表示从 '1' 到 '9' 的任一数字（不包括 '0'）。例如，编码字符串 "1*" 可以表示 "11"、"12"、"13"、"14"、"15"、"16"、"17"、"18" 或 "19" 中的任意一条消息。对 "1*" 进行解码，相当于解码该字符串可以表示的任何编码消息。

// 给你一个字符串 s ，由数字和 '*' 字符组成，返回 解码 该字符串的方法 数目 。

// 由于答案数目可能非常大，返回对 109 + 7 取余 的结果。

export function numDecodings(s: string): number {
  const m = s.length;
  const dp = new Array(m).fill(0);
  const mod = Math.pow(10, 9) + 7;

  dp[0] = s[0] === "*" ? 9 : s[0] === "0" ? 0 : 1;
  if (s.length <= 1) return dp[0];
  if (dp[0] === 0) {
    dp[1] = 0;
  } else if (dp[0] === 9) {
    if (s[1] === "*") {
      dp[1] = 96;
    } else if (+s[1] > 6) {
      dp[1] = 9;
    } else if (+s[1] === 0) {
      dp[1] = 2;
    } else {
      dp[1] = 11;
    }
  } else if (dp[0] === 1) {
    if (+s[0] === 1) {
      if (s[1] === "*") {
        dp[1] = 18;
      } else if (+s[1] > 6) {
        dp[1] = 2;
      } else if (+s[1] === 0) {
        dp[1] = 1;
      } else {
        dp[1] = 2;
      }
    } else if (+s[0] === 2) {
      if (s[1] === "*") {
        dp[1] = 15;
      } else if (+s[1] > 6) {
        dp[1] = 1;
      } else if (+s[1] === 0) {
        dp[1] = 1;
      } else {
        dp[1] = 2;
      }
    } else {
      // s[0] > 2 && <= 9
      if (s[1] === "*") {
        dp[1] = 9;
      } else if (+s[1] > 6) {
        dp[1] = 1;
      } else if (+s[1] === 0) {
        dp[1] = 0;
      } else {
        dp[1] = 1;
      }
    }
  }

  // 当前情况 * 之前情况 = 情况总数

  for (let i = 2; i < m; i++) {
    const prev = s[i - 1];
    const cur = s[i];
    if (prev === "*") {
      if (cur === "*") {
        dp[i] = dp[i - 2] * 15 + dp[i - 1] * 9;
      } else if (+cur > 6) {
        dp[i] = dp[i - 2] + dp[i - 1] * 1;
      } else if (+cur === 0) {
        dp[i] = dp[i - 2] * 2;
      } else if (+cur <= 6) {
        dp[i] = dp[i - 2] * 2 + dp[i - 1] * 1;
      }
    } else if (+prev > 2) {
      if (cur === "*") {
        dp[i] = dp[i - 1] * 9;
      } else if (+cur > 6) {
        dp[i] = dp[i - 1] * 1;
      } else if (+cur === 0) {
        dp[i] = 0;
      } else if (+cur <= 6) {
        dp[i] = dp[i - 1] * 1;
      }
    } else if (+prev === 0) {
      if (cur === "*") {
        dp[i] = dp[i - 1] * 9;
      } else if (+cur > 6) {
        dp[i] = dp[i - 1] * 1;
      } else if (+cur === 0) {
        dp[i] = 0;
      } else if (+cur <= 6) {
        dp[i] = dp[i - 1] * 1;
      }
    } else if (+prev === 1) {
      if (cur === "*") {
        dp[i] = dp[i - 2] * 9 + dp[i - 1] * 9;
      } else if (+cur > 6) {
        dp[i] = dp[i - 1] * 1 + dp[i - 2] * 1;
      } else if (+cur === 0) {
        dp[i] = dp[i - 2];
      } else if (+cur <= 6) {
        dp[i] = dp[i - 2] * 1 + dp[i - 1] * 1;
      }
    } else if (+prev === 2) {
      if (cur === "*") {
        dp[i] = dp[i - 2] * 6 + dp[i - 1] * 9;
      } else if (+cur > 6) {
        dp[i] = dp[i - 1] * 1;
      } else if (+cur === 0) {
        dp[i] = dp[i - 2];
      } else if (+cur <= 6) {
        dp[i] = dp[i - 2] * 1 + dp[i - 1] * 1;
      }
    }

    dp[i] = dp[i];
  }

  return dp[dp.length - 1] % mod;
}
