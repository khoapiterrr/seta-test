
/**
 * Find sum of integers on top 2 in array
 */
export const sumOfTop2 = (arr) => {
  //if length of arr <= 2 return sum array
  if (arr.length <= 2) return arr.reduce((a, b) => a + b, 0)
  const [top1, top2] = arr.sort((a, b) => b - a);
  return top1 + top2;
}
/**
 * Find the string length that appear most in array
 */
export const lengthAppearMost = (arr) => {
  const num = [];
  arr.map(e => num[e.length] = num[e.length] ? ++num[e.length] : 1)
  const max = Math.max(...num.filter(x => x !== undefined));
  const index = num.findIndex(x => x === max);
  return arr.filter(x => x.length === index);
}