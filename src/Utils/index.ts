/**
 * 替换数组中两个位置的元素
 * @param arr 
 * @param x 
 * @param y 
 */
export function swap (arr: number[], x: number, y: number) {
  let temp = arr[x]
  
  arr[x] = arr[y]

  arr[y] = temp
}