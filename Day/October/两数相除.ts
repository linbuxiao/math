// 给定两个整数，被除数 dividend 和除数 divisor。将两数相除，要求不使用乘法、除法和 mod 运算符。

// 返回被除数 dividend 除以除数 divisor 得到的商。

// 整数除法的结果应当截去（truncate）其小数部分，例如：truncate(8.345) = 8 以及 truncate(-2.7335) = -2

const util = {
  negtive: function (i: number) {
    // 取反
    // ~为连符号位一同取反
    // return rise.add(~i, 1)
    if (i === 0) return 0;
    return i < 0 ? Math.abs(i) : i * -1;
  },
  getSign: function (i: number) {
    // 判断正负
    // return (i >> 31) > 0
    return i > 0;
  },
  bepositive: function (i: number) {
    // 将一个数变为正数，如果本来就是正，则不变；如果是负，则变为相反数。注意对于-2147483648，求负会溢出。
    if (!util.getSign(i)) return util.negtive(i);
    return i;
  },
};

const rise = {
  add: function (a: number, b: number): number {
    // 位的异或运算跟求'和'的结果一致：
    // 异或 1^1=0 1^0=1 0^0=0
    // 求和 1+1=0 1+0=1 0+0=0
    // 位的与运算跟求'进位‘的结果一致：
    // 位与 1&1=1 1&0=0 0&0=0
    // 进位 1+1=1 1+0=0 0+0=0
    if (b === 0) return a;
    let c = a ^ b;
    let d = (a & b) << 1;

    return rise.add(c, d);
  },
  sub: function (a: number, b: number): number {
    // 求一个数的负的操作是将其连符号位一起取反然后加1。
    return rise.add(a, util.negtive(b));
  },
  divide: function (a: number, b: number): number {
    const [INF_MIN, INF_MAX] = [-2147483648, 2147483648];
    if (a === INF_MIN) {
      if (b === 1) return INF_MIN;
      if (b === -1) return INF_MAX;
    }
    if (b === INF_MIN) return a === INF_MIN ? 1 : 0;
    if (b === 0) return 0;
    // 除法是很多次的减法
    // 减法是求负后的相加
    // 相加是和与进位
    // 先解决加法
    const { getSign, bepositive, negtive } = util;
    const [fa, fb] = [getSign(a), getSign(b)];
    const flag = (!fa && !fb) || (fa && fb);
    let [x, y] = [bepositive(a), bepositive(b)];

    let ans = 0;
    let i = 31;
    while (i >= 0) {
      if (x >> i >= y) {
        ans = rise.add(ans, 1 << i);
        x = rise.sub(x, y << i);
      }

      i = rise.sub(i, 1);
    }
    return flag ? ans : negtive(ans);
  },
};

const [MAX, MIN] = [2147483647, -2147483648];

export function divide(dividend: number, divisor: number): number {
  if (dividend == MIN && divisor == -1) return MAX;
  let a = Math.abs(dividend),
    b = Math.abs(divisor),
    res = 0;
  for (let i = 31; i >= 0; i--) {
    if (a >>> i >= b) {
      // 1<<31 = -2147483648，需特殊处理
      if (i == 31) {
        a -= MAX;
        a -= 1;
        res -= MIN;
      } else {
        a -= b << i;
        res += 1 << i;
      }
    }
  }
  return dividend > 0 == divisor > 0 ? res : -res;
}
