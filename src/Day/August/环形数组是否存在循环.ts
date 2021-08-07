// 存在一个不含 0 的 环形 数组 nums ，每个 nums[i] 都表示位于下标 i 的角色应该向前或向后移动的下标个数：

// 如果 nums[i] 是正数，向前 移动 nums[i] 步
// 如果 nums[i] 是负数，向后 移动 nums[i] 步
// 因为数组是 环形 的，所以可以假设从最后一个元素向前移动一步会到达第一个元素，而第一个元素向后移动一步会到达最后一个元素。

// 数组中的 循环 由长度为 k 的下标序列 seq ：

// 遵循上述移动规则将导致重复下标序列 seq[0] -> seq[1] -> ... -> seq[k - 1] -> seq[0] -> ...
// 所有 nums[seq[j]] 应当不是 全正 就是 全负
// k > 1
// 如果 nums 中存在循环，返回 true ；否则，返回 false 。

// 输入：nums = [2,-1,1,2,2]
// 输出：true
// 解释：存在循环，按下标 0 -> 2 -> 3 -> 0 。循环长度为 3 。

// 输入：nums = [-1,2]
// 输出：false
// 解释：按下标 1 -> 1 -> 1 ... 的运动无法构成循环，因为循环的长度为 1 。根据定义，循环的长度必须大于 1 。

//[2,-1,1,2,2]

export function circularArrayLoop(nums: number[]): boolean {
  if (nums.length === 0) return false;
  const m = nums.length;

  const parseIndex = (i: number): number => {
    // i 为当前位置， 返回下个索引
    let res = i + nums[i];

    if (res > m - 1) res = res % m;
    if (res < 0) res = m + (res % m);

    return res;
  };

  // flag: true 全正 false 全负
  const dfs = (i: number, path: Set<number>, flag?: boolean): boolean => {
    const num = nums[i];
    if (flag === undefined) flag = num > 0;
    if ((num > 0 && !flag) || (num < 0 && flag)) return false;
    if (path.has(i)) {
      // console.log(path);

      return true;
    }
    path.add(i);
    const next = parseIndex(i);
    console.log(next, i);

    if (next === i) return false;
    return dfs(next, path, flag);
  };

  let flag = false;

  for (let v in nums) {
    if (dfs(+v, new Set())) {
      flag = true;
      break;
    }
  }
  // console.log(dfs(0, new Set()));

  return flag;
}
