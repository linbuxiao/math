/**
 * 数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。
 * 输入：n = 3
 * 输出：["((()))","(()())","(())()","()(())","()()()"]
 */

// 右括号数始终小于左括号数
export function generateParenthesis(n: number): string[] {
  const arr: string[] = [];

  const backTracking = (
    str: string,
    leftRemain: number,
    rightRemain: number,
  ) => {
    if (str.length === 2 * n) {
      arr.push(str);

      return;
    }
    if (leftRemain > 0) {
      backTracking(str + "(", leftRemain - 1, rightRemain);
    }

    if (rightRemain > leftRemain) {
      backTracking(str + ")", leftRemain, rightRemain - 1);
    }
  };

  backTracking("", n, n);

  return arr;
}
