// 有一个特殊打字机，它由一个 圆盘 和一个 指针 组成， 圆盘上标有小写英文字母 'a' 到 'z'。只有 当指针指向某个字母时，它才能被键入。指针 初始时 指向字符 'a' 。

// 每一秒钟，你可以执行以下操作之一：

// 将指针 顺时针 或者 逆时针 移动一个字符。
// 键入指针 当前 指向的字符。
// 给你一个字符串 word ，请你返回键入 word 所表示单词的 最少 秒数 。

export function minTimeToType(word: string): number {
  const arr = [];

  for (let i = 0; i < word.length; i++) {
    arr.push(word.charCodeAt(i));
  }

  function move(s: number, t: number) {
    if (t < s) {
      const tmp = s;
      s = t;
      t = tmp;
    }
    const [d1, d2] = [t - s, s - 97 + 122 - t + 1];

    return Math.min(d1, d2);
  }

  let sum = 0;
  let p = 0;
  let s = 97;
  while (p < word.length) {
    sum += move(s, arr[p]) + 1;

    s = arr[p];
    p++;
  }

  return sum;
}
