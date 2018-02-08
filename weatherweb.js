// current temperature in Kelvin
const kelvin = prompt('What is the Kelvin temperature today?'); 
// celsius temperature is Kelvin - 273
var celsius = kelvin - 273;
// Calculating Farenheit Temp. from Celsius
var farenheit = celsius * (9/5) + 32;
var fahrenheit = Math.floor(farenheit);
// We print the temperature in fahrenheit to the console.
console.log('The temperature is ' + fahrenheit + ' degrees fahrenheit.');

