import { maxScoreWords } from "../src/SC/得分最高的单词集合";

console.log(
  maxScoreWords(
    ["da", "ac", "aba", "abcc", "cadc"],
    ["a", "a", "a", "a", "b", "c", "c", "c", "d", "d", "d"],
    [
      3, 7, 9, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0,
    ]
  )
);
