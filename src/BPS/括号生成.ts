// 数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。

// 输入：n = 3
// 输出：["((()))","(()())","(())()","()(())","()()()"]

export function generateParenthesis(n: number): string[] {
  let queue = ["("];
  let res = [];
  let s = 1;
  while (queue.length) {
    const tmp: string[] = [];
    if (s / 2 > n) break;
    for (const sets of queue) {
      let left = 0;
      let right = 0;
      for (let set of sets) {
        console.log(set);

        if (set === "(") left++;
        if (set === ")") right++;
      }

      if (left === right && left === n) {
        res.push(sets);
        continue;
      }

      if (left < right) continue;

      tmp.push(sets + "(");
      tmp.push(sets + ")");
    }
    s++;
    queue = [...tmp];
  }

  return res;
}
