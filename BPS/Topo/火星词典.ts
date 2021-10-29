// 现有一种使用字母的全新语言，这门语言的字母顺序与英语顺序不同。

// 假设，您并不知道其中字母之间的先后顺序。但是，会收到词典中获得一个 不为空的 单词列表。因为是从词典中获得的，所以该单词列表内的单词已经 按这门新语言的字母顺序进行了排序。

// 您需要根据这个输入的列表，还原出此语言中已知的字母顺序。

// 输入:
// [
//   "wrt",
//   "wrf",
//   "er",
//   "ett",
//   "rftt"
// ]
// 输出: "wertf"

// 输入：words = ["z","x","z"]
// 输出：""
// 解释：不存在合法字母顺序，因此返回 "" 。

export function alienOrder(words: string[]): string {
  let queue: string[] = [];
  const topo = new Map<string, Set<string>>();

  for (let word of words) {
    for (let i = 0; i < word.length; i++) {
      const str = word[i];
      queue.indexOf(str) === -1 && queue.push(str);
      !topo.has(str) && topo.set(str, new Set<string>());
    }
  }
  const list = [...queue];
  for (let i = 0; i < words.length - 1; i++) {
    const cur = words[i];
    const next = words[i + 1];
    let flag = true;
    for (let k = 0; k < Math.min(cur.length, next.length); k++) {
      if (cur[k] !== next[k]) {
        topo.set(cur[k], topo.get(cur[k])!.add(next[k]));
        flag = false;
        break;
      }
    }
    if (flag && next < cur) return "";
  }
  const n = queue.length;
  if (n === 1) return queue[0];
  let str = "";
  while (queue.length) {
    const tmp = [];
    let wait = [];
    for (const str of queue) {
      if (topo.get(str)!.size === 0) {
        wait.push(str);
      } else {
        tmp.push(str);
      }
    }

    if (wait.length === 0) return "";
    for (let str of list) {
      const set = topo.get(str)!;
      for (let s of wait) {
        if (set.has(s)) {
          set.delete(s);
          topo.set(str, set);
        }
      }
    }
    queue = [...tmp];
    str = wait.join("") + str;
  }

  return str;
}
