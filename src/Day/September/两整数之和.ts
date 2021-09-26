// 给你两个整数 a 和 b ，不使用 运算符 + 和 - ​​​​​​​，计算并返回两整数之和。

export function getSum(a: number, b: number): number {
  if (!b) return a;
  const sum = a ^ b;
  const carry = (a & b) << 1;

  return getSum(sum, carry);
}
