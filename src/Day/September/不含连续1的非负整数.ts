// 给定一个正整数 n，找出小于或等于 n 的非负整数中，其二进制表示不包含 连续的1 的个数。

// 示例 1:

// 输入: 5
// 输出: 5
// 解释:
// 下面是带有相应二进制表示的非负整数<= 5：
// 0 : 0
// 1 : 1
// 2 : 10
// 3 : 11
// 4 : 100
// 5 : 101
// 其中，只有整数3违反规则（有两个连续的1），其他5个满足规则。

export function findIntegers(n: number): number {
  // 将数字转化为二进制
  function turnSystem(k: number) {
    return k.toString(2);
  }

  // 包含连续1？
  function check(s: string) {
    for (let i = 0; i < s.length; i++) {
      if (
        s[i] === "1" &&
        ((i > 0 && s[i - 1] === "1") || (i < s.length - 1 && s[i + 1] === "1"))
      ) {
        return true;
      }
    }
    return false;
  }

  let ans = 0;
  for (let i = 0; i <= n; i++) {
    if (!check(turnSystem(i))) ans++;
  }

  return ans;
}
