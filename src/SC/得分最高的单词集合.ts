// 你将会得到一份单词表 words，一个字母表 letters （可能会有重复字母），以及每个字母对应的得分情况表 score。

// 请你帮忙计算玩家在单词拼写游戏中所能获得的「最高得分」：能够由 letters 里的字母拼写出的 任意 属于 words 单词子集中，分数最高的单词集合的得分。

// 单词拼写游戏的规则概述如下：

// 玩家需要用字母表 letters 里的字母来拼写单词表 words 中的单词。
// 可以只使用字母表 letters 中的部分字母，但是每个字母最多被使用一次。
// 单词表 words 中每个单词只能计分（使用）一次。
// 根据字母得分情况表score，字母 'a', 'b', 'c', ... , 'z' 对应的得分分别为 score[0], score[1], ..., score[25]。
// 本场游戏的「得分」是指：玩家所拼写出的单词集合里包含的所有字母的得分之和。

// 输入：words = ["dog","cat","dad","good"], letters = ["a","a","c","d","d","d","g","o","o"], score = [1,0,9,5,0,0,3,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0]
// 输出：23
// 解释：
// 字母得分为  a=1, c=9, d=5, g=3, o=2
// 使用给定的字母表 letters，我们可以拼写单词 "dad" (5+1+5)和 "good" (3+2+2+5)，得分为 23 。
// 而单词 "dad" 和 "dog" 只能得到 21 分。

export function maxScoreWords(
  words: string[],
  letters: string[],
  score: number[]
): number {
  // 枚举所有情况
  const m = letters.length;
  const n = 1 << m;

  const x = words.length;
  const y = 1 << x;

  const map = new Map<string, number>();
  const wordMap = new Map<string, number>();

  letters.forEach((item) => {
    const index = item.charCodeAt(0) - 97;
    if (!map.has(item)) {
      map.set(item, score[index]);
    }

    if (!wordMap.has(item)) {
      wordMap.set(item, 1);
    } else {
      wordMap.set(item, wordMap.get(item)! + 1);
    }
  });

  let ans = 0;
  for (let i = 0; i < y; i++) {
    // 分析该状态能否组成单词
    let z = 0;
    const copy = new Map(wordMap);
    let flag = true;
    let sumVal = 0;
    while (i >> z > 0 && flag) {
      if ((i >> z) & 1) {
        const word = words[z];
        for (let p = 0; p < word.length; p++) {
          if (copy.has(word[p])) {
            const time = copy.get(word[p])!;
            if (time - 1) {
              copy.set(word[p], time - 1);
            } else {
              copy.delete(word[p]);
            }
          } else {
            flag = false;
            break;
          }
        }
        sumVal += sum(words[z]);
      }
      z++;
    }

    if (flag) ans = Math.max(ans, sumVal);
  }

  function sum(str: string) {
    let sum = 0;
    for (let i = 0; i < str.length; i++) {
      const val = map.get(str[i])!;
      if (val) {
        sum += val;
      } else {
        return 0;
      }
    }

    return sum;
  }

  return ans;
}
