/* A valid Indian mobile number has to have an optional +91 or 0 in the beginning, then an optional space and 10 digits */

const one = validateMobile("12345678901"); // false
const two = validateMobile("+919876543210"); // true

console.log("one: ", one);
console.log("two: ", two);

function validateMobile(number) {
  const validRegEx = /^((\+91)|0)?\ ?\d{10}$/g;
  return validRegEx.test(number);
}
