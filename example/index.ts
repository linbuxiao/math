import { recoverFromPreorder } from "../src/DFS/从先序遍历还原二叉树";
import { postorderTraversal } from "../src/DFS/迭代遍历";
import { turnTreeToArray } from "../src/Utils";

console.log(postorderTraversal(turnTreeToArray([1, null, 2, 3])));
