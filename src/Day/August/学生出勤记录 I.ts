// 给你一个字符串 s 表示一个学生的出勤记录，其中的每个字符用来标记当天的出勤情况（缺勤、迟到、到场）。记录中只含下面三种字符：

// 'A'：Absent，缺勤
// 'L'：Late，迟到
// 'P'：Present，到场
// 如果学生能够 同时 满足下面两个条件，则可以获得出勤奖励：

// 按 总出勤 计，学生缺勤（'A'）严格 少于两天。
// 学生 不会 存在 连续 3 天或 3 天以上的迟到（'L'）记录。
// 如果学生可以获得出勤奖励，返回 true ；否则，返回 false 。

//

// 示例 1：

// 输入：s = "PPALLP"
// 输出：true
// 解释：学生缺勤次数少于 2 次，且不存在 3 天或以上的连续迟到记录。
// 示例 2：

// 输入：s = "PPALLL"
// 输出：false
// 解释：学生最后三天连续迟到，所以不满足出勤奖励的条件。

export function checkRecord(s: string): boolean {
  let aNum = 0;
  let lNum = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "A") aNum++;
    if (s[i] === "L") lNum++;
    if (
      i < s.length - 1 &&
      i > 0 &&
      s[i] === "L" &&
      s[i - 1] === "L" &&
      s[i + 1] === "L"
    )
      return false;
  }

  if (aNum < 2 && lNum <= 3) return true;
  return false;
}
