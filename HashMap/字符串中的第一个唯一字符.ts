/**
 * 给定一个字符串，找到它的第一个不重复的字符，并返回它的索引。如果不存在，则返回 -1。
 * s = "leetcode"
 * 返回 0
 *
 * s = "loveleetcode"
 * 返回 2
 */

function firstUniqChar(s: string): number {
  let map = new Map<string, boolean>();
  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      map.set(s[i], true);
    } else {
      map.set(s[i], false);
    }
  }

  // 只出现过一次的集合

  // 挨个寻找他们的key，并且返回最小的那个key
  let resSet = new Set<string>();
  map.forEach((flag, val) => {
    if (!flag) resSet.add(val);
  });
  let min = s.length - 1;

  for (let i = 0; i < s.length; i++) {
    if (resSet.has(s[i])) {
      if (min > i) min = i;
    }
  }

  if (resSet.size) {
    return min;
  }
  return -1;
}
