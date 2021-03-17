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
export const isBoolean = (value) => {
  return typeof value === "boolean";
};
export const titleCase = (string) => {
  return string
    .split(" ")
    .map(
      (word) => word[0].toUpperCase() + word.slice(1, word.length).toLowerCase()
    )
    .join(" ");
};
