/**
 * 用两个栈实现一个队列。队列的声明如下，请实现它的两个函数 appendTail 和 deleteHead ，分别完成在队列尾部插入整数和在队列头部删除整数的功能。(若队列中没有元素，deleteHead 操作返回 -1 )
 * ["CQueue","appendTail","deleteHead","deleteHead"]
 * [[],[3],[],[]]
 *
 * [null,null,3,-1]
 */

class CQueue {
  private stack_1: number[] = [];
  private stack_2: number[] = [];

  appendTail(value: number): void {
    this.stack_1.push(value);
  }

  deleteHead(): number {
    if (this.stack_2.length) {
      return <number> this.stack_2.pop();
    }

    while (this.stack_1.length) {
      this.stack_2.push(<number> this.stack_1.pop());
    }

    return this.stack_2.length ? <number> this.stack_2.pop() : -1;
  }
}

/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */
