// 超级丑数 是一个正整数，并满足其所有质因数都出现在质数数组 primes 中。

// 给你一个整数 n 和一个整数数组 primes ，返回第 n 个 超级丑数 。

// 题目数据保证第 n 个 超级丑数 在 32-bit 带符号整数范围内。

// 输入：n = 12, primes = [2,7,13,19]
// 输出：32
// 解释：给定长度为 4 的质数数组 primes = [2,7,13,19]，前 12 个超级丑数序列为：[1,2,4,7,8,13,14,16,19,26,28,32] 。

// 输入：n = 1, primes = [2,3,5]
// 输出：1
// 解释：1 不含质因数，因此它的所有质因数都在质数数组 primes = [2,3,5] 中。

// 提示：

// 1 <= n <= 106
// 1 <= primes.length <= 100
// 2 <= primes[i] <= 1000
// 题目数据 保证 primes[i] 是一个质数
// primes 中的所有值都 互不相同 ，且按 递增顺序 排列

// 会超时

export function nthSuperUglyNumber_1(n: number, primes: number[]): number {
  const queue: number[] = [1];
  const set = new Set(primes);
  const stack = new Map<number, Set<number>>(
    primes.map((item) => [item, new Set([item])]),
  );
  if (n === 1) return queue[0];

  const isPrime = (num: number) => {
    let res = [];
    for (let i = 2; i < num; i++) {
      if (!handleNumber(num % i)) res.push(i);
    }
    return res;
  };

  const handleNumber = (num: number): boolean => {
    if (Math.floor(num) !== num) return false;
    return true;
  };

  //返回分解质因数的结果
  const parsePrime = (num: number, res = new Set<number>()): Set<number> => {
    let queue = [num];
    while (queue.length) {
      const i = queue.shift()!;
      if (stack.has(i)) {
        stack.get(i)!.forEach((k) => {
          res.add(k);
        });
        continue;
      }
      // 是否是质因数
      const _primes = isPrime(i);
      if (_primes.length) {
        // 判断当前数是否 只能被自己和1整除
        // 如果是，推入res，如果不是，分解后推入queue
        queue.push(..._primes);
      } else {
        if (set.has(i)) {
          res.add(i);
        } else {
          queue = [];
          res.clear();
          break;
        }
      }
    }

    return res;
  };

  let val = 2;
  while (queue.length < n) {
    if (set.has(val)) {
      queue.push(val);
    } else {
      const res = parsePrime(val);
      if (res.size) {
        stack.set(val, res);
        queue.push(val);
      }
    }
    val++;
  }

  return queue[n - 1];
}

export function nthSuperUglyNumber(n: number, primes: number[]): number {
  if (n === 1) return 1;
  let nums: number[] = [];
  let res = new Array(n + 1).fill(1);
  const pointers = new Array(primes.length).fill(1);

  for (let i = 2; i <= n; i++) {
    for (let j = 0; j < primes.length; j++) {
      nums[j] = res[pointers[j]] * primes[j];
    }

    res[i] = Math.min(...nums);

    for (let k = 0; k < nums.length; k++) {
      if (nums[k] === res[i]) pointers[k]++;
    }
    nums = [];
  }

  return res[n];
}
