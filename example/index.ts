import { KthLargest } from "../src/Heap/数据流中的第 K 大元素";

const heap = new KthLargest(2, [0]);

console.log(heap.add(-1));
console.log(heap.add(1));
console.log(heap.add(-2));
console.log(heap.add(-4));
console.log(heap.add(3));
