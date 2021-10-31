// 给你一个字符串数组 words ，只返回可以使用在 美式键盘 同一行的字母打印出来的单词。键盘如下图所示。

// 美式键盘 中：

// 第一行由字符 "qwertyuiop" 组成。
// 第二行由字符 "asdfghjkl" 组成。
// 第三行由字符 "zxcvbnm" 组成。

export function findWords(words: string[]): string[] {
  // 简单哈希
  const set = [
    new Set(["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"]),
    new Set(["a", "s", "d", "f", "g", "h", "j", "k", "l"]),
    new Set(["z", "x", "c", "v", "b", "n", "m"]),
  ];

  const result: string[] = [];

  for (const instanceWord of words) {
    const word = instanceWord.toLowerCase();
    if (
      set.some((s) => {
        for (let i = 0; i < word.length; i++) {
          if (!s.has(word[i])) {
            return false;
          }
        }
        return true;
      })
    ) {
      result.push(instanceWord);
    }
  }

  return result;
}
