// 给定正整数 N ，我们按任何顺序（包括原始顺序）将数字重新排序，注意其前导数字不能为零。

// 如果我们可以通过上述方式得到 2 的幂，返回 true；否则，返回 false。

export function reorderedPowerOf2(n: number): boolean {
  // 由于我们可以按任何顺序将数字重新排序，因此对于两个不同的整数 a 和 b，如果其十进制表示的字符数组，从小到大排序后的结果是相同的，那么若 a 能够重排得到 2 的幂，b 也可以；若 a 不能重排得到 2 的幂，那么 b 也不能。
  // 简单来说，排序是为了判断是否逐位相等存在。
  const set1 = new Set<string>();
  for (let i = 0; i <= 30; i++) {
    set1.add(String(Math.pow(2, i)).split("").sort().join(""));
  }

  return set1.has(n.toString().split("").sort().join(""));
}
