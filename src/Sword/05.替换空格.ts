/**
 * 请实现一个函数，把字符串 s 中的每个空格替换成"%20"。
 * 输入：s = "We are happy."
 * 输出："We%20are%20happy."
 */

// 遍历字符串，遇到空格则换位 %20

export function replaceSpace(s: string): string {
  let x = s.split("")
  let y = []
  for(let a = 0; a<x.length; a++) {
    if(x[a] !== " ") {
      y.push(x[a])
    } else {
      y.push("%20")
    }
  }

  return y.join("")
};