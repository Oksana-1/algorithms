export const convertToFahrenheit = (celsius) => {
  return (celsius * 9) / 5 + 32;
};
export const reverseString = (string) => {
  return string.split('').reverse().join('');
}
export const factorialize = (number) => {
  if (number === 0) return 1;
  return number * factorialize(number - 1);
}