// 在 「力扣挑战赛」 开幕式的压轴节目 「无人机方阵」中，每一架无人机展示一种灯光颜色。 无人机方阵通过两种操作进行颜色图案变换：

// 调整无人机的位置布局
// 切换无人机展示的灯光颜色
// 给定两个大小均为 N*M 的二维数组 source 和 target 表示无人机方阵表演的两种颜色图案，由于无人机切换灯光颜色的耗能很大，请返回从 source 到 target 最少需要多少架无人机切换灯光颜色。

// 注意： 调整无人机的位置布局时无人机的位置可以随意变动。

export function minimumSwitchingTimes(
  source: number[][],
  target: number[][]
): number {
  const map = new Map<number, number>();

  target.forEach((row) => {
    row.forEach((num) => {
      if (map.has(num)) {
        map.set(num, map.get(num)! + 1);
      } else {
        map.set(num, 1);
      }
    });
  });

  let ans = 0;

  for (let row = 0; row < source.length; row++) {
    for (let col = 0; col < source[0].length; col++) {
      const num = source[row][col];
      if (map.has(num)) {
        const val = map.get(num)!;
        if (val === 0) {
          ans += 1;
        } else {
          map.set(num, val - 1);
        }
      } else {
        ans += 1;
      }
    }
  }

  return ans;
}
