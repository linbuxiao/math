/**
 * 给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。
 * 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。
 * 你可以按任意顺序返回答案。
 *
 * nums = [2,7,11,15], target = 9
 * [0,1]
 * 因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。
 */

// 该方法不可取，因为该数组无序，且值不唯一。 无法使用指针
// export function twoSum_1(nums: number[], target: number): number[] {
//   let left = 0
//   let right = nums.length - 1
//   let sortNums = [...nums].sort((a,b)=> a-b)
//   while (left < right) {
//     if(left < right && nums[left] + nums[right] > target) right--
//     if(left < right && nums[left] + nums[right] < target) left++
//     if(left < right && nums[left] + nums[right] === target) break
//   }
//
//   // if(left === right && right)
//   return [map.get(nums[left])!, map.get(nums[right])!]
// };

// 暴力解法， 可过。简单题。
export function twoSum_1(nums: number[], target: number): number[] {
  for (let a = 0; a < nums.length; a++) {
    for (let b = a + 1; b < nums.length; b++) {
      if (nums[a] + nums[b] === target) {
        return [a, b];
      }
    }
  }

  return [];
}

// 这里有一个求差的map解法
export function twoSum(nums: number[], target: number): number[] {
  let map = new Map();
  // 以值为key，下标为value进行保留。
  // 思路对上了，我以为是值出现多次，下标无意义。但其实只保留一个下标也是可以的。
  // 只是不能用指针
  // 指针的话，两个值为同样的就很恼火
  nums.forEach((num, key) => {
    map.set(num, key);
  });

  for (let i = 0; i < nums.length; i++) {
    const find: number = target - nums[i];
    let mapGet = map.get(find);
    if (mapGet && mapGet !== i) {
      return [i, mapGet];
    }
  }

  return [];
}
