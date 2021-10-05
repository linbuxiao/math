class MyIterator {
  state: number[];
  p = 0;
  constructor(nums: number[]) {
    this.state = nums;
  }
  hasNext(): boolean {
    return Boolean(this.state[this.p + 1]);
  }

  next(): number {
    return this.state[this.p++];
  }
}

class PeekingIterator {
  iterator: MyIterator;
  nextElement: number | null;
  constructor(iterator: MyIterator) {
    this.iterator = iterator;
    this.nextElement = this.iterator.next();
  }

  peek(): number | null {
    return this.nextElement;
  }

  next(): number | null {
    const ret = this.nextElement;
    this.nextElement = this.iterator.hasNext() ? this.iterator.next() : null;
    return ret;
  }

  hasNext(): boolean {
    return this.nextElement !== null;
  }
}
