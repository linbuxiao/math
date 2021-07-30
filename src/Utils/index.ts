/**
 * 替换数组中两个位置的元素
 * @param arr
 * @param x
 * @param y
 */
export function swap(arr: number[], x: number, y: number) {
  let temp = arr[x];
  arr[x] = arr[y];
  arr[y] = temp;
}

/**
 * 链表节点
 */
export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

/**
 * 数组转化为链表
 * @param nums
 */
export function ArrTurnToList(nums: number[]): ListNode | null {
  let head = new ListNode();
  let pointer = head;
  for (let x = 0; x < nums.length; x++) {
    pointer.val = nums[x];
    if (x !== nums.length - 1) {
      pointer.next = new ListNode();
      pointer = pointer.next;
    }
  }
  return head;
}

/**
 * 链表转化为数组
 */
export function ListTurnToArr(head: ListNode | null): number[] {
  if (!head) return [];
  let nums: number[] = [];
  let pointer = head;
  while (pointer.val !== null) {
    nums.push(pointer.val);
    if (!pointer.next) break;
    pointer = pointer.next;
  }
  return nums;
}

/**
 * 树节点
 */
export class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

/**
 * 将数组转化为树
 */
export const turnTreeToArray = (nums: (number | null)[]): TreeNode | null => {
  if (nums.length === 0) return null;
  let matrix: (TreeNode | null)[][] = [];
  let p = 0; // 数组指针

  const dfs = () => {
    let row: (TreeNode | null)[] = [];
    if (matrix.length === 0) {
      row.push(new TreeNode(nums[0]!));
      p++;
    } else {
      let len =
        matrix[matrix.length - 1].filter((item) => item !== null).length * 2; // 上一级的长度
      while (len && p < nums.length) {
        row.push(nums[p] === null ? null : new TreeNode(nums[p]!));
        p++;
        len--;
      }
    }

    matrix.push(row);
  };
  // 构造矩阵
  while (p < nums.length) {
    dfs();
  }

  // 解析矩阵为树
  // let root = new TreeNode()
  let k = 0; // 矩阵指针
  // k指到的数组去结合下一层的数据
  while (k < matrix.length - 1) {
    let row = matrix[k];
    let nexRow = matrix[k + 1];
    let f = 0; // 下一行指针
    for (let i = 0; i < row.length; i++) {
      if (row[i] === null) {
        continue;
      } else {
        row[i]!.left = nexRow[f];
        f++;
        row[i]!.right = nexRow[f];
        f++;
      }
    }
    k++;
  }

  return matrix[0][0];
};

/**
 * 渲染一个矩阵
 */

export const buildbox = (
  grid: (number | string)[][],
  styleFn?: (el: HTMLSpanElement, row: number, col: number) => HTMLSpanElement
) => {
  for (let row = 0; row < grid.length; row++) {
    const box = document.createElement("div");
    box.style.height = "35px";
    for (let col = 0; col < grid[0].length; col++) {
      let el = document.createElement("span");
      el.style.border = "1px solid #000";
      el.style.padding = "5px";
      el.innerHTML = `${grid[row][col]}`;
      if (styleFn) {
        el = styleFn(el, row, col);
      }
      box.appendChild(el);
    }
    document.body.append(box);
  }
};
