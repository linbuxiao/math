/**
 * 给定两个字符串 s 和 t，判断它们是否是同构的。
 * 如果 s 中的字符可以按某种映射关系替换得到 t ，那么这两个字符串是同构的。
 * 每个出现的字符都应当映射到另一个字符，同时不改变字符的顺序。不同字符不能映射到同一个字符上，相同字符只能映射到同一个字符上，字符可以映射到自己本身。
 * 输入：s = "egg", t = "add"
 * 输出：true
 *
 * 输入：s = "foo", t = "bar"
 * 输出：false
 *
 * 输入：s = "paper", t = "title"
 * 输出：true
 * 可以假设 s 和 t 长度相同。
 */

// 字符串本身就可以被遍历
export function isIsomorphic(s: string, t: string): boolean {
  let s_t_map = new Map();
  let t_s_map = new Map();
  for (let i = 0; i < s.length; i++) {
    let s_val = s[i];
    let t_val = t[i];
    if (
      (s_t_map.has(s_val) && s_t_map.get(s_val) !== t_val) ||
      (t_s_map.has(t_val) && t_s_map.get(t_val) !== s_val)
    )
      return false;

    s_t_map.set(s_val, t_val);
    t_s_map.set(t_val, s_val);
  }
  return true;
}
