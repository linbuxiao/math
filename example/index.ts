import { splitListToParts } from "../src/Day/September/分隔链表";
import { ListNode } from "../src/Utils";

console.log(
  splitListToParts(
    new ListNode(1, {
      val: 2,
      next: {
        val: 3,
        next: null,
      },
    }),
    5
  )
);
