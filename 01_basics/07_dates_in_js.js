// Dates in Javascript

let myDate = new Date()

// console.log(myDate)
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toLocaleString())
// console.log(myDate.toLocaleTimeString())
// console.log(typeof myDate)

// // Date(yyyy, mm, dd, hh, mm, ss)
// // let myCreatedDate = new Date(2023, 0, 32, 9, 52, 35)
// let myCreatedDate = new Date("2023-01-24")
// console.log(myCreatedDate.toLocaleString())

// // Time stamp

// let myTimeStamp = Date.now()
// console.log(myTimeStamp)
// console.log(Math.floor(Date.now() / 1000 / 60 / 60))

let newDate = new Date()
console.log(newDate.getFullYear())
console.log(newDate.getMonth())
console.log(newDate.getDate())
console.log(newDate.getDay())
console.log(newDate.getTime())
console.log(newDate.getHours())
console.log(newDate.getMinutes())
console.log(newDate.getSeconds())
console.log(newDate.getMilliseconds())


// Locale String
const customizedDate = newDate.toLocaleString('default', {
    weekday: "long"
})

console.log(customizedDate)