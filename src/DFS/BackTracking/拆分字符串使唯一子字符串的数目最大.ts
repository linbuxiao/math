/**
 * 给你一个字符串 s ，请你拆分该字符串，并返回拆分后唯一子字符串的最大数目。

 * 字符串 s 拆分后可以得到若干 非空子字符串 ，这些子字符串连接后应当能够还原为原字符串。但是拆分出来的每个子字符串都必须是 唯一
 */

export function maxUniqueSplit(s: string): number {
  if(s.length === 1) return 1
  const nums: number[] = []
  const path = new Set<string>()

  const dfs = (str: string[]) => {
    if(str.length === 0) {
      console.log(path);
      
      nums.push(path.size)
      return
    }

    for(let i = 0; i<str.length; i++) {
      let cur = ""
      for(let x = 0; x<i; x++ ){
        cur += str.pop()!
      }
      
      if(path.has(cur)) {
        continue
      } else {
        path.add(cur)
        dfs(str)
        path.delete(cur)
      }
      for(let x = 0; x<cur.length; x++) {
        str.push(cur[x])
      }
    }
  }

  dfs(s.split(""))
  
  return Math.max(...nums)
};