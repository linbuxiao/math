// 给你一个字符串 s ，仅反转字符串中的所有元音字母，并返回结果字符串。

// 元音字母包括 'a'、'e'、'i'、'o'、'u'，且可能以大小写两种形式出现。

//

// 示例 1：

// 输入：s = "hello"
// 输出："holle"
// 示例 2：

// 输入：s = "leetcode"
// 输出："leotcede"

export function reverseVowels(s: string): string {
  const set = new Set<string>([
    "a",
    "e",
    "i",
    "o",
    "u",
    "A",
    "E",
    "I",
    "O",
    "U",
  ]);
  const arr = s.split("");
  const isVowels = (char: string) => {
    if (set.has(char)) return true;
    return false;
  };

  const swap = (l: number, r: number) => {
    let tmp = s[l];
    arr[l] = arr[r];
    arr[r] = tmp;
  };

  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    // 如果左指针遇到了元音, 移动右指针
    if (isVowels(s[left])) {
      while (left < right && !isVowels(s[right])) {
        right--;
      }
      swap(left, right);
      right--;
    }
    left++;
  }

  return arr.join("");
}
