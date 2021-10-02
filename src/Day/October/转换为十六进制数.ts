export function toHex(num: number): string {
  if (!num) return "0";
  const nums = "0123456789abcdef";
  let ans = "";
  while (num && ans.length < 8) {
    ans = nums[num & 0xf] + ans;
    num = num >> 4;
  }

  return ans;
}
