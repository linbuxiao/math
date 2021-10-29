// 最初记事本上只有一个字符 'A' 。你每次可以对这个记事本进行两种操作：

// Copy All（复制全部）：复制这个记事本中的所有字符（不允许仅复制部分字符）。
// Paste（粘贴）：粘贴 上一次 复制的字符。
// 给你一个数字 n ，你需要使用最少的操作次数，在记事本上输出 恰好 n 个 'A' 。返回能够打印出 n 个 'A' 的最少操作次数。

// 传递上一步的操作，如果是复制，则传递0
// 粘贴则1

export function minSteps(n: number): number {
  if (n === 1) return 0;
  let k = 1;
  // ['当前字符串', '剪贴板内容', '上一步操作']
  let queue: number[][] = [[1, 1]];
  let flag = false;
  while (queue.length && !flag) {
    let tmp = [];
    for (const item of queue) {
      const [num, copy] = item;
      if (num === n) {
        flag = true;
        break;
      }
      const nextNum = num + copy;
      if (num === copy) {
        if (nextNum <= 1000) {
          tmp.push([nextNum, copy]);
        }
      } else {
        tmp.push([num, num]);
        if (nextNum <= 1000) {
          tmp.push([nextNum, copy]);
        }
      }
    }
    if (!flag) k++;
    queue = [...tmp];
  }

  return k;
}
