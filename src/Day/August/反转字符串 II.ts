// 给定一个字符串 s 和一个整数 k，从字符串开头算起，每 2k 个字符反转前 k 个字符。

// 如果剩余字符少于 k 个，则将剩余字符全部反转。
// 如果剩余字符小于 2k 但大于或等于 k 个，则反转前 k 个字符，其余字符保持原样。

// 示例 1：

// 输入：s = "abcdefg", k = 2
// 输出："bacdfeg"
// 示例 2：

// 输入：s = "abcd", k = 2
// 输出："bacd"

export function reverseStr(s: string, k: number): string {
  const len = s.length;
  const arr = s.split("");
  const swap = (l: number, r: number) => {
    while (l < r) {
      let tmp = arr[l];
      arr[l] = arr[r];
      arr[r] = tmp;
      l++;
      r--;
    }
  };
  for (let i = 0; i < len; i += 2 * k - 1) {
    let start = i - 2 * k + 1;
    let end = i - k;
    swap(start, end);

    const restLen = len - i - 1;

    console.log(restLen);

    if (restLen < k) {
      swap(i + 1, len - 1);
      break;
    }
    if (restLen < 2 * k) {
      swap(i + 1, i + k - 1);
      break;
    }
  }

  return arr.join("");
}
