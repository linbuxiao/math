// 给定一个保存员工信息的数据结构，它包含了员工 唯一的 id ，重要度 和 直系下属的 id 。

// 比如，员工 1 是员工 2 的领导，员工 2 是员工 3 的领导。他们相应的重要度为 15 , 10 , 5 。那么员工 1 的数据结构是 [1, 15, [2]] ，员工 2的 数据结构是 [2, 10, [3]] ，员工 3 的数据结构是 [3, 5, []] 。注意虽然员工 3 也是员工 1 的一个下属，但是由于 并不是直系 下属，因此没有体现在员工 1 的数据结构中。

// 现在输入一个公司的所有员工信息，以及单个员工 id ，返回这个员工和他所有下属的重要度之和。

// 输入：[[1, 5, [2, 3]], [2, 3, []], [3, 3, []]], 1
// 输出：11
// 解释：
// 员工 1 自身的重要度是 5 ，他有两个直系下属 2 和 3 ，而且 2 和 3 的重要度均为 3 。因此员工 1 的总重要度是 5 + 3 + 3 = 11 。

class Employee {
  id: number;
  importance: number;
  subordinates: number[];
  constructor(id: number, importance: number, subordinates: number[]) {
    this.id = id === undefined ? 0 : id;
    this.importance = importance === undefined ? 0 : importance;
    this.subordinates = subordinates === undefined ? [] : subordinates;
  }
}

export function getImportance(employees: Employee[], id: number): number {
  const tartget = (id: number): Employee => {
    for (let employee of employees) {
      if (employee.id === id) return employee;
    }
    return employees[0];
  };
  const visited: boolean[] = [];
  // visited[id] = true
  const queue: Employee[] = [tartget(id)];
  let sum = 0;
  while (queue.length) {
    const p = queue.shift()!;
    if (visited[p.id]) continue;
    visited[p.id] = true;
    sum += p.importance;
    for (let i of p.subordinates) {
      queue.push(tartget(i));
    }
  }

  return sum;
}
