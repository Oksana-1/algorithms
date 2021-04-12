/*
The algorithm to convert from Celsius to Fahrenheit is the temperature in Celsius times 9/5, plus 32.
You are given a variable celsius representing a temperature in Celsius. Use the variable fahrenheit already defined and assign it the Fahrenheit temperature equivalent to the given Celsius temperature. Use the algorithm mentioned above to help convert the Celsius temperature to Fahrenheit.
*/
export const convertToFahrenheit = (celsius) => {
  return (celsius * 9) / 5 + 32;
};
/*
Reverse the provided string.
You may need to turn the string into an array before you can reverse it.
Your result must be a string.*/
export const reverseString = (string) => {
  return string.split("").reverse().join("");
};
/*
Return the factorial of the provided integer.
If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.
Factorials are often represented with the shorthand notation n!
For example: 5! = 1 * 2 * 3 * 4 * 5 = 120
Only integers greater than or equal to zero will be supplied to the function.
*/
export const factorialize = (number) => {
  if (number === 0) return 1;
  return number * factorialize(number - 1);
};
/*
Return the length of the longest word in the provided sentence.
Your response should be a number.
*/
export const findLongestWordLength = (string) => {
  const sortedWords = string
    .split(" ")
    .sort((prev, next) => (prev.length > next.length ? -1 : 1));
  return sortedWords[0].length;
};
/*
Return an array consisting of the largest number from each provided sub-array.
For simplicity, the provided array will contain exactly 4 sub-arrays.
Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].
 */
export const largestOfFour = (array) => {
  return array.map(
    (innerArray) => innerArray.sort((prev, next) => (prev > next ? -1 : 1))[0]
  );
};
/*
Check if a string (first argument, str) ends with the given target string (second argument, target).
This challenge can be solved with the .endsWith() method, which was introduced in ES2015.
But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.
*/
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
  return array.filter((element) => !!element);
};
/*
Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.
For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).
Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).
*/
export const getIndexToIns = (arr, num) => {
  arr.push(num);
  arr.sort((a, b) => a - b);
  return arr.indexOf(num);
};
/*
Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.
For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.
The arguments ["hello", "hey"] should return false because the string hello does not contain a y.
Lastly, ["Alien", "line"], should return true because all of the letters in line are present in Alien.
*/
export const mutation = (array) => {
  const letters = array[1].toLowerCase().split("");
  const word = array[0].toLowerCase();
  return !letters.some((letter) => word.indexOf(letter) === -1);
};

/*
Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.
 */
export const chunkArrayInGroups = (array, size) => {
  if (array.length <= size) {
    return [array];
  } else {
    return [array.slice(0, size)].concat(
      chunkArrayInGroups(array.slice(size), size)
    );
  }
};
/*
We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.
For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.
*/
export const sumAll = (array) => {
  const [min, max] = [...array].sort((a, b) => a - b);
  return max === min
    ? min
    : sumAll([min, max-1]) + max;
}
/*
Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both.
In other words, return the symmetric difference of the two arrays.
*/
export const diffArray = (arr1, arr2) => {
  return [... arr1, ...arr2].filter(item => !arr1.includes(item) || !arr2.includes(item));
}
/*
You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments.
Remove all elements from the initial array that are of the same value as these arguments.
Note: You have to use the arguments object.
*/
export const destroyer = (array) => {
  const elementsToDelete = Array.prototype.slice.call(arguments,1);
  return array.filter(element => !elementsToDelete.includes(element));
}