// 编写一个高效的算法来搜索 m x n 矩阵 matrix 中的一个目标值 target 。该矩阵具有以下特性：

// 每行的元素从左到右升序排列。
// 每列的元素从上到下升序排列。

export function searchMatrix(matrix: number[][], target: number): boolean {
  const [m, n] = [matrix.length, matrix[0]!.length];
  let result = false;
  function dfs(x: number, y: number) {
    if (x > m - 1 || y < 0) return;
    if (matrix[x]![y] === target) {
      result = true;
      return;
    }

    if (matrix[x]![y]! > target) {
      dfs(x, y - 1);
    } else {
      dfs(x + 1, y);
    }
  }

  dfs(0, n - 1);

  return result;
}
