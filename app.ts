// Write a function that takes an array of strings and returns
// the longest string that appears in every parameter's strings. If more that one
// string qualifies, it will return the one that appears first in the first
// parameter. Note that the empty string technically appears in any string.

const str_maxlenoc = (arr: string[], num: number) => {
  let result = "";
  for (let i = 0; i < arr[0].length; i++) {
    for (let j = i + 1; j < arr[0].length + 1; j++) {
      let sub = arr[0].slice(i, j);
      if (sub.length > result.length) {
        let count = 0;
        for (let k = 0; k < arr.length; k++) {
          if (arr[k].includes(sub)) {
            count++;
          }
        }
        if (count === num) {
          result = sub;
        }
      }
    }
  }
  return result;
};

console.log(str_maxlenoc(["xoxAoxo", "xoxAox", "oxAox"], 3));