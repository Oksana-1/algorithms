export const convertToFahrenheit = (celsius) => {
  return (celsius * 9) / 5 + 32;
};
export const reverseString = (string) => {
  return string.split("").reverse().join("");
};
export const factorialize = (number) => {
  if (number === 0) return 1;
  return number * factorialize(number - 1);
};
export const findLongestWordLength = (string) => {
  const sortedWords = string
    .split(" ")
    .sort((prev, next) => (prev.length > next.length ? -1 : 1));
  return sortedWords[0].length;
};
export const largestOfFour = (array) => {
  return array.map(
    (innerArray) => innerArray.sort((prev, next) => (prev > next ? -1 : 1))[0]
  );
};
export const confirmEnding = (string, target) => {
  return Boolean(string.match(`${target}$`));
};
export const repeatStringNumTimes = (str, num) => {
  return num <= 0 ? "" : str + repeatStringNumTimes(str, num - 1);
};
export const truncateString = (str, num) => {
  return str.length > num ? `${str.slice(0, num)}...` : str;
};
export const findElement = (arr, func) => {
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i])) return arr[i];
  }
  return undefined;
};
/*
Check if a value is classified as a boolean primitive. Return true or false.
Boolean primitives are true and false.
*/
export const isBoolean = (value) => {
  return typeof value === "boolean";
};
/*
Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.
For the purpose of this exercise, you should also capitalize connecting words like the and of.
*/
export const titleCase = (string) => {
  return string
    .split(" ")
    .map(
      (word) => word[0].toUpperCase() + word.slice(1, word.length).toLowerCase()
    )
    .join(" ");
};
/*
  You are given two arrays and an index.
  Copy each element of the first array into the second array, in order.
  Begin inserting elements at index n of the second array.
  Return the resulting array. The input arrays should remain the same after the function runs.
*/
export const frankenSplice = (arr1, arr2, n) => {
  const result = [...arr2];
  result.splice(n, 0, ...arr1);
  return result;
};
/*
Remove all falsy values from an array.
Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
Hint: Try converting each value to a Boolean.
*/

export const bouncer = (array) => {
  return array.filter(element => !!element);
}
/*
Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.
For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).
Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).
*/
export const getIndexToIns = (arr, num) => {
  arr.push(num);
  arr.sort((a, b) => a - b);
  return arr.indexOf(num);
}