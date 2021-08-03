import { levelOrder } from "../src/BPS/从上到下打印二叉树 III";
import { findUnsortedSubarray } from "../src/Day/August/最短无序连续子数组";
import { minimumEffortPath } from "../src/DFS/DP/最小体力消耗路径";
import { turnArrayToTree } from "../src/Utils";

console.log(levelOrder(turnArrayToTree([1, 2, 3, 4, null, null, 5])));
