/**
 *  给定字符串J 代表石头中宝石的类型，和字符串 S代表你拥有的石头。 S 中每个字符代表了一种你拥有的石头的类型，你想知道你拥有的石头中有多少是宝石。
 *  J 中的字母不重复，J 和 S中的所有字符都是字母。字母区分大小写，因此"a"和"A"是不同类型的石头。
 *  输入: J = "aA", S = "aAAbbbb"
 *  输出: 3
 */

function numJewelsInStones(jewels: string, stones: string): number {
  const map = new Map<string, number>();

  // 储存所有宝石的类型到集合
  for (let i = 0; i < jewels.length; i++) {
    map.set(jewels[i], 0);
  }

  // 遍历石头
  for (let i = 0; i < stones.length; i++) {
    let s = stones[i];
    if (map.has(s)) {
      map.set(s, map.get(s)! + 1);
    }
  }

  return Array.from(map.values()).reduce((a, b) => a + b);
}
