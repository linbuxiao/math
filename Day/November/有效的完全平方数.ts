export function isPerfectSquare(num: number): boolean {
  for (let i = 1; i <= Math.pow(2, 31) - 1; i++) {
    const pow = Math.pow(i, 2);
    if (pow === num) return true;
    if (pow > num) return false;
  }

  return false;
}
