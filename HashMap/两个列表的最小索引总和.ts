/**
 * 假设Andy和Doris想在晚餐时选择一家餐厅，并且他们都有一个表示最喜爱餐厅的列表，每个餐厅的名字用字符串表示。
 * 你需要帮助他们用最少的索引和找出他们共同喜爱的餐厅。 如果答案不止一个，则输出所有答案并且不考虑顺序。 你可以假设总是存在一个答案。
 * ["Shogun", "Tapioca Express", "Burger King", "KFC"]
 * ["Piatti", "The Grill at Torrey Pines", "Hungry Hunter Steakhouse", "Shogun"]
 *
 * ["Shogun"]
 */

export function findRestaurant(list1: string[], list2: string[]): string[] {
  let map_1 = new Map();
  let map_same = new Map();
  list1.forEach((item, index) => {
    map_1.set(item, index);
  });

  for (let i = 0; i < list2.length; i++) {
    let val = list2[i];
    if (map_1.has(val)) {
      // 这里保存下标和
      map_same.set(val, i + map_1.get(val));
    }
  }

  let res: string[] = [];

  // 最小值下标
  let min = Infinity; // 直接给个无限大
  map_same.forEach((key, val) => {
    if (min > key) min = key;
  });

  // 此时val为最小的下标和值，遍历map取出所有值为min的元素
  map_same.forEach((key, val) => {
    if (key === min) res.push(val);
  });

  return res;
}
