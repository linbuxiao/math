export function isPowerOfThree(n: number): boolean {
  const str = n.toString(3);
  if (str[0] !== "1") return false;
  for (let i = 1; i < str.length; i++) {
    if (str[i] !== "0") return false;
  }

  return true;
}
