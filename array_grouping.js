const array = [1, 2, 3, 4, 5];

// `Object.groupBy` は任意のキーで値をグループ化します。
// 以下は奇数(odd)と偶数(even)でグループ化しています。
const groupedArray = Object.groupBy(array, (num, index) => {
  return num % 2 === 0 ? 'even': 'odd';
});

console.log(groupedArray);
// =>  { odd: [1, 3, 5], even: [2, 4] }