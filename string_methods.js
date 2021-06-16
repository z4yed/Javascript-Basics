var firstName = "Zayed"
var lastName = "Hassan"

var fullName = firstName.concat(' ',lastName) // any number of arguments
console.log(fullName)

console.log(firstName.substr(0)) // from index to last by default eg: firstName[0:]
console.log(firstName.substr(0, 2)) // from index to next n character
console.log(firstName.charAt(1)) // 2nd character
console.log(fullName.startsWith('Zayed'))  // returns Boolean
console.log(firstName.endsWith("ABC"))


console.log('abc'.toUpperCase())
console.log("aBc".toLowerCase())
console.log(" a b c   ".trim()) // remove front & rear spaces
console.log(fullName.split(' ')) // returns array of strings

console.log(fullName.length)