// 给你一个字符串 s ，请你找到 s 中两个 不相交回文子序列 ，使得它们长度的 乘积最大 。两个子序列在原字符串中如果没有任何相同下标的字符，则它们是 不相交 的。

// 请你返回两个回文子序列长度可以达到的 最大乘积 。

// 子序列 指的是从原字符串中删除若干个字符（可以一个也不删除）后，剩余字符不改变顺序而得到的结果。如果一个字符串从前往后读和从后往前读一模一样，那么这个字符串是一个 回文字符串 。

export function maxProduct(s: string): number {
  const m = s.length;
  const n = 1 << m; // 1000

  function check(state: number): boolean {
    let l = 0;
    let r = s.length - 1;
    while (l < r) {
      while (l < r && ((state >> l) & 1) === 0) {
        l++;
      }
      while (l < r && ((state >> r) & 1) === 0) {
        r--;
      }

      if (s[l] !== s[r]) return false;
      l++;
      r--;
    }

    return true;
  }

  let res = 0;
  const set = new Set<number>();
  for (let i = 1; i < n; i++) {
    if (check(i)) {
      // list[i] = i.toString(2).split("").filter(item => item === '1').length
      set.add(i);
    }
  }

  function getLen(num: number): number {
    return num
      .toString(2)
      .split("")
      .filter((item) => item === "1").length;
  }

  set.forEach((i) => {
    set.forEach((j) => {
      if ((i & j) === 0) {
        res = Math.max(getLen(i) * getLen(j), res);
      }
    });
  });

  return res;
}
