/**
 * 给你一个字符串 s ，请你拆分该字符串，并返回拆分后唯一子字符串的最大数目。

 * 字符串 s 拆分后可以得到若干 非空子字符串 ，这些子字符串连接后应当能够还原为原字符串。但是拆分出来的每个子字符串都必须是 唯一
 */

export function maxUniqueSplit(s: string): number {
  if (s.length === 1) return 1;
  const path = new Set<string>();
  let max = 0

  const dfs = (str: string) => {
    if (str.length === 0) {  
      max = path.size > max ? path.size : max    
      return;
    }

    for (let i = 1; i < str.length + 1; i++) {      
      let cur = str.substring(0, i)
      if (path.has(cur)) {
        continue;
      } else {
        path.add(cur);
        dfs(str.substring(i,str.length));
        path.delete(cur);
      }
    }
  };

  dfs(s);
  
  return max
}
