/**
 * 给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。答案可以按 任意顺序 返回。

 * 给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。

 * 输入：digits = "23"
 * 输出：["ad","ae","af","bd","be","bf","cd","ce","cf"]
 */

export function letterCombinations(digits: string): string[] {
  // 构建映射
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  const alphabetMap = new Map<number, string[]>();
  for (let i = 2; i <= 9; i++) {
    if (i === 7 || i === 9) {
      alphabetMap.set(i, alphabet.splice(0, 4));
    } else {
      alphabetMap.set(i, alphabet.splice(0, 3));
    }
  }

  const matrix: string[][] = [];

  for (let i = 0; i < digits.length; i++) {
    const letter = +digits[i];
    matrix.push(alphabetMap.get(letter)!);
  }

  const result: string[] = [];

  if (digits.length === 0) return result;

  const backTracking = (strArr: string[], i: number) => {
    if (strArr.length === digits.length) {
      result.push(strArr.join(""));
      return;
    }

    for (let k = 0; k < matrix[i].length; k++) {
      strArr.push(matrix[i][k]);
      backTracking(strArr, i + 1);
      strArr.pop();
    }
  };

  backTracking([], 0);

  return result;
}
