/**
 * 归并排序
 */

export function merge_1(nums_1: number[], nums_2: number[]) {
  
  let p1 = 0 // 数组 一 指针
  let p2 = 0 // 数组 二 指针
  let arr: number[] = [] // 新数组
  while(arr.length < nums_1.length + nums_2.length) {
    // a. 遍历 num2 中比 p1 小的 ， 如果有则按顺序排入数组，然后排入p1
    // 没有的话则直接排入p1 p1++
    let y = p2
    for(let x = y; x < nums_2.length && nums_2[x] <= nums_1[p1]; x++) {
      arr.push(nums_2[x])
      p2 = x
    }
    arr.push(nums_1[p1])
    
    // b. 此时p1的指针 + 1，p2的指针停在最小的那个索引
    p1++

    // c. 如果p2有变化了，还需要再往前走一步。
    if(p2!==y) p2++
  }

  return arr
}