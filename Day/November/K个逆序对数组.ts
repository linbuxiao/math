// 给出两个整数 n 和 k，找出所有包含从 1 到 n 的数字，且恰好拥有 k 个 逆序对 的 不同的数组的个数。

// 逆序对的定义如下：对于数组的第i个和第 j个元素，如果满i < j且 a[i] > a[j]，则其为一个逆序对；否则不是。

// 由于答案可能很大，只需要返回 答案 mod 109 + 7 的值。

export function kInversePairs(n: number, k: number): number {
  // 找出所有包含从 1 到 n 的数字 意味着一次全排列
  const permute = function (nums: number[]) {
    const res: number[][] = [];
    const path: number[] = [];
    const dfs = (nums: number[], path: number[]) => {
      if (path.length === nums.length) {
        return res.push(path.concat());
      }

      for (let i = 0; i < nums.length; i++) {
        if (path.indexOf(nums[i]) > -1) continue;
        path.push(nums[i]);
        dfs(nums, path);
        path.pop();
      }
    };

    dfs(nums, path);
    return res;
  };

  const allArr = permute(Array.from({ length: n }, (_, i) => i + 1));
  let res = 0;
  allArr.forEach((arr) => {
    let times = 0;
    for (let i = 0; i < arr.length && times <= k; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] > arr[j]) times++;
      }
    }
    if (times === k) res++;
  });

  return res;
}
