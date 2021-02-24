export const numberRandomizer = (keys) => {
  let maxNum = null;
  if (typeof keys === 'object') {
    maxNum = Object.keys(keys).length;
  }
  if (typeof keys === 'number') {
    maxNum = keys;
  }
  maxNum -= 0.1;
  return Math.floor(Math.random() * maxNum);
}