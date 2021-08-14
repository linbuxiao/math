// 给你一份 n 位朋友的亲近程度列表，其中 n 总是 偶数 。

// 对每位朋友 i，preferences[i] 包含一份 按亲近程度从高到低排列 的朋友列表。换句话说，排在列表前面的朋友与 i 的亲近程度比排在列表后面的朋友更高。每个列表中的朋友均以 0 到 n-1 之间的整数表示。

// 所有的朋友被分成几对，配对情况以列表 pairs 给出，其中 pairs[i] = [xi, yi] 表示 xi 与 yi 配对，且 yi 与 xi 配对。

// 但是，这样的配对情况可能会是其中部分朋友感到不开心。在 x 与 y 配对且 u 与 v 配对的情况下，如果同时满足下述两个条件，x 就会不开心：

// x 与 u 的亲近程度胜过 x 与 y，且
// u 与 x 的亲近程度胜过 u 与 v
// 返回 不开心的朋友的数目 。

export function unhappyFriends(
  n: number,
  preferences: number[][],
  pairs: number[][]
): number {
  const map = new Map<number, number>();

  for (let [X, Y] of pairs) {
    map.set(X, Y);
    map.set(Y, X);
  }

  const judgeMatching = (x: number, y: number, u: number, v: number) => {
    // 如果 u 在 x 的位置 大于 y 在 x 的位置

    // 并且 x 在 u 的位置 大于 v 在 u 的位置

    const indexes = [
      preferences[x].indexOf(u),
      preferences[x].indexOf(y),
      preferences[u].indexOf(x),
      preferences[u].indexOf(v),
    ];

    if (indexes[0] < indexes[1] && indexes[2] < indexes[3]) return true;
    return false;
  };

  const used = new Set<number>();
  pairs.forEach((item) => {
    for (let k = 0; k < 2; k++) {
      let v = item[k]; // 当前人
      let p: number;
      if (k === 0) {
        p = item[1];
      } else {
        p = item[0];
      }
      // p 为当前配对人
      for (let i = 0; i < n; i++) {
        if (i === v || i === p) continue;
        // 找到i 的配对人
        const o = map.get(i)!;
        if (!used.has(v)) {
          if (judgeMatching(v, p, i, o)) {
            used.add(v);
          }
        }
      }
    }
  });

  return used.size;
}
