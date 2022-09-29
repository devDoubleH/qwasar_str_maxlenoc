// Given two sorted arrays passed as parameters,
// create a function able to return all the number that are present
// in one array and in the other.

const print_duplicates = (
  arr1: number[],
  num1: number,
  arr2: number[],
  num2: number
) => {
  let i = 0;
  let j = 0;

  while (i < num1 && j < num2) {
    if (arr1[i] < arr2[j]) {
      i++;
    } else if (arr2[j] < arr1[i]) {
      j++;
    } else {
      console.log(arr2[j++]);
      i++;
    }
  }
};
