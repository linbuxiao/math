// 有一个密钥字符串 S ，只包含字母，数字以及 '-'（破折号）。其中， N 个 '-' 将字符串分成了 N+1 组。

// 给你一个数字 K，请你重新格式化字符串，使每个分组恰好包含 K 个字符。特别地，第一个分组包含的字符个数必须小于等于 K，但至少要包含 1 个字符。两个分组之间需要用 '-'（破折号）隔开，并且将所有的小写字母转换为大写字母。

// 给定非空字符串 S 和数字 K，按照上面描述的规则进行格式化。

export function licenseKeyFormatting(s: string, k: number): string {
  // 首先过滤掉当前所有-
  s = s
    .split("-")
    .map((str) => str.toLocaleUpperCase())
    .join("");
  if (s.length < k) return s;
  // 判断是否有余
  const remain = s.length % k;

  function joinDash(str: string, k: number) {
    let res = "";
    for (let i = k; i <= str.length; i += k) {
      res = res + `${str.slice(i - k, i)}-`;
    }

    return res.substring(0, res.length - 1);
  }

  if (remain) {
    // 有余
    return `${s.slice(0, remain)}-${joinDash(s.slice(remain), k)}`;
  } else {
    return joinDash(s, k);
  }
}
