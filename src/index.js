module.exports = function toReadable (number) {
  let UNIQ_NUM = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
  
  let DECADES = ["twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];

  if (number < 20) return UNIQ_NUM[number];
  if (number < 100) return DECADES[Math.floor(number / 10) - 2] + (number % 10 !== 0 ? " " + toReadable(number % 10) : "");
  if (number < 1000) return UNIQ_NUM[Math.floor(number / 100)] + " hundred" + (number % 100 !== 0 ? " " + toReadable(number % 100) : "");
} 
