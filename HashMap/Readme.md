### 哈希表

哈希表是一种数据结构，它使用哈希函数组织数据，以支持快速插入和搜索。

#### 原理

哈希表的关键思想是使用哈希函数将键映射到存储桶。更确切地说，

1. 当我们插入一个新的键时，哈希函数将决定该键应该分配到哪个桶中，并将该键存储在相应的桶中；
2. 当我们想要搜索一个键时，哈希表将使用相同的哈希函数来查找对应的桶，并只在特定的桶中进行搜索。

> 通过计算函数，获得数据与桶中的数据对应的关系，并保证这份关系的唯一性。

#### 哈希函数

散列函数将取决于键值的范围和桶的数量。

哈希函数的设计是一个开放的问题。其思想是尽可能将键分配到桶中，理想情况下，完美的哈希函数将是键和桶之间的一对一映射。然而，在大多数情况下，哈希函数并不完美，它需要在桶的数量和桶的容量之间进行权衡。

##### 冲突解决

1. 如何组织在同一个桶中的值
2. 如果为一个桶分配了太多的值，要怎么办
3. 如何在特定的桶中搜索值

**插入**和**搜索**是哈希表中两个基本操作

此外还有基于这两个操作的操作。比如删除：

1. 先搜索元素
2. 在元素存在的情况下删除

#### 映射和集合的关系

- 集合只是进行了存储
- 映射则更好的表示了键和值的关系。让我们既能返回键，又能返回值。

所以我们应该更多的使用哈希映射，而不是哈希集合。

#### 设计键

1. 属于同一组的所有值都将映射到同一组中。
2. 需要分成不同组的值不会映射到同一组。

此过程类似于设计哈希函数，但这是一个本质区别。哈希函数满足第一个规则但可能不满足第二个规则。但是你的映射函数应该满足它们。

在上面的示例中，我们的映射策略可以是：对字符串进行排序并使用排序后的字符串作为键。也就是说，“eat” 和 “ate” 都将映射到 “aet”。