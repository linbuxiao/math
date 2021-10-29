// 在二叉树中，根节点位于深度 0 处，每个深度为 k 的节点的子节点位于深度 k+1 处。

import { TreeNode } from "../Utils";

// 如果二叉树的两个节点深度相同，但 父节点不同 ，则它们是一对堂兄弟节点。

// 我们给出了具有唯一值的二叉树的根节点 root ，以及树中两个不同节点的值 x 和 y 。

// 只有与值 x 和 y 对应的节点是堂兄弟节点时，才返回 true 。否则，返回 false。

// 作者：力扣 (LeetCode)
// 链接：https://leetcode-cn.com/leetbook/read/bfs/e605is/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

// 深度相同 &&
// 父节点不能相同
export function isCousins(
  root: TreeNode | null,
  x: number,
  y: number,
): boolean {
  if (root === null) return false;
  const queue: TreeNode[] = [];
  queue[0] = root;

  while (queue.length) {
    const tmp: TreeNode[] = [];
    const set = new Set<number>();
    const caches: number[][] = [];
    while (queue.length) {
      const node = queue.shift()!;
      const s = [];
      if (node.left) {
        tmp.push(node.left);
        set.add(node.left.val);
        s.push(node.left.val);
      }
      if (node.right) {
        tmp.push(node.right);
        set.add(node.right.val);
        s.push(node.right.val);
      }
      caches.push(s);
    }

    queue.push(...tmp);
    if (set.has(x) && set.has(y)) {
      for (let i = 0; i < caches.length; i++) {
        const cache = caches[i]; // 每一组
        if (cache.indexOf(x) !== -1 && cache.indexOf(y) !== -1) {
          return false;
        }
      }
      return true;
    }
    if (set.has(x) || set.has(y)) return false;
  }

  return false;
}

// [1,2,3,4]
// 4
// 3
// [1,2,3,null,4,null,5]
// 5
// 4
// [1,2,3,null,4]
// 2
// 3
