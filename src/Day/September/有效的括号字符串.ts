// 给定一个只包含三种字符的字符串：（ ，） 和 *，写一个函数来检验这个字符串是否为有效字符串。有效字符串具有如下规则：

// 任何左括号 ( 必须有相应的右括号 )。
// 任何右括号 ) 必须有相应的左括号 ( 。
// 左括号 ( 必须在对应的右括号之前 )。
// * 可以被视为单个右括号 ) ，或单个左括号 ( ，或一个空字符串。

// export function checkValidString(s: string): boolean {
//   let queue = [0]

//   let p = 0
//   while(p < s.length) {
//     let tmp = []
//     for(let num of queue) {
//       if(s[p] === '(') {
//         tmp.push(num + 1)
//       } else if(s[p] === ')') {
//         tmp.push(num - 1)
//       } else {
//         tmp.push(num + 1)
//         tmp.push(num - 1)
//         tmp.push(num)
//       }
//     }
//     queue = [...tmp]
//     p++
//   }
//   console.log(queue);

//   return queue.some(num => num === 0)
// };

export function checkValidString(s: string): boolean {
  const left = [];
  const star = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      left.push(i);
    } else if (s[i] === ")") {
      if (left.length) {
        left.pop();
      } else if (star.length) {
        star.pop();
      } else {
        return false;
      }
    } else {
      star.push(i);
    }
  }

  if (left.length) {
    if (star.length) {
      let flag = true;
      for (let i = 0; i < left.length; i++) {
        let k = 0;
        while (star[k] <= left[i] && k < star.length) {
          k++;
        }

        if (k >= star.length) {
          flag = false;
        } else {
          star.splice(k, 1);
        }
      }
      return flag;
    } else {
      return false;
    }
  } else {
    return true;
  }
}
