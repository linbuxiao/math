import { isSymmetric } from "../src/Tree/对称二叉树";
import { turnTreeToArray } from "../src/Utils";

console.log(
  isSymmetric(turnTreeToArray([2, 3, 3, 4, 5, 5, 4, null, null, 8, 9, 9, 8]))
);
