// 已有方法 rand7 可生成 1 到 7 范围内的均匀随机整数，试写一个方法 rand10 生成 1 到 10 范围内的均匀随机整数。

// 不要使用系统的 Math.random() 方法。

function rand7(): number {
  return Math.floor(Math.random() * 7);
}

export function rand10(): number {
  function getNum(): number {
    const r = rand7();
    if (r < 4) {
      return 0;
    } else if (r < 7) {
      return 1;
    } else {
      return getNum();
    }
  }

  let s = "";
  for (let i = 0; i < 4; i++) {
    s += String(getNum());
  }

  const ans = parseInt(s, 2);

  if (ans > 10 || ans < 0) return rand10();
  return ans;
}
