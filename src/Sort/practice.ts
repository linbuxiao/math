// 1. 给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有和为 0 且不重复的三元组。
// 输入：nums = [-1,0,1,2,-1,-4]
// 输出：[[-1,-1,2],[-1,0,1]]

export function threeSum(nums: number[]) {
  let arr :number[][]= []
  // a. 输入数目小于3， 返回空数组
  if(nums.length < 3) return []

  // b. 先进行排序
  // 快速排序 手写实现
  // nums.sort()
  handleArray(nums)
  for(let p = 0; p < nums.length; p++) {
    if(nums[p] > 0) return arr
    if(p > 0 && nums[p] === nums[p - 1]) continue

    let l = p+1
    let r = nums.length - 1
    
    while(l < r) {
      let temp = nums[p] + nums[l] + nums[r]
      
      if(temp > 0) {
        r--
      }

      if(temp < 0){
        l++
      }

      if(temp === 0){            
        
                                 
        arr.push([nums[p], nums[l], nums[r]])
        while(l < r && nums[l] === nums[l + 1]) {
          l++;
        }
        // 同上
        while(l < r && nums[r] === nums[r - 1]) {
          r--;
        }
        l++
        r--
      }
    }
    
  }
  
  

  return arr
};

function handleArray(nums: number[], start?: number, end?: number) {
  if(!start && start !== 0) start = 0
  if(!end && end !== 0 ) end = nums.length - 1
  let middle = handleQuickSort(nums, start, end)
  if(!middle && middle !== 0) return null
  handleArray(nums, start, middle - 1)
  handleArray(nums, middle + 1, end)
}

function handleQuickSort(nums: number[], start: number, end: number): number | null {
  if(start >= end) return null
  let p = nums[start]
  let left = start + 1
  let right = end
  while(left < right) {
    while(left < right && nums[left] <= p) left++
    while(left < right && nums[right] >= p) right--
    if(left < right) {
      [nums[left], nums[right]] = [nums[right], nums[left]]
      left++
      right--
    }
  }

  if(left === right && nums[right] > p) right--
  [nums[start], nums[right]] = [nums[right], nums[start]]
  return right
} 

// 2. 给定一个包括 n 个整数的数组 nums 和 一个目标值 target。找出 nums 中的三个整数，使得它们的和与 target 最接近。返回这三个数的和。假定每组输入只存在唯一答案。
// 输入：nums = [-1,2,1,-4], target = 1
// 输出：2

export function threeSumClosest(nums: number[], target: number): number {
  if(nums.length === 3) return nums.reduce((a,b)=> a+b)
  let res: number[] = []
  nums.sort()
  for(let x = 0; x< nums.length;x++) {
    if(x>0 && nums[x] === nums[x-1]) continue
    for(let y = x + 1; y <nums.length; y++) {
      for(let z = nums.length - 1; z > y; z--) {
        const temp = nums[x] + nums[y] + nums[z]
        res.push(temp)
      }
    }
  }

  res.sort()
  console.log(res);
  
  let last:number
  let resNumber:number
  for(let x = 0; x < res.length; x++) {
    if(!x) {
      last = Math.abs(res[x] - target)
      resNumber = res[x]
      continue
    }
    if(x>0&& res[x] === res[x-1]) continue
    if(Math.abs(res[x] - target) < last!) {
      
      resNumber = res[x]
    }
     
  }
  
  return resNumber!||last!
};