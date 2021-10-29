// 请你设计一个数据结构，支持 添加新单词 和 查找字符串是否与任何先前添加的字符串匹配 。

// 实现词典类 WordDictionary ：

// WordDictionary() 初始化词典对象
// void addWord(word) 将 word 添加到数据结构中，之后可以对它进行匹配
// bool search(word) 如果数据结构中存在字符串与 word 匹配，则返回 true ；否则，返回  false 。word 中可能包含一些 '.' ，每个 . 都可以表示任何一个字母。

class WordDictionary {
  map = new Map<number, Set<string>>();

  addWord(word: string): void {
    const len = word.length;
    if (this.map.has(len)) {
      this.map.get(len)!.add(word);
    } else {
      this.map.set(len, new Set([word]));
    }
  }

  search(word: string): boolean {
    const len = word.length;
    if (!this.map.has(len)) return false;
    const regx = new RegExp(word);
    return Array.from(this.map.get(len)!).some((value) => regx.test(value));
  }
}
