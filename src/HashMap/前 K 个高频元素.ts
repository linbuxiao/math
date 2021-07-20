/**
 * 给你一个整数数组 nums 和一个整数 k ，请你返回其中出现频率前 k 高的元素。你可以按 任意顺序 返回答案。
 *
 * 输入: nums = [1,1,1,2,2,3], k = 2
 * 输出: [1,2]
 */


// a. 遍历数组，建立Map(number, 出现次数)
// b. 遍历Map，按出现顺序的次数，降序排列数组 => Map不支持排列 => map无顺序。
// c. 当数组 length === k, 返回数组
// d. 序列化 ： num|index -> times
export function topKFrequent_1(nums: number[], k: number): number[] {
  // 一定会有两次遍历
  // 1. 统计每个出现的次数
  // 2. 按照次数排入结果数组

  const map = new Map<number, string>()
  
  for(let i = 0; i<nums.length; i++) {
    if(map.has(nums[i])) {
      let val = map.get(nums[i])!.split("|")
      let newVal = `${val[0]}|${+val[1]+ 1} `
      map.set(nums[i], newVal)
    } else {
      map.set(nums[i], `${nums[i]}|1`)
    }
  }

  let res = Array.from(map.values())
  res.sort((a,b) => +(b.split("|")[1]) - +(a.split("|")[1]))
  return res.splice(0,k).map(item => {
    return +item.split("|")[0]
  })
};

// 数组法，避免split带来的消耗
export function topKFrequent(nums: number[], k: number): number[] {
  const map = new Map<number, number[]>()

  for(let i = 0; i<nums.length; i++) {
    if(map.has(nums[i])) {
      let val = map.get(nums[i])!
      map.set(nums[i], [val[0], val[1] + 1])
    } else {
      map.set(nums[i], [nums[i], 1])
    }
  }

  return Array.from(map.values()).sort((a,b) => b[1] - a[1]).splice(0,k).map(item => {
    return item[0]
  })
};