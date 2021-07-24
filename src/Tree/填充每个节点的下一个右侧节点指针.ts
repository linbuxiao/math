/**
 * 给定一个 完美二叉树 ，其所有叶子节点都在同一层，每个父节点都有两个子节点。
 */

class TreeNodeWithNext {
  val: number;
  left: TreeNodeWithNext | null;
  right: TreeNodeWithNext | null;
  next: TreeNodeWithNext | null;
  constructor(
    val?: number,
    left?: TreeNodeWithNext,
    right?: TreeNodeWithNext,
    next?: TreeNodeWithNext
  ) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
    this.next = next === undefined ? null : next;
  }
}

// 超出空间限制，优化一下
function connect_1(root: TreeNodeWithNext | null): TreeNodeWithNext | null {
  if (root === null) return null;
  // 第一时间想到层序遍历
  const matrix: TreeNodeWithNext[][] = [];
  while (1) {
    if (matrix.length === 0) {
      matrix.push([root]);
    } else {
      let row: TreeNodeWithNext[] = [];
      let lastRow = matrix[matrix.length - 1].filter((item) => item !== null);
      if (lastRow.length === 0) break;
      lastRow.forEach((item) => {
        row.push(item);
      });
      matrix.push(row);
    }
  }

  for (let i = 0; i < matrix.length; i++) {
    let row = matrix[i];
    for (let x = 0; x < row.length; x++) {
      if (x === row.length - 1) {
        row[x].next = null;
      } else {
        row[x].next = row[x + 1];
      }
    }
  }

  return matrix[0][0];
}

function connect(root: TreeNodeWithNext | null): TreeNodeWithNext | null {
  if (root === null) return null;
  let queue: TreeNodeWithNext[] = [root];
  while (queue.length) {
    let temp: TreeNodeWithNext[] = [];
    for (let i = 0; i < queue.length; i++) {
      if (i === queue.length - 1) {
        queue[i].next = null;
      } else {
        queue[i].next = queue[i + 1];
      }
      temp.push(queue[i].left!, queue[i].right!);
    }

    queue = temp.filter((item) => item !== null);
  }

  return root;
}
