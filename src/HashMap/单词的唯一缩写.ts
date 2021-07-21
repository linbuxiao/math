/**
 * 单词的 缩写 需要遵循 <起始字母><中间字母数><结尾字母> 这样的格式。如果单词只有两个字符，那么它就是它自身的 缩写 。
 * dog --> d1g 因为第一个字母 'd' 和最后一个字母 'g' 之间有 1 个字母
 * internationalization --> i18n 因为第一个字母 'i' 和最后一个字母 'n' 之间有 18 个字母
 * it --> it 单词只有两个字符，它就是它自身的 缩写
 *
 * 实现 ValidWordAbbr 类：
 * ValidWordAbbr(String[] dictionary) 使用单词字典 dictionary 初始化对象
 * boolean isUnique(string word) 如果满足下述任意一个条件，返回 true ；否则，返回 false ：
 * - 字典 dictionary 中没有任何其他单词的 缩写 与该单词 word 的 缩写 相同。
 * - 字典 dictionary 中的所有 缩写 与该单词 word 的 缩写 相同的单词都与 word 相同 。
 */

class ValidWordAbbr {
  private words: string[];
  private items = new Map<string, Set<string>>();
  constructor(dictionary: string[]) {
    this.words = dictionary;
    dictionary.forEach((value) => {
      const abbreviation = this.returnAbbreviation(value);
      if (this.items.has(abbreviation)) {
        const val = this.items.get(abbreviation)!;
        this.items.set(abbreviation, val.add(value));
      } else {
        const set = new Set([value]);
        this.items.set(abbreviation, set);
      }
    });
  }

  isUnique(word: string): boolean {
    const abbreviation = this.returnAbbreviation(word);
    if (this.items.has(abbreviation)) {
      const val = this.items.get(abbreviation)!;
      if (val.size === 1 && val.has(word)) return true;
    }
    if (!this.items.has(abbreviation)) return true;
    return false;
  }

  returnAbbreviation(word: string): string {
    const len = word.length === 2 ? "" : `${word.length - 2}`;
    return `${word[0]}${len}${word[word.length - 1]}`;
  }
}
