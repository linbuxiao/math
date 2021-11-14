// 实现一个 MapSum 类，支持两个方法，insert 和 sum：

// MapSum() 初始化 MapSum 对象
// void insert(String key, int val) 插入 key-val 键值对，字符串表示键 key ，整数表示值 val 。如果键 key 已经存在，那么原来的键值对将被替代成新的键值对。
// int sum(string prefix) 返回所有以该前缀 prefix 开头的键 key 的值的总和。

export class MapSum {
  map: Map<string, number> = new Map();

  insert(key: string, val: number): void {
    this.map.set(key, val);
  }

  sum(prefix: string): number {
    let result = 0;
    for (const [key, value] of this.map.entries()) {
      if (key.startsWith(prefix)) {
        result += value;
      }
    }

    console.log(result);

    return result;
  }
}

/**
 * Your MapSum object will be instantiated and called as such:
 * var obj = new MapSum()
 * obj.insert(key,val)
 * var param_2 = obj.sum(prefix)
 */
