import { treeDiameter } from "../src/BPS/Topo/树的直径";
import { countDigitOne } from "../src/Day/August/数字 1 的个数";

let res: number[] = [];
const getResult = () => {
  for (let n = 0; n <= 2 * Math.pow(10, 9); n++) {
    res.push(countDigitOne(n));
  }
};

getResult();

console.log(res);
