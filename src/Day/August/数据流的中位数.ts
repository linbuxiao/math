// 中位数是有序列表中间的数。如果列表长度是偶数，中位数则是中间两个数的平均值。

// 例如，

// [2,3,4] 的中位数是 3

// [2,3] 的中位数是 (2 + 3) / 2 = 2.5

// 设计一个支持以下两种操作的数据结构：

// void addNum(int num) - 从数据流中添加一个整数到数据结构中。
// double findMedian() - 返回目前所有元素的中位数。
// 示例：

// addNum(1)
// addNum(2)
// findMedian() -> 1.5
// addNum(3)
// findMedian() -> 2

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/find-median-from-data-stream
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

class MedianFinder {
  list: number[] = [];
  constructor() {}

  addNum(num: number): void {
    if (this.list.length === 0) {
      this.list.push(num);
      return;
    }

    let left = 0;
    let right = this.list.length - 1;
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      if (this.list[mid] === num) {
        this.list.splice(mid + 1, 0, num);
        return;
      } else if (this.list[mid] < num) {
        left = mid + 1;
      } else if (this.list[mid] > num) {
        right = mid - 1;
      }
    }
    this.list.splice(right + 1, 0, num);
  }

  findMedian(): number {
    const i = this.list.length / 2;
    if (this.list.length % 2) {
      // 奇数，中位数索引为 /2
      return this.list[i];
    } else {
      return (this.list[i] + this.list[i - 1]) / 2;
    }
  }
}

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */
