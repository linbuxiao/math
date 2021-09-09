// 给定一个单词数组和一个长度 maxWidth，重新排版单词，使其成为每行恰好有 maxWidth 个字符，且左右两端对齐的文本。

// 你应该使用“贪心算法”来放置给定的单词；也就是说，尽可能多地往每行中放置单词。必要时可用空格 ' ' 填充，使得每行恰好有 maxWidth 个字符。

// 要求尽可能均匀分配单词间的空格数量。如果某一行单词间的空格不能均匀分配，则左侧放置的空格数要多于右侧的空格数。

// 文本的最后一行应为左对齐，且单词之间不插入额外的空格。

// 说明:

// 单词是指由非空格字符组成的字符序列。
// 每个单词的长度大于 0，小于等于 maxWidth。
// 输入单词数组 words 至少包含一个单词。

export function fullJustify(words: string[], maxWidth: number): string[] {
  // 依行确定

  // 塞不进去单词时，
  // a. 一个单词：补充空格至max
  // b. 多个单词：从左往右依次添加空格
  // c. 后方无单词：后方空格补充满（优先）

  let p = 0;
  const BLANK_STR = " ";
  const ans: string[] = [];
  while (p < words.length) {
    let line = "";
    let k = 0;
    while (
      (line + (k ? BLANK_STR : "") + words[p]).length <= maxWidth &&
      p < words.length
    ) {
      line += (k ? BLANK_STR : "") + words[p];
      p++;
      k++;
    }
    if (p >= words.length) {
      while (line.length < maxWidth) {
        line += BLANK_STR;
      }
      ans.push(line);
    } else {
      if (k === 1) {
        while (line.length < maxWidth) {
          line += BLANK_STR;
        }
        ans.push(line);
      } else {
        const arr = line.split("");

        while (arr.length < maxWidth) {
          for (let i = 1; i < arr.length && arr.length < maxWidth; i++) {
            if (arr[i - 1] === BLANK_STR || arr[i] !== BLANK_STR) continue;
            arr.splice(i, 0, BLANK_STR);
          }
        }
        line = arr.join("");
        ans.push(line);
      }
    }
  }

  return ans;
}
