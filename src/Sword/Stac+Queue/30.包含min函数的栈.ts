/**
 * 定义栈的数据结构，请在该类型中实现一个能够得到栈的最小元素的 min 函数在该栈中，调用 min、push 及 pop 的时间复杂度都是 O(1)。
 * MinStack minStack = new MinStack();
 * minStack.push(-2);
 * minStack.push(0);
 * minStack.push(-3);
 * minStack.min();   --> 返回 -3.
 * minStack.pop();
 * minStack.top();      --> 返回 0.
 * minStack.min();   --> 返回 -2.
 */

class MinStack {
  private stack: number[] = [];
  private stack_min: number[] = [];
  constructor() {}

  push(x: number): void {
    if (
      !this.stack_min.length ||
      this.stack_min[this.stack_min.length - 1] >= x
    ) {
      this.stack_min.push(x);
    }
    this.stack.push(x);
  }

  pop(): void {
    const min = this.stack.pop();
    if (min === this.stack_min[this.stack_min.length - 1]) {
      this.stack_min.pop();
    }
  }

  top(): number {
    return this.stack[this.stack.length - 1];
  }

  min(): number {
    return this.stack_min[this.stack_min.length - 1];
  }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.min()
 */
