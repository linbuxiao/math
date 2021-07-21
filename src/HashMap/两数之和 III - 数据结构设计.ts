/**
 * 设计一个接收整数流的数据结构，该数据结构支持检查是否存在两数之和等于特定值。
 * 实现 TwoSum 类：
 * TwoSum() 使用空数组初始化 TwoSum 对象
 * void add(int number) 向数据结构添加一个数 number
 * boolean find(int value) 寻找数据结构中是否存在一对整数，使得两数之和与给定的值相等。如果存在，返回 true ；否则，返回 false 。
 *
 * ["TwoSum", "add", "add", "add", "find", "find"]
 * [[], [1], [3], [5], [4], [7]]
 *
 * [null, null, null, null, true, false]
 */

export class TwoSum_1 {
  items: number[] = [];
  constructor() {}

  add(number: number): void {
    this.items.push(number);
  }

  find(value: number): boolean {
    if (!this.items.length && this.items.length === 1) return false;

    let flag = false;
    for (let i = 0; i < this.items.length; i++) {
      const target = value - this.items[i];
      // 查找剩余的数组中有没有目标值
      let index = 0;
      while (index < this.items.length) {
        if (index === i) {
          index++;
          continue;
        }
        if (this.items[index] === target) {
          flag = true;
          break;
        }
        index++;
      }
    }

    return flag;
  }
}

/**
 * Your TwoSum object will be instantiated and called as such:
 * var obj = new TwoSum()
 * obj.add(number)
 * var param_2 = obj.find(value)
 */

class TwoSum {
  items: number[] = [];
  constructor() {}

  add(number: number): void {
    this.items.push(number);
    this.items.sort((a, b) => a - b);
  }

  find(value: number): boolean {
    if (!this.items.length || this.items.length === 1) return false;

    let left = 0;
    let right = this.items.length - 1;
    let flag = false;
    while (left < right) {
      if (this.items[left] + this.items[right] === value) {
        flag = true;
        break;
      }
      if (this.items[left] + this.items[right] > value) right--;
      if (left < right && this.items[left] + this.items[right] < value) left++;
    }

    return flag;
  }
}
