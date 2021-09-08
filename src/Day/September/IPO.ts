// 假设 力扣（LeetCode）即将开始 IPO 。为了以更高的价格将股票卖给风险投资公司，力扣 希望在 IPO 之前开展一些项目以增加其资本。 由于资源有限，它只能在 IPO 之前完成最多 k 个不同的项目。帮助 力扣 设计完成最多 k 个不同项目后得到最大总资本的方式。

// 给你 n 个项目。对于每个项目 i ，它都有一个纯利润 profits[i] ，和启动该项目需要的最小资本 capital[i] 。

// 最初，你的资本为 w 。当你完成一个项目时，你将获得纯利润，且利润将被添加到你的总资本中。

// 总而言之，从给定项目中选择 最多 k 个不同项目的列表，以 最大化最终资本 ，并输出最终可获得的最多资本。

// 答案保证在 32 位有符号整数范围内。

// 输入：k = 2, w = 0, profits = [1,2,3], capital = [0,1,1]
// 输出：4
// 解释：
// 由于你的初始资本为 0，你仅可以从 0 号项目开始。
// 在完成后，你将获得 1 的利润，你的总资本将变为 1。
// 此时你可以选择开始 1 号或 2 号项目。
// 由于你最多可以选择两个项目，所以你需要完成 2 号项目以获得最大的资本。
// 因此，输出最后最大化的资本，为 0 + 1 + 3 = 4。

const defaultCmp = (x: number, y: number) => x > y;

const swap = (arr: number[], i: number, j: number) => {
  [arr[i], arr[j]] = [arr[j], arr[i]];
};

class Heap {
  public container: number[] = [];
  private cmp = defaultCmp;

  insert(num: number) {
    const { container, cmp } = this;
    container.push(num);
    let index = this.size() - 1;
    while (index) {
      let parent = (index - 1) >> 1;
      if (!cmp(container[index], container[parent])) return;
      swap(container, index, parent);
      index = parent;
    }
  }

  pop() {
    const { container, cmp } = this;
    if (!this.size()) return null;
    swap(container, 0, this.size() - 1);
    const res = container.pop();
    let index = 0;
    let exchange = index * 2 + 1;
    const length = this.size();
    while (exchange < length) {
      let right = index * 2 + 2;
      if (right < length && cmp(container[right], container[exchange]))
        exchange = right;
      if (!cmp(container[exchange], container[index])) break;
      swap(container, exchange, index);
      index = exchange;
      exchange = index * 2 + 1;
    }

    return res;
  }

  size() {
    return this.container.length;
  }
}

export function findMaximizedCapital(
  k: number,
  w: number,
  profits: number[],
  capital: number[]
): number {
  const len = profits.length;
  const arr = new Array(len);
  for (let i = 0; i < len; i++) {
    arr[i] = [capital[i], profits[i]];
  }

  arr.sort((a, b) => a[0] - b[0]);

  const maxHeap = new Heap();

  let cur = 0;

  for (let i = 0; i < k; i++) {
    while (cur < len && arr[cur][0] <= w) {
      maxHeap.insert(arr[cur++][1]);
    }

    if (maxHeap.size()) {
      w += maxHeap.pop()!;
    } else {
      break;
    }
  }

  return w;
}
