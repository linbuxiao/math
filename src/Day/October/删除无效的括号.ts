// 给你一个由若干括号和字母组成的字符串 s ，删除最小数量的无效括号，使得输入的字符串有效。

// 返回所有可能的结果。答案可以按 任意顺序 返回。

export function removeInvalidParentheses(s: string): string[] {
  let leftLen = 0;
  let rightLen = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") leftLen++;
    if (s[i] === ")") rightLen++;
  }

  const max = Math.min(leftLen, rightLen);
  const map = new Set<string>();

  function getScore(k: string) {
    let score = 0;
    for (let i = 0; i < k.length; i++) {
      if (k[i] === "(") score += 1;
      if (k[i] === ")") score -= 1;
    }
    return score;
  }

  const result: string[] = [];
  function dfs(k: string, i: number) {
    const serialize = `${k}$${i}`;
    if (map.has(serialize)) return;
    map.add(serialize);
    const score = getScore(k);
    if (score > max || score < 0) return;
    if (i === s.length) {
      if (score === 0) result.push(k);
      return;
    }
    const next = s[i]!;
    switch (next) {
      case "(": {
        dfs(k + next, i + 1);
        dfs(k, i + 1);
        break;
      }
      case ")": {
        dfs(k + next, i + 1);
        dfs(k, i + 1);
        break;
      }
      default: {
        dfs(k + next, i + 1);
        break;
      }
    }
  }

  dfs("", 0);
  result.sort((a, b) => b.length - a.length);
  return result.length
    ? result.filter((v) => v.length === result[0]!.length)
    : result;
}
