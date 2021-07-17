/**
 * 写一个函数 StrToInt，实现把字符串转换成整数这个功能。不能使用 atoi 或者其他类似的库函数。
 * 首先，该函数会根据需要丢弃无用的开头空格字符，直到寻找到第一个非空格的字符为止。
 * 当我们寻找到的第一个非空字符为正或者负号时，则将该符号与之后面尽可能多的连续数字组合起来，作为该整数的正负号；假如第一个非空字符是数字，则直接将其与之后连续的数字字符组合起来，形成整数。
 * 该字符串除了有效的整数部分之后也可能会存在多余的字符，这些字符可以被忽略，它们对于函数不应该造成影响。
 * 注意：假如该字符串中的第一个非空格字符不是一个有效整数字符、字符串为空或字符串仅包含空白字符时，则你的函数不需要进行转换。
 * 在任何情况下，若函数不能进行有效的转换时，请返回 0。
 *
 * "42"
 * 42
 *
 * "   -42"
 * -42
 */

export function strToInt(str: string): number {
  const MAX = Math.pow(2, 31) - 1;
  const MIN = Math.pow(-2, 31);

  let arr = str.trim().split(" ")[0];
  let s: string[] = [];
  for (let a = 0; a < arr.length; a++) {
    if (a === 0) {
      if (arr[0] === "-") {
        s.push(arr[0]);
        continue;
      }
      if (arr[0] === "+") continue;
      if (!/^[0-9]\d*$/g.test(arr[0])) return 0;
    }

    if (/^[0-9]\d*$/.test(arr[a])) {
      s.push(arr[a]);
    } else if (arr[a] === "0") {
      if (s[0] && s[0] !== "-" && s[0] !== "+") {
        continue;
      } else {
        s.push(arr[a]);
      }
    } else {
      break;
    }
  }

  let x = +s.join("");
  if (x > MAX) return MAX;
  if (x < MIN) return MIN;
  return x ? x : 0;
}
