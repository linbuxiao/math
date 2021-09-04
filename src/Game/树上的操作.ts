// 给你一棵 n 个节点的树，编号从 0 到 n - 1 ，以父节点数组 parent 的形式给出，其中 parent[i] 是第 i 个节点的父节点。树的根节点为 0 号节点，所以 parent[0] = -1 ，因为它没有父节点。你想要设计一个数据结构实现树里面对节点的加锁，解锁和升级操作。

// 数据结构需要支持如下函数：

// Lock：指定用户给指定节点 上锁 ，上锁后其他用户将无法给同一节点上锁。只有当节点处于未上锁的状态下，才能进行上锁操作。
// Unlock：指定用户给指定节点 解锁 ，只有当指定节点当前正被指定用户锁住时，才能执行该解锁操作。
// Upgrade：指定用户给指定节点 上锁 ，并且将该节点的所有子孙节点 解锁 。只有如下 3 个条件 全部 满足时才能执行升级操作：
// 指定节点当前状态为未上锁。
// 指定节点至少有一个上锁状态的子孙节点（可以是 任意 用户上锁的）。
// 指定节点没有任何上锁的祖先节点。
// 请你实现 LockingTree 类：

// LockingTree(int[] parent) 用父节点数组初始化数据结构。
// lock(int num, int user) 如果 id 为 user 的用户可以给节点 num 上锁，那么返回 true ，否则返回 false 。如果可以执行此操作，节点 num 会被 id 为 user 的用户 上锁 。
// unlock(int num, int user) 如果 id 为 user 的用户可以给节点 num 解锁，那么返回 true ，否则返回 false 。如果可以执行此操作，节点 num 变为 未上锁 状态。
// upgrade(int num, int user) 如果 id 为 user 的用户可以给节点 num 升级，那么返回 true ，否则返回 false 。如果可以执行此操作，节点 num 会被 升级 。

interface Tree {
  val: number;
  status: boolean;
  user: number;
  children: Tree[];
}

export class LockingTree {
  tree: Tree;
  constructor(parent: number[]) {
    const head = {
      val: 0,
      status: false,
      user: 0,
      children: [],
    };

    for (let i = 1; i < parent.length; i++) {
      const k = parent[i];
      const node = this.find(k, head)!;
      console.log(node);

      node.children.push({
        val: i,
        status: false,
        user: 0,
        children: [],
      });
    }

    this.tree = head;
  }

  lock(num: number, user: number): boolean {
    const node = this.find(num)!;
    if (!node.status) {
      node.status = true;
      node.user = user;
      return true;
    }
    return false;
  }

  unlock(num: number, user: number): boolean {
    const node = this.find(num)!;
    if (node.status && node.user === user) {
      node.status = false;
      node.user = 0;
      return true;
    }
    return false;
  }

  upgrade(num: number, user: number): boolean {
    const node = this.find(num)!;
    if (!node.status && this.findChildren(node) && this.findFather(num, node)) {
      node.status = true;
      node.user = user;
      for (let i = 0; i < node.children.length; i++) {
        this.unlockAll(node.children[i]);
      }

      return true;
    }
    return false;
  }

  find(num: number, list = this.tree): Tree | null {
    if (list.val === num) return list;
    if (!list.children.length) return null;
    for (let i = 0; i < list.children.length; i++) {
      const result = this.find(num, list.children[i]);
      if (result) return result;
    }
    return null;
  }

  findChildren(list: Tree): boolean {
    if (list.status) return true;
    if (!list.children.length) return false;
    for (let i = 0; i < list.children.length; i++) {
      if (this.findChildren(list.children[i])) return true;
    }
    return false;
  }

  findFather(num: number, list: Tree): boolean {
    if (!this.find(num, list)) return false;
    if (list.status) return false;
    let flag = true;
    for (let i = 0; i < list.children.length; i++) {
      if (this.findFather(num, list.children[i])) flag = false;
    }

    return flag;
  }

  unlockAll(list: Tree) {
    list.status = false;
    list.user = 0;
    for (let i = 0; i < list.children.length; i++) {
      this.unlockAll(list.children[i]);
    }
  }
}

/**
 * Your LockingTree object will be instantiated and called as such:
 * var obj = new LockingTree(parent)
 * var param_1 = obj.lock(num,user)
 * var param_2 = obj.unlock(num,user)
 * var param_3 = obj.upgrade(num,user)
 */

/**
 * Your LockingTree object will be instantiated and called as such:
 * var obj = new LockingTree(parent)
 * var param_1 = obj.lock(num,user)
 * var param_2 = obj.unlock(num,user)
 * var param_3 = obj.upgrade(num,user)
 */
