const convertToCelsius = function(fahrenheit) {
  // Conversion equation F -> C
  let celsius = ((fahrenheit - 32)*(5/9))
  // Rounding to 1 decimal
  return Math.round(celsius * 10) / 10
};

const convertToFahrenheit = function(celsius) {
  // Conversion equation C -> F
  let fahrenheit = ((celsius * (9/5)) + 32)
  // Rounding to 1 decimal
  return Math.round(fahrenheit * 10) / 10
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
