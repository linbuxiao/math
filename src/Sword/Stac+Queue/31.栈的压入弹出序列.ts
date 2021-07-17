/**
 * 输入两个整数序列，第一个序列表示栈的压入顺序，请判断第二个序列是否为该栈的弹出顺序。假设压入栈的所有数字均不相等。例如，序列 {1,2,3,4,5} 是某栈的压栈序列，序列 {4,5,3,2,1} 是该压栈序列对应的一个弹出序列，但 {4,3,5,1,2} 就不可能是该压栈序列的弹出序列。
 * pushed = [1,2,3,4,5], popped = [4,5,3,2,1]
 * true
 * push(1), push(2), push(3), push(4), pop() -> 4,
 * push(5), pop() -> 5, pop() -> 3, pop() -> 2, pop() -> 1
 */

export function validateStackSequences(
  pushed: number[],
  popped: number[]
): boolean {
  let stack: number[] = [];
  let index = 0;
  let pop = () => stack[stack.length - 1];
  for (let x = 0, len = pushed.length; x < len; x++) {
    stack.push(pushed[x]);
    while (stack.length !== 0 && pop() === popped[index]) {
      stack.pop();
      index++;
    }
  }

  return !stack.length;
}
