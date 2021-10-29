// 「力扣挑战赛」心算项目的挑战比赛中，要求选手从 N 张卡牌中选出 cnt 张卡牌，若这 cnt 张卡牌数字总和为偶数，则选手成绩「有效」且得分为 cnt 张卡牌数字总和。
// 给定数组 cards 和 cnt，其中 cards[i] 表示第 i 张卡牌上的数字。 请帮参赛选手计算最大的有效得分。若不存在获取有效得分的卡牌方案，则返回 0。

export function maxmiumScore(cards: number[], cnt: number): number {
  cards.sort((a, b) => b - a);

  let [a, b, c, d] = [-1, -1, -1, -1];
  let result = 0;

  for (let i = 0; i < cnt; i++) {
    result += cards[i];
    if (cards[i] % 2) {
      a = i; // 前ant项内最小的奇数
    } else {
      b = i; // 前ant项内最小的偶数
    }
  }

  if (result % 2 === 0) return result;

  for (let i = cnt; i < cards.length && (c === -1 || d === -1); i++) {
    if (c === -1 && cards[i] % 2 !== 0) {
      c = i; // ant项后最大的奇数
    }

    if (d === -1 && cards[i] % 2 === 0) {
      d = i; // ant项后最大的偶数
    }
  }

  let e = 100000;
  let f = 100000;

  if (b !== -1 && c !== -1) {
    // 之前有最大偶数，之后有最大奇数
    e = cards[b] - cards[c]; // 用偶数换奇数的差值
  }

  if (a !== -1 && d !== -1) {
    // 之前有最大奇数，之后有最大偶数
    f = cards[a] - cards[d]; // 用奇数换偶数的差值
  }

  // 选择最小差值替换
  if (e < f) {
    result -= e;
  } else {
    result -= f;
  }

  return result % 2 === 0 ? result : 0;
}
