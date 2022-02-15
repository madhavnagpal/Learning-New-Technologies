"use strict";

const one = [
  "",
  "one ",
  "two ",
  "three ",
  "four ",
  "five ",
  "six ",
  "seven ",
  "eight ",
  "nine ",
  "ten ",
  "eleven ",
  "twelve ",
  "thirteen ",
  "fourteen ",
  "fifteen ",
  "sixteen ",
  "seventeen ",
  "eighteen ",
  "nineteen ",
];

const ten = [
  "",
  "",
  "twenty-",
  "thirty-",
  "forty-",
  "fifty-",
  "sixty-",
  "seventy-",
  "eighty-",
  "ninety-",
];

const divide = (a, b) => Math.floor(a / b);

const numToWords = (value, label) => {
  let ans = value > 19 ? ten[divide(value, 10)] : "";
  ans += one[value % 10];
  if (value) ans += label;
  return ans;
};

const sayNumberInEnglish = (n) => {
  if (n < 0 || n > 999999999999) return "invalid";
  let result = "";

  if (n >= 10000000) result += numToWords(divide(n, 10000000), "crore ");
  if (n >= 1000000) result += numToWords(divide(n, 1000000) % 10, "million ");
  if (n >= 100000) result += numToWords(divide(n, 100000) % 10, "hundred ");
  if (n >= 1000) result += numToWords(divide(n, 1000) % 100, "thousand ");
  if (n >= 100) result += numToWords(divide(n, 100) % 10, "hundred ");

  result += numToWords(n % 100, "");

  return result.trim();
};

console.log(`5635 in english is: ${sayNumberInEnglish(9672801)}`);
