// we'll use JS to convert temperatures from celsius (C) to Fahrenheit (F). The formula is.
// . Fahrenheit = (Celsius * 9 / 5)  + 32
// . Celsius = ( Fahrenheit - 32) * 5 / 9

// You can use JavaScript to convert temperatures from Celsius to Fahrenheit and vice versa using the formulas you provided. Here's how you can do it in JavaScript:

// Function to convert Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32
}

// Function to convert Fahrenheit to Celsius
function fahrenheitToCelsius(fahrenheit) {
  return ( fahrenheit - 32)  * 5 / 9
}

// Example usage 
let celsiusTemperature = 25;
let fahrenheitTemperature = celsiusToFahrenheit(celsiusTemperature)
console.log(`${celsiusTemperature}°C is equal to ${fahrenheitTemperature}°F`)

let fahrenheitTemp = 86;
let celsiusTemp = fahrenheitToCelsius(fahrenheitTemp);
console.log(`${fahrenheitTemp}°F is equal to ${celsiusTemp}°C`);
