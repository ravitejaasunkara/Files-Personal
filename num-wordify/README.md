# NumConverter

NumConverter is a lightweight JavaScript library that allows you to convert large numbers into a more readable format with abbreviated units such as K (thousands), M (millions), and B (billions).

## Installation


```bash
You can install NumConverter via npm:


npm install num-wordify

## Usage

To use NumConverter in your JavaScript project, first import it:

import convert from "num-wordify";

const number1 = 12345;
console.log(convert(number1)); // Output: '12.35K'

const number2 = 123456789;
console.log(convert(number2)); // Output: '123.46M'