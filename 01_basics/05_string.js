let name = "Prakhar"
let repoCount = 60

// console.log("My name is " + name + " and my repo count is " + repoCount)

console.log(`My name is ${name} and my repo count is ${repoCount}`) // String Interpolation

const gameName = new String('Prakhar PV') // gives a lot of string methods

// console.log(gameName)
// console.log(typeof(gameName))

// console.log(gameName[0])
// console.log(gameName.__proto__) // gives the type of the data type
// console.log(gameName.length)
// console.log(gameName.toLowerCase())
// console.log(gameName.toUpperCase())
// console.log(gameName.charAt(4))
// console.log(gameName.indexOf('V'))


// let newString = gameName.substring(0, 7)
// console.log(newString)

// let anotherString = gameName.slice(-8, 4)
// console.log(anotherString)

let newStringOne = "     hitesh    "
console.log(newStringOne)
console.log(newStringOne.trim())

let url = "https://hitesh.com/hitesh%20chaudhary"
console.log(url.replace("%20", "-"))
console.log(url.includes("hitesh"))

let names = "prakhar karan abhay ved vikrant"
let namesArr = names.split(" ")

console.log(namesArr)