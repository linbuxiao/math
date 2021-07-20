/**
 * 请从字符串中找出一个最长的不包含重复字符的子字符串，计算该最长子字符串的长度。
 */

// 分前后两指针，指针之间为窗口
// 遇到相同后，从左指针开始循环删除数组，直到遇到 与当前右指针相同的值
// 这里需要维护一个set，来判断是否重复出现。
// 还要维护一个窗口数组，进行循环删除

export function lengthOfLongestSubstring_1(s: string): number {
  if(s.length < 2) return s.length
  let left = 0
  let right = 1
  const set = new Set<string>([s[0]])
  const arr: string[] = [s[0]]
  let max = 0
  while (left < right && left<s.length && right<s.length) {
    // 判断新值是否出现在窗口内
    if(set.has(s[right])) {
      max = max > arr.length ? max : arr.length
      while (arr[0]!==s[right]) {
        set.delete(arr[0])
        arr.shift()
      }
      arr.shift()
      // set.delete(s[right])
    } else {
      set.add(s[right])
    }
    arr.push(s[right])
    right++
  }

  max = max > arr.length ? max : arr.length

  return max
};

// 也可以只使用set解，因为窗口内的内容一定是不重复的。
// 而且我们会发现在当前解法中，left没屌用，维护窗口只依赖set就可以。然后给一个单指针。

function lengthOfLongestSubstring(s: string): number {
  if(s.length < 2) return s.length
  const set = new Set<string>()
  let left = 0
  let right = 0
  let max = 0
  while (right<s.length) {
    if(set.has(s[right])) {
      set.delete(s[left])
      left++
    } else {
      set.add(s[right])
      right++
    }

    max = right - left > max ? right - left : max
  }
  return max
};