/**
 * 不使用任何内建的哈希表库设计一个哈希映射（HashMap）。
 * 实现 MyHashMap 类：
 * MyHashMap() 用空映射初始化对象
 * void put(int key, int value) 向 HashMap 插入一个键值对 (key, value) 。如果 key 已经存在于映射中，则更新其对应的值 value 。
 * int get(int key) 返回特定的 key 所映射的 value ；如果映射中不包含 key 的映射，返回 -1 。
 * void remove(key) 如果映射中存在 key 的映射，则移除 key 和它所对应的 value 。
 */

class MyHashMap {
  items: { [key in number]: number } = {};
  constructor() {}

  put(key: number, value: number): void {
    this.items[key] = value;
  }

  get(key: number): number {
    let val = this.items[key];
    if (val || val === 0) {
      return this.items[key];
    }
    return -1;
  }

  remove(key: number): void {
    try {
      delete this.items[key];
    } catch (_) {
      // do nothing
    }
  }
}

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */
