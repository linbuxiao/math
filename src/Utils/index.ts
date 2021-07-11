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

/**
 * 链表节点
 */
export class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
  }
}

/**
 * 数组转化为链表
 * @param nums 
 */
export function ArrTurnToList(nums: number[]): ListNode | null {
  let head = new ListNode()
  let pointer = head
  for(let x = 0; x < nums.length; x++) {
    pointer.val = nums[x]
    if(x !== nums.length - 1) {
      pointer.next = new ListNode()
      pointer = pointer.next
    }
  }
  return head
}

/**
 * 链表转化为数组
 */
export function ListTurnToArr(head: ListNode | null): number[] {
  if (!head) return []
  let nums: number[] = []
  let pointer = head
  while(pointer.val !== null) {
    nums.push(pointer.val)
    if(!pointer.next) break
    pointer = pointer.next
  }
  return nums
}

/**
 * 交换链表
 */