// 在一个 平衡字符串 中，'L' 和 'R' 字符的数量是相同的。

// 给你一个平衡字符串 s，请你将它分割成尽可能多的平衡字符串。

// 注意：分割得到的每个字符串都必须是平衡字符串。

// 返回可以通过分割得到的平衡字符串的 最大数量 。

// 输入：s = "RLRRLLRLRL"
// 输出：4
// 解释：s 可以分割为 "RL"、"RRLL"、"RL"、"RL" ，每个子字符串中都包含相同数量的 'L' 和 'R' 。
// 示例 2：

// 输入：s = "RLLLLRRRLR"
// 输出：3
// 解释：s 可以分割为 "RL"、"LLLRRR"、"LR" ，每个子字符串中都包含相同数量的 'L' 和 'R' 。
// 示例 3：

// 输入：s = "LLLLRRRR"
// 输出：1
// 解释：s 只能保持原样 "LLLLRRRR".
// 示例 4：

// 输入：s = "RLRRRLLRLL"
// 输出：2
// 解释：s 可以分割为 "RL"、"RRRLLRLL" ，每个子字符串中都包含相同数量的 'L' 和 'R' 。

export function balancedStringSplit(s: string): number {
  let cur = s;
  let p = 0;

  function isEqual(str: string) {
    if (!str.length) return false;
    let l = 0;
    let r = 0;
    for (let i = 0; i < str.length; i++) {
      if (str[i] === "L") {
        l++;
      } else {
        r++;
      }
    }

    if (l === r) return true;
    return false;
  }

  function dfs(str: string, k = 0): number {
    if (!str.length) return k;
    const len = str.length;
    let p = len - 2;

    while (!isEqual(str.slice(p, len))) {
      p -= 2;
    }

    k++;
    str = str.slice(0, p);

    return dfs(str, k);
  }

  return dfs(s);
}
