/**
 * 给定单向链表的头指针和一个要删除的节点的值，定义一个函数删除该节点。
 * 返回删除后的链表的头节点
 *
 * 输入: head = [4,5,1,9], val = 5
 * 输出: [4,1,9]
 * 解释: 给定你链表中值为 5 的第二个节点，那么在调用了你的函数之后，该链表应变为 4 -> 1 -> 9.
 */
import { ListNode } from "../../Utils";

export function deleteNode(
  head: ListNode | null,
  val: number,
): ListNode | null {
  if (!head) return head;
  if (head.val === val) return head.next;
  let cur = head.next;

  let last = head;

  while (cur) {
    if (cur.val === val) {
      last.next = cur.next;
    }
    // 始终保留上一个节点
    last = cur;
    cur = cur.next;
  }

  return head;

  // while (cur.next&&cur.next.next) {
  //   if(cur.next.val === val) {
  //     cur.next = cur.next.next
  //     console.log(cur, head);
  //     break
  //   }
  //   cur = cur.next
  // }
  //
  // if(cur.next  && cur.next.val === val) cur.next = null
  //
  // return head
}
