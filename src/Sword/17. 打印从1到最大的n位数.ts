/**
 * 输入数字 n，按顺序打印出从 1 到最大的 n 位十进制数。比如输入 3，则打印出 1、2、3 一直到最大的 3 位数 999。
 */

export function printNumbers(n: number): number[] {
  let a:number[] = []
  for(let b = 0; b<=n; b++) {
    a.push(9)
  }
  let b = +(a.join(""))
  let c = []
  for(let d = 1; d <= b; d++) {
    c.push(d)
  }
  
  return c
};

// 也可以用Math.pow去解
export function printNumbers_1(n: number): number[] {
  let res = []
  for(let i = 1; i < Math.pow(10, n); i++) {
    res.push(i)
  }
  return res
};