// String literal
var fullName = "Zayed Hassan"

// String Constructor

var fullName2 = String("Zayed Hassan")
var numberedString = String(1234)

console.log(fullName)
console.log(fullName2)
console.log(numberedString)
// all are string type

var sentence = "They've done well. " // correct
var sentence2 = `"Hello" 'there'` // correct ES6
var sentence3 = 'They\'ve done well. '
var xxx = "Double backslash \\\\"
console.log(sentence, sentence2, sentence3, xxx)



// String Comparing

// Follows Ascii table
// a-z > A-Z

var a = 'abc'
var b = 'bac'

console.log(a===b) // false
console.log(a>b) // false
console.log(a<b)  // true