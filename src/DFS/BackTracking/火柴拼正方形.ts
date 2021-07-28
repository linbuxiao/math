/**
 * 还记得童话《卖火柴的小女孩》吗？现在，你知道小女孩有多少根火柴，请找出一种能使用所有火柴拼成一个正方形的方法。不能折断火柴，可以把火柴连接起来，并且每根火柴都要用到。
 * 输入为小女孩拥有火柴的数目，每根火柴用其长度表示。输出即为是否能用所有的火柴拼成正方形。
 *
 * 输入: [1,1,2,2,2]
 * 输出: true
 */

export function makesquare(matchsticks: number[]): boolean {
  matchsticks.sort((a, b) => b - a);
  const sum = matchsticks.reduce((a, b) => a + b, 0);
  if (sum % 4 !== 0) return false; // 如果总和不能被4除尽，则一定组不成正方形
  if (matchsticks.length < 4) return false;

  const sideLen = sum / 4;

  const sideArr: number[] = new Array(4).fill(0);

  const backTracking = (index: number) => {
    if (index === matchsticks.length) {
      return (
        sideArr[0] === sideArr[1] &&
        sideArr[1] === sideArr[2] &&
        sideArr[2] === sideArr[3]
      );
    }

    const current = matchsticks[index];

    if (current > sideLen) {
      return false;
    }

    for (let i = 0; i < sideArr.length; i++) {
      if (sideArr[i] + current <= sideLen) {
        sideArr[i] += current;
        if (backTracking(index + 1)) return true;
        sideArr[i] -= current;
      }
    }

    return false;
  };

  return backTracking(0);
}
