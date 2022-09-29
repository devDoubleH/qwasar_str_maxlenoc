// Write a function that takes an array of strings and returns
// the longest string that appears in every parameter's strings. If more that one
// string qualifies, it will return the one that appears first in the first
// parameter. Note that the empty string technically appears in any string.

const str_maxlenoc = (arr: string[], num: number): string => {
  const str = arr[0];
  let result = "";
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length + 1; j++) {
      const sub = str.slice(i, j);
      if (sub.length > result.length && arr.every((str) => str.includes(sub))) {
        result = sub;
      }
    }
  }
  return result;
};
