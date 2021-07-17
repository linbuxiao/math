/**
 * 请定义一个队列并实现函数 max_value 得到队列里的最大值，要求函数max_value、push_back 和 pop_front 的均摊时间复杂度都是O(1)。
 * 若队列为空，pop_front 和 max_value 需要返回 -1
 * ["MaxQueue","push_back","push_back","max_value","pop_front","max_value"]
 * [[],[1],[2],[],[],[]]
 *
 * [null,null,null,2,1,2]
 */

class MaxQueue {
  private max: number[] = [];
  private queue: number[] = [];
  constructor() {}

  max_value(): number {
    return this.queue.length ? this.max[0] : -1;
  }

  push_back(value: number): void {
    this.queue.push(value);
    while (this.max.length && this.max[this.max.length - 1] < value) {
      this.max.pop();
    }

    this.max.push(value);
  }

  pop_front(): number {
    if (this.queue.length) {
      let shift = <number>this.queue.shift();
      if (this.max[0] === shift) {
        this.max.shift();
      }
      return shift;
    }
    return -1;
  }
}

/**
 * Your MaxQueue object will be instantiated and called as such:
 * var obj = new MaxQueue()
 * var param_1 = obj.max_value()
 * obj.push_back(value)
 * var param_3 = obj.pop_front()
 */
