// 所有 DNA 都由一系列缩写为 'A'，'C'，'G' 和 'T' 的核苷酸组成，例如："ACGAATTCCG"。在研究 DNA 时，识别 DNA 中的重复序列有时会对研究非常有帮助。

// 编写一个函数来找出所有目标子串，目标子串的长度为 10，且在 DNA 字符串 s 中出现次数超过一次。

export function findRepeatedDnaSequences(s: string): string[] {
  if (s.length < 10) return [];

  const win = s.substring(0, 10).split("");

  const map = new Map<string, boolean>();

  map.set(win.join(""), false);

  const ans: string[] = [];

  for (let i = 10; i < s.length; i++) {
    win.shift();
    win.push(s[i]);
    const str = win.join("");
    if (map.has(str)) {
      const val = map.get(str)!;
      if (val) continue;
      map.set(str, true);
      ans.push(str);
    } else {
      map.set(str, false);
    }
  }

  return ans;
}
