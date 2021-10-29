//  给你一个由非负整数 a1, a2, ..., an 组成的数据流输入，请你将到目前为止看到的数字总结为不相交的区间列表。

// 实现 SummaryRanges 类：

// SummaryRanges() 使用一个空数据流初始化对象。
// void addNum(int val) 向数据流中加入整数 val 。
// int[][] getIntervals() 以不相交区间 [starti, endi] 的列表形式返回对数据流中整数的总结。

class SummaryRanges {
  data: number[][] = [];
  constructor() {}

  insert(val: number): void {
    for (let i = 0; i < this.data.length; i++) {
      const [start, end] = this.data[i];
      if (val >= start && val <= end) return; // 如果在区间内则直接返回
      // 如果不在区间内
      // a. 与头相连
      // b. 与尾相连
      // 遍历完所有，都不相连，则自己成为一组
      if (val === start - 1) {
        this.data[i][0] = val;
        return;
      }

      if (val === end + 1) {
        this.data[i][1] = val;
        return;
      }
    }

    this.data.push([val, val]);
  }

  addNum(val: number): void {
    this.insert(val); // 插入
    this.data.sort((a, b) => a[0] - b[0]); // 重排
    const temp = [...this.data];
    for (let i = 0; i < this.data.length - 1; i++) {
      const end = this.data[i][1];
      const nextStart = this.data[i + 1][0];

      if (end + 1 === nextStart) {
        temp.splice(i, 2, [this.data[i][0], this.data[i + 1][1]]);
      }
    }

    this.data = temp;
  }

  getIntervals(): number[][] {
    return this.data;
  }
}

/**
 * Your SummaryRanges object will be instantiated and called as such:
 * var obj = new SummaryRanges()
 * obj.addNum(val)
 * var param_2 = obj.getIntervals()
 */
