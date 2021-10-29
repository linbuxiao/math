/**
 * 给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。
 * s = "abcabcbb"
 * 3
 * 输入: s = ""
 * 输出: 0
 */

// 'pwwkew' 2 3

// 理解错题，以为是从头开始，但其实不限制起始位置，想到指针
function lengthOfLongestSubstring_1(s: string): number {
  let set = new Set<string>();
  let length = 0;

  for (let i = 0; i < s.length; i++) {
    if (set.has(s[i])) {
      break;
    }
    set.add(s[i]);
    length++;
  }

  return length;
}

// 暴力法

// s可能为空格
export function lengthOfLongestSubstring_3(s: string): number {
  // if(!s.length) return 0

  let res = [];
  for (let x = 0; x < s.length - 1; x++) {
    let set = new Set<string>();
    set.add(s[x]);
    for (let y = x + 1; y < s.length; y++) {
      if (set.has(s[y])) {
        res.push(y - x);
        break;
      }
      if (y === s.length - 1) {
        res.push(y - x + 1);
      }
      set.add(s[y]);
    }
  }

  return res.length ? Math.max(...res) : s.length;
}

// 因为右侧指针不需要反复来回，所以简化一下遍历
// 快慢指针法，但仍然很慢
export function lengthOfLongestSubstring_2(s: string): number {
  let right = 1;
  let left = 0;
  let maxLen = 0;
  const set = new Set<string>();

  if (s[0]) {
    set.add(s[0]);
  }
  while (right < s.length && left < s.length - 1) {
    // 左指针
    if (set.has(s[right])) {
      // 如果在集合内
      maxLen = set.size > maxLen ? set.size : maxLen;
      // 删除直到重复一项，continue
      while (set.has(s[right])) {
        set.delete(s[left]);
        left++;
      }

      set.add(s[right]);
      right++;
      continue;
    }
    // 如果不在集合，则加入
    set.add(s[right]);
    right++;
  }

  return set.size > maxLen ? set.size : maxLen;
}

// 还有一个取巧的indexOf方法, 但其实index方法也只是去重的一种方式

export function lengthOfLongestSubstring(s: string): number {
  let str = s[0];
  let max = 1;
  if (s === "") return 0;

  for (let i = 1; i < s.length; i++) {
    if (str.indexOf(s[i]) !== -1) {
      // 每次截取不重复的部分
      str = str.slice(str.indexOf(s[i]) + 1);
    }
    str += s[i];
    // 然后给max赋值
    if (max < str.length) {
      max = str.length;
    }
  }

  return max;
}
