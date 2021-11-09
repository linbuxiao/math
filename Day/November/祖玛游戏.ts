// 你正在参与祖玛游戏的一个变种。

// 在这个祖玛游戏变体中，桌面上有 一排 彩球，每个球的颜色可能是：红色 'R'、黄色 'Y'、蓝色 'B'、绿色 'G' 或白色 'W' 。你的手中也有一些彩球。

// 你的目标是 清空 桌面上所有的球。每一回合：

// 从你手上的彩球中选出 任意一颗 ，然后将其插入桌面上那一排球中：两球之间或这一排球的任一端。
// 接着，如果有出现 三个或者三个以上 且 颜色相同 的球相连的话，就把它们移除掉。
// 如果这种移除操作同样导致出现三个或者三个以上且颜色相同的球相连，则可以继续移除这些球，直到不再满足移除条件。
// 如果桌面上所有球都被移除，则认为你赢得本场游戏。
// 重复这个过程，直到你赢了游戏或者手中没有更多的球。
// 给你一个字符串 board ，表示桌面上最开始的那排球。另给你一个字符串 hand ，表示手里的彩球。请你按上述操作步骤移除掉桌上所有球，计算并返回所需的 最少 球数。如果不能移除桌上所有的球，返回 -1 。

export function findMinStep(board: string, hand: string): number {
  let times = Number.MAX_SAFE_INTEGER;
  const memo = new Set<string>();

  function isRepeat(arr: string[]): boolean {
    if (arr.length < 3) return false;
    for (let i = 2; i < arr.length; i++) {
      if (arr[i] === arr[i - 1] && arr[i - 1] === arr[i - 2]) {
        return true;
      }
    }
    return false;
  }

  function deleteRepeat(tmp: string[]) {
    const result = [...tmp];
    for (let k = 0; k < result.length - 2; k++) {
      let num = 1;
      let d = 1;
      while (k + d < result.length && result[k] === result[k + d]) {
        num++;
        d++;
      }
      if (num >= 3) {
        result.splice(k, num);
        break;
      }
    }
    return result;
  }

  function dfs(x: string, y: string) {
    const serialize = `${x}-${y}`;
    if (memo.has(serialize)) return;
    memo.add(serialize);
    if (!x.length) {
      times = Math.min(times, hand.length - y.length);
      return;
    }
    if (!y.length) return;
    // have board && hand
    // insert
    // every ball can be insert every place
    const arr = x.split("");
    for (let j = 0; j < y.length; j++) {
      for (let i = 0; i <= arr.length; i++) {
        let tmp = [...arr];
        tmp.splice(i, 0, y[j]);
        // when there have some repeat balls
        while (isRepeat(tmp)) {
          tmp = deleteRepeat(tmp);
        }
        const nextHand = y.split("");
        nextHand.splice(j, 1);
        // to next
        dfs(tmp.join(""), nextHand.join(""));
      }
    }

    // arrange
  }

  dfs(board, hand);
  return times === Number.MAX_SAFE_INTEGER ? -1 : times;
}
