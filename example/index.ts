import { getKthFromEnd } from "../src/Day/September/链表中倒数第k个节点";

getKthFromEnd(
  {
    val: 1,
    next: {
      val: 2,
      next: {
        val: 3,
        next: {
          val: 4,
          next: {
            val: 5,
            next: null,
          },
        },
      },
    },
  },
  2
);
