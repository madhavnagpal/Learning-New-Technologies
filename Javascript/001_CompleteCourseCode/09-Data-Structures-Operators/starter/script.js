// Write a program that receives a list of variable names written in underscore_case
// and convert them to camelCase.
// The input will come from a textarea inserted into the DOM (see code below to
// insert the elements), and conversion will happen when the button is pressed.
// Test data (pasted to textarea, including spaces):
// underscore_case
// first_name
// Some_Variable
//  calculate_AGE
// delayed_departure
// Should produce this output (5 separate console.log outputs):
// underscoreCase ✅
// firstName ✅✅
// someVariable ✅✅✅
// calculateAge ✅✅✅✅
// delayedDeparture ✅✅✅✅✅

// GOOD LUCK �

const textAreaNode = document.querySelector('textarea');

const button = document.querySelector('button');

const resultNode = document.querySelector('.result');

button.addEventListener('click', handleCamelCaseConversion);

function underScoreToCamelCase(underScoreStr) {
  const [firstWord, ...restOfWords] = underScoreStr
    .toLowerCase()
    .trim()
    .split('_');
  let camelCaseStr = firstWord;
  restOfWords.forEach(word => {
    camelCaseStr += word[0].toUpperCase() + word.slice(1);
  });
  return camelCaseStr;
}

function handleCamelCaseConversion() {
  const inputStr = textAreaNode.value;
  if (!inputStr) {
    alert('Please enter some input first!');
    return;
  }
  const arr = inputStr.split('\n');
  const convertedArr = arr.map(value => underScoreToCamelCase(value));
  resultNode.innerHTML = convertedArr.join('<br />');
}
