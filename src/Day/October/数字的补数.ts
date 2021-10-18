// 给你一个 正 整数 num ，输出它的补数。补数是对该数的二进制表示取反。

export function findComplement(num: number): number {
  return num ^ ((1 << num.toString(2).length) - 1);
}
