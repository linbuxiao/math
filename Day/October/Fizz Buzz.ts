// 写一个程序，输出从 1 到 n 数字的字符串表示。

// 1. 如果 n 是3的倍数，输出“Fizz”；

// 2. 如果 n 是5的倍数，输出“Buzz”；

// 3.如果 n 同时是3和5的倍数，输出 “FizzBuzz”。

export function fizzBuzz(n: number): string[] {
  const ans = [];

  for (let i = 1; i < n + 1; i++) {
    if (n % 15 === 0) {
      ans.push("FizzBuzz");
    } else if (n % 3 === 0) {
      ans.push("Fizz");
    } else if (n % 5 === 0) {
      ans.push("Buzz");
    } else {
      ans.push(String(n));
    }
  }

  return ans;
}
