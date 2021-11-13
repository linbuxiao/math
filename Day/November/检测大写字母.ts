// 我们定义，在以下情况时，单词的大写用法是正确的：

// 全部字母都是大写，比如 "USA" 。
// 单词中所有字母都不是大写，比如 "leetcode" 。
// 如果单词不只含有一个字母，只有首字母大写，比如 "Google" 。
// 给你一个字符串 word 。如果大写用法正确，返回 true ；否则，返回 false 。

export function detectCapitalUse(word: string): boolean {
  function isUp(s: string) {
    if (s.toLocaleUpperCase() === s) return true;
    return false;
  }

  // 是否全大写
  if (word.split("").every(isUp)) return true;
  if (
    word.length !== 1 &&
    isUp(word[0]) &&
    !word.slice(1, word.length).split("").some(isUp)
  ) {
    return true;
  }

  if (!word.split("").some(isUp)) return true;

  return false;
}
