// 你在和朋友一起玩 猜数字（Bulls and Cows）游戏，该游戏规则如下：

// 写出一个秘密数字，并请朋友猜这个数字是多少。朋友每猜测一次，你就会给他一个包含下述信息的提示：

// 猜测数字中有多少位属于数字和确切位置都猜对了（称为 "Bulls", 公牛），
// 有多少位属于数字猜对了但是位置不对（称为 "Cows", 奶牛）。也就是说，这次猜测中有多少位非公牛数字可以通过重新排列转换成公牛数字。
// 给你一个秘密数字 secret 和朋友猜测的数字 guess ，请你返回对朋友这次猜测的提示。

// 提示的格式为 "xAyB" ，x 是公牛个数， y 是奶牛个数，A 表示公牛，B 表示奶牛。

// 请注意秘密数字和朋友猜测的数字都可能含有重复数字。

export function getHint(secret: string, guess: string): string {
  let bulls = 0;
  let cows = 0;
  const map = new Map<string, number>();
  const n = secret.length;

  for (let i = 0; i < n; i++) {
    // Find all letters that are not bulls and the number of occurrences
    if (secret[i] !== guess[i]) {
      map.set(secret[i], (map.get(secret[i]) ?? 0) + 1);
    }
  }

  for (let i = 0; i < n; i++) {
    const [s, g] = [secret[i], guess[i]];
    if (s === g) {
      bulls++;
    } else {
      if (map.has(g)) {
        const nextNum = map.get(g)! - 1;
        cows++;
        if (nextNum > 0) {
          map.set(g, nextNum);
        } else {
          map.delete(g);
        }
      }
    }
  }

  return `${bulls}A${cows}B`;
}
