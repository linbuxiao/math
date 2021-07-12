/**
 * 希尔排序
 */

/**
 * 练习
 */

// 1. 给出 N 名运动员的成绩，找出他们的相对名次并授予前三名对应的奖牌。前三名运动员将会被分别授予 “金牌”，“银牌” 和“ 铜牌”（"Gold Medal", "Silver Medal", "Bronze Medal"）。
// 输入: [5, 4, 3, 2, 1]
// 输出: ["Gold Medal", "Silver Medal", "Bronze Medal", "4", "5"]
// 解释: 前三名运动员的成绩为前三高的，因此将会分别被授予 “金牌”，“银牌”和“铜牌” ("Gold Medal", "Silver Medal" and "Bronze Medal").
// 余下的两名运动员，我们只需要通过他们的成绩计算将其相对名次即可。
export function findRelativeRanks(_nums: number[] | string[]) {
  let nums = [..._nums]
  for(let x = 1; x < nums.length; x++) {
    let currentNumber = nums[x]
    let y = x
    while(y > 0 && nums[y - 1] < currentNumber ) {
      nums[y] = nums[y-1]
      y--
    }
    nums[y] = currentNumber
  }
  for(let z = 0; z < nums.length; z++) {

  }

  for(let z = 0; z<_nums.length; z++) {
    switch(_nums[z]) {
      case nums[0]: {
        _nums[z] = "Gold Medal"
        break
      }
      case nums[1]: {
        _nums[z] = "Silver Medal"
        break
      }
      case nums[2]: {
        _nums[z] = "Bronze Medal"
        break
      }
      default: {
        const index = nums.findIndex(item => _nums[z] === item)
        _nums[z] = (index + 1).toString()
      }
    }
  }

  return _nums
}