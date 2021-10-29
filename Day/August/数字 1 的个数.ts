// 给定一个整数 n，计算所有小于等于 n 的非负整数中数字 1 出现的个数。

// 输入：n = 13
// 输出：6

export function countDigitOne_1(n: number): number {
  // 我觉得一般

  const subnum = (num: number) => {
    let times = 0;
    while (num) {
      if (num % 10 === 1) times++;
      num = Math.floor(num / 10);
    }
    return times;
  };

  let num = 0;

  for (let i = 0; i < n + 1; i++) {
    num += subnum(i);
  }

  return num;
}

export function countDigitOne(n: number): number {
  if (n < 10) return Math.ceil(n / 10);
  const s = n + "";
  // 10 ** n的位数
  const m = 10 ** (s.length - 1);
  // 获取n的高位数
  const hi = +s[0];
  // 高位数为1时，获取高位1出现的数量
  const one = hi === 1 ? (n % m) + 1 : m;
  // (1)xxx 高位的1 + (hi)xxx xxx里1 + [0, hi)xxx xxx里的1
  return one + countDigitOne(n % m) + hi * countDigitOne(m - 1);
}
