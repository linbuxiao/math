import { pacificAtlantic } from "../src/DFS/FloodFill/太平洋大西洋水流问题";
import { numIslands } from "../src/DFS/FloodFill/岛屿数量";

const params = [
  [1,2,2,3,5],
  [3,2,3,4,4],
  [2,4,5,3,1],
  [6,7,1,4,5],
  [5,1,1,2,4]
]

console.log(
  pacificAtlantic(params)
);

