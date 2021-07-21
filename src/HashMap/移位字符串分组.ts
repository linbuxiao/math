/**
 * 给定一个字符串，对该字符串可以进行 “移位” 的操作，也就是将字符串中每个字母都变为其在字母表中后续的字母，比如："abc" -> "bcd"。这样，我们可以持续进行 “移位” 操作，从而生成如下移位序列：
 * 给定一个包含仅小写字母字符串的列表，将该列表中所有满足 “移位” 操作规律的组合进行分组并返回。
 */

export function groupStrings(strings: string[]): string[][] {
  // 遍历总数组，将同样长度的内容放在同一个键下
  // 为了进行比对，将所有的内容移位到a，如果相等，则可移位
  // 将移位到a的内容也保留在key，所以key应当是一个对象： {length：xx, k：移位后内容}

  // 但是用这种方式储存key，map无法使用has查询是否有过
  // 转化为字符串形式储存 4|x|x|x
  let map = new Map<string, string[]>();
  for (let i = 0; i < strings.length; i++) {
    // a. 获取length
    const length = strings[i].length;
    // b. 进行移位，把首字母转换为a
    let strArr = strings[i].split("");
    while (strArr[0].charCodeAt(0) !== 97) {
      for (let a = 0; a < strArr.length; a++) {
        let singleStr = strArr[a];
        if (singleStr === "a") {
          strArr[a] = "z";
        } else {
          strArr[a] = String.fromCharCode(singleStr.charCodeAt(0) - 1);
        }
      }
    }
    const k = strArr.join("");
    const mapItem = [length, k].join("|");
    if (map.has(mapItem)) {
      map.get(mapItem)!.push(strings[i]);
    } else {
      map.set(mapItem, [strings[i]]);
    }
  }

  console.log(Array.from(map.values()));
  return Array.from(map.values());
}
