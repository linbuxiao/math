// 字典 wordList 中从单词 beginWord 和 endWord 的 转换序列 是一个按下述规格形成的序列：

// 序列中第一个单词是 beginWord 。
// 序列中最后一个单词是 endWord 。
// 每次转换只能改变一个字母。
// 转换过程中的中间单词必须是字典 wordList 中的单词。
// 给你两个单词 beginWord 和 endWord 和一个字典 wordList ，找到从 beginWord 到 endWord 的 最短转换序列 中的 单词数目 。如果不存在这样的转换序列，返回 0。

// 输入：beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log","cog"]
// 输出：5
// 解释：一个最短转换序列是 "hit" -> "hot" -> "dot" -> "dog" -> "cog", 返回它的长度 5。

// 输入：beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log"]
// 输出：0
// 解释：endWord "cog" 不在字典中，所以无法进行转换。

export function ladderLength(
  beginWord: string,
  endWord: string,
  wordList: string[]
): number {
  if (wordList.indexOf(endWord) === -1) return 0;
  const map = new Map<string, string[]>();
  const used = new Map<string, boolean>();

  /**
   * 判断有多少个相同的字符
   * @param str 当前字符串
   * @param target 比对有多少相同的字符的
   * @returns 有多少个相同的字符
   */
  const parseTime = (str: string, target: string) => {
    let num = 0;
    for (let i = 0; i < str.length; i++) {
      if (str[i] === target[i]) num++;
    }

    return num;
  };

  // 建立拓扑图(其实就是关系图)
  for (let word of wordList.concat([beginWord])) {
    if (map.has(word)) continue;
    const list = [];
    for (let target of wordList) {
      if (target === word) continue;
      if (parseTime(word, target) === beginWord.length - 1) list.push(target);
    }
    map.set(word, list);
    used.set(word, false);
  }

  let queue = [beginWord];
  let step = 0;
  while (queue.length) {
    step++;
    let flag = false;
    let tmp = [];
    for (let word of queue) {
      if (used.get(word)!) continue;
      used.set(word, true);
      // 找到最后的单词，结束
      if (word === endWord) {
        flag = true;
      }
      tmp.push(...map.get(word)!);
    }
    if (flag) break;
    if (!tmp.length) {
      step = 0;
      break;
    }

    queue = [...tmp];
  }

  return step;
}
