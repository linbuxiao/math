// 对于任何字符串，我们可以通过删除其中一些字符（也可能不删除）来构造该字符串的子序列。

// 给定源字符串 source 和目标字符串 target，找出源字符串中能通过串联形成目标字符串的子序列的最小数量。如果无法通过串联源字符串中的子序列来构造目标字符串，则返回 -1。

//

// 示例 1：

// 输入：source = "abc", target = "abcbc"
// 输出：2
// 解释：目标字符串 "abcbc" 可以由 "abc" 和 "bc" 形成，它们都是源字符串 "abc" 的子序列。
// 示例 2：

// 输入：source = "abc", target = "acdbc"
// 输出：-1
// 解释：由于目标字符串中包含字符 "d"，所以无法由源字符串的子序列构建目标字符串。
// 示例 3：

// 输入：source = "xyz", target = "xzyxz"
// 输出：3
// 解释：目标字符串可以按如下方式构建： "xz" + "y" + "xz"。

export function shortestWay(source: string, target: string): number {
  /**
   * 判断两个字符串是否存在包含关系
   * @param s 父串
   * @param t 子串
   */
  const judge = (s: string, t: string) => {
    let flag = false;
    if (t.length > s.length) return flag;

    const circle = (i: number) => {
      let j = 0;
      for (let k = i; k < s.length; k++) {
        if (s[k] === t[j]) {
          j++;
          if (j === t.length) return true;
        }
      }

      return false;
    };

    for (let i = 0; i < s.length; i++) {
      // 找到每个子串的头，如果找不到，则直接返回false
      if (s[i] === t[0]) {
        if (circle(i)) {
          flag = true;
          break;
        }
      }
    }

    return flag;
  };

  let str = target;
  let tmp = "";

  let ans = 0;
  let p = str.length - 1;
  while (str.length && p >= 0) {
    if (judge(source, str.substring(0, p + 1))) {
      ans++;
      tmp += str.substring(0, p + 1);
      str = str.substring(p + 1, str.length);
      p = str.length - 1;
    } else {
      p--;
    }
  }

  return tmp.length === target.length ? ans : -1;
}
