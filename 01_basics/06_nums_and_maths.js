const score = 400

const balance = new Number(100)

// console.log(score)
// console.log(balance)

// console.log(balance.toString().length)
// console.log(balance.toFixed(2))

const otherNumber = 23.5678;
// console.log(otherNumber.toPrecision(2))

const hundreds = 100000000
// console.log(hundreds)
// console.log(hundreds.toLocaleString()) // Americal Standard
// console.log(hundreds.toLocaleString("en-IN")) // Indian Standard

// +++++++++++++++++++++++++++++++ Maths ++++++++++++++++++++++++++++++++++
console.log(Math)
console.log(Math.abs(-24))
console.log(Math.round(24.3456))
console.log(Math.ceil(24.3456))
console.log(Math.floor(24.3456))
console.log(Math.sqrt(25))
console.log(Math.max(8, 1, 3, 5))
console.log(Math.min(5, 6, 2, 8, 9))

// Math.random()
console.log(Math.random())
console.log(Math.floor(Math.random() * 10) + 1)
console.log(Math.ceil(Math.random() * 100))

const min = 10
const max = 20

console.log((Math.floor(Math.random() * (max - min) + 1)) + min)
console.log((Math.ceil(Math.random() * (max - min))) + min)