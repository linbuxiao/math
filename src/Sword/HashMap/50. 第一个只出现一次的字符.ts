/**
 * 在字符串 s 中找出第一个只出现一次的字符。如果没有，返回一个单空格。 s 只包含小写字母。
 *
 * s = "abaccdeff"
 * 返回 "b"
 */


function firstUniqChar(s: string): string {
  if(!s.length) return ""
  if(s.length === 1) return s
  const map = new Map<string, [number, boolean, string]>()
  for(let i = 0; i<s.length; i++) {
    if(map.has(s[i])) {
      const val = map.get(s[i])!
      if(val[1]) continue
      map.set(s[i],[val[0], true, val[2]])
    } else {
      map.set(s[i], [i, false, s[i]])
    }
  }

  let arr = Array.from(map.values()).filter(val => !val[1])
  if(!arr.length) return ""
  return  arr.sort((a,b)=> a[0]-b[0])[0][2]
};