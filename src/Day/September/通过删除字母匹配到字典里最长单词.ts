// 给你一个字符串 s 和一个字符串数组 dictionary 作为字典，找出并返回字典中最长的字符串，该字符串可以通过删除 s 中的某些字符得到。

// 如果答案不止一个，返回长度最长且字典序最小的字符串。如果答案不存在，则返回空字符串。

export function findLongestWord(s: string, dictionary: string[]): string {
  dictionary.sort((a, b) => {
    if (a.length === b.length) {
      for (var i = 0; i < a.length; i++) {
        if (a.charCodeAt(i) == b.charCodeAt(i)) continue;
        return a.charCodeAt(i) - b.charCodeAt(i);
      }
      return 0;
    } else {
      return b.length - a.length;
    }
  });

  function check(target: string): boolean {
    let p = 0;
    let k = 0;
    while (p < s.length && k < target.length) {
      while (target[k] !== s[p] && p < s.length) {
        p++;
      }
      if (target[k] === s[p] && p < s.length) {
        p++;
        k++;
      }
    }

    if (k === target.length) return true;
    return false;
  }

  for (let target of dictionary) {
    if (check(target)) {
      return target;
    }
  }

  return "";
}
