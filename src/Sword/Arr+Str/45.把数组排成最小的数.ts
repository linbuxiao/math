/**
 * 输入一个非负整数数组，把数组里所有数字拼接起来排成一个数，打印能拼接出的所有数字中最小的一个。
 * 输入: [10,2]
 * 输出: "102"
 */

export function minNumber(nums: (number | string)[]): string {
  // nums = nums.map(item => item.toString()).sort((a,b)=> +(a+b) - +(b+a))

  // return nums.join("")
  return nums.sort((a, b) => +("" + a + b) - +("" + b + a)).join("");
}
