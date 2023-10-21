console.log(gameName[0])
console.log(gameName.__proto__) // gives the type of the data type
console.log(gameName.length)
console.log(gameName.toLowerCase())
console.log(gameName.toUpperCase())
console.log(gameName.charAt(4))
console.log(gameName.indexOf('V'))


let newString = gameName.substring(0, 7)
console.log(newString)

let anotherString = gameName.slice(-8, 4)
console.log(anotherString)