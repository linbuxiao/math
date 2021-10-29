// 给你一个有 n 个节点的 有向无环图（DAG），请你找出所有从节点 0 到节点 n-1 的路径并输出（不要求按特定顺序）

// 二维数组的第 i 个数组中的单元都表示有向图中 i 号节点所能到达的下一些节点，空就是没有下一个结点了。

// 译者注：有向图是有方向的，即规定了 a→b 你就不能从 b→a 。

export function allPathsSourceTarget(graph: number[][]): number[][] {
  const map = new Map<number, number[]>();

  for (let i = 0; i < graph.length; i++) {
    map.set(i, []);
  }

  for (let row = 0; row < graph.length; row++) {
    graph[row].forEach((number) => {
      const arr = [...map.get(number)!];
      arr.push(row);
      map.set(number, arr);
    });
  }

  let queue = [[graph.length - 1]];
  const res: number[][] = [];
  const visited = new Set<string>();

  while (queue.length) {
    let tmp = [];
    for (let arr of queue) {
      const last = arr[arr.length - 1];

      const bank = map.get(last)!;

      for (let i = 0; i < bank.length; i++) {
        const newArr = [...arr];
        newArr.push(bank[i]);
        const str = newArr.join("");
        if (bank[i] === 0 && !visited.has(str)) {
          visited.add(str);
          res.push(newArr.reverse());
        } else {
          tmp.push(newArr);
        }
      }
    }

    queue = [...tmp];
  }

  return res;
}
