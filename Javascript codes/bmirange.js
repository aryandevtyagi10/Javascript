function bmiCalculator (weight, height) {
  let bmiround = (weight/(height*height));
  let bmi = bmiround.toFixed(1);
  if (bmi > 24.9){
      return interpretation = "Your BMI is "+ bmi + ", so you are overweight."
  }
  else if (bmi >= 18.5 && bmi <= 24.9){
      return interpretation = "Your BMI is "+ bmi + ", so you have a normal weight."
  }
  else 
  return interpretation = "Your BMI is "+ bmi + ", so you are underweight."
}
bmiCalculator(65,1.8);