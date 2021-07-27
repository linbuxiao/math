/**
 * 给定一个字符串S，通过将字符串S中的每个字母转变大小写，我们可以获得一个新的字符串。返回所有可能得到的字符串集合。
 */

// 妈的 写成全排列了
export function letterCasePermutation_all(s: string): string[] {
  const arr = s.split("").concat(s.match(/[a-z]/g) ? s.match(/[a-z]/g)!.map(item => item.toUpperCase()): [])
  
  const result: string[] = []

  const backTracking = (str: string) => {
    if(str.length === s.length) {
      result.push(str)
      return
    }

    for(let i = 0; i<arr.length; i++) {
      const letter = arr[i]
      if(str.indexOf(letter.toLowerCase()) === -1 && str.indexOf(letter.toUpperCase()) === -1) {
        backTracking(str + letter)
      }
    }
  }

  backTracking("")
  
  return result
};

export function letterCasePermutation(s: string): string[] {

  const result: string[] = [s]

  const backTracking = (str: string[], i: number) => {
    if(i === str.length) {
      if(result.indexOf(str.join("")) === -1) {
        result.push(str.join(""))
      }
      return
    }

      const letter = str[i]
    
      if(letter && /[a-zA-Z]/.test(letter)) {
        const val = str[i]
        str[i] = str[i].toUpperCase()
        backTracking(str, i+1)
        str[i] = val
        str[i] = str[i].toLowerCase()
        backTracking(str, i+1)
        str[i] = val
      } else {
        backTracking(str, i+1)
      }
  }

  backTracking(s.split(""), 0)
  return result
};