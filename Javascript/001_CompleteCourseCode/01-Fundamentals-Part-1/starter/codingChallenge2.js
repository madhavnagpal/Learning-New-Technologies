function calculateBmi(mass, height) {
  return mass / (height * height);
}

const bmiJohn = calculateBmi(79, 1.6);
const bmiMark = calculateBmi(105, 1.7);

if (bmiJohn > bmiMark) {
  console.log(`John's Bmi(${bmiJohn}) is higher than Mark's Bmi(${bmiMark})`);
} else if (bmiMark > bmiJohn) {
  console.log(`Mark's Bmi(${bmiMark}) is higher than John's Bmi(${bmiJohn})😍`);
} else {
  console.log(`John and Mark has same bmi(${bmiMark}) 😂`);
}
