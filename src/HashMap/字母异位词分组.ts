/**
 * 给定一个字符串数组，将字母异位词组合在一起。可以按任意顺序返回结果列表。
 * 字母异位词指字母相同，但排列不同的字符串。
 *
 * 输入: strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
 * 输出: [["bat"],["nat","tan"],["ate","eat","tea"]]
 */

export function groupAnagrams(strs: string[]): string[][] {
  const map = new Map<string, string[]>()

  for(let i = 0; i < strs.length; i++) {
    const constant = strs[i].split("").sort().join("")
    if(map.has(constant)) {
      // 可以直接取值push
      // map.set(constant, map.get(constant)!.concat([strs[i]]))
      map.get(constant)!.push(strs[i])
    } else {
      map.set(constant, [strs[i]])
    }
  }

  // 这里可以直接使用map.values()转化
  // let res: string[][] = []
  // map.forEach((arr) => {
  //   res.push(arr)
  // })
  //
  // return res
  return Array.from(map.values())
};
