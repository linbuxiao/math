/**
 * 你有一套活字字模 tiles，其中每个字模上都刻有一个字母 tiles[i]。返回你可以印出的非空字母序列的数目。
 * 注意：本题中，每个活字字模只能使用一次。
 */


// 感觉就是一个全排列？

export function numTilePossibilities(tiles: string): number {
  const arr = tiles.split("").sort()
  const path: string[] = []
  let num = 0

  const dfs = (used: boolean[]) => {
    if(path.length) {
      num++
    }
    
    
    for(let i = 0; i<arr.length; i++) {
      if(used[i]) continue
      if(arr[i] === arr[i - 1] && !used[i - 1]) continue

      used[i] = true
      path.push(arr[i])
      dfs(used)
      path.pop()
      used[i] = false
    }
  }

  dfs(new Array(arr.length).fill(false))

  return num
};