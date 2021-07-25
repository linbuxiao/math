/**
 * 前序遍历
 */

/**
 * Definition for node.
 * class Node {
 *     val: number
 *     children: Node[]
 *     constructor(val?: number) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.children = []
 *     }
 * }
 */

// 递归
/**
 *
 * @param root {Node | null}
 * @param res
 * @returns
 */
export function preorder_1(root: any, res: number[] = []): number[] {
  if (root === null) return res;
  res.push(root.val);
  for (let i = 0; i < root.children.length; i++) {
    preorder_1(root.children[i], res);
  }

  return res;
}

// 迭代
export function preorder(root: any): number[] {
  const list: number[] = [];
  const stack = [];
  if (root === null) return list;
  stack.push(root);

  while (stack.length) {
    const node: any = stack.pop()!;
    list.push(node.val);
    if (node.children.length !== 0) stack.push(...node.children.reverse());
  }

  return list;
}

/**
 * 后序遍历
 */

// 递归
export function postorder_1(root: any, res: number[] = []): number[] {
  if (root === null) return res;

  root.children.forEach((item: any) => {
    postorder_1(item, res);
  });

  res.push(root.val);
  return res;
}

// 迭代
export function postorder(root: any): number[] {
  const list: number[] = [];
  const stack = [];
  if (root === null) return list;
  stack.push(root);

  while (stack.length) {
    const node: any = stack.pop()!;
    list.push(node.val);
    stack.push(...node.children);
  }

  return list.reverse();
}
