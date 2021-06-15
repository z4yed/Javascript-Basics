var str = '1000'
console.log(str + 5) // displays 10005


// String to Integer
var str = '1000'
console.log(Number.parseInt(str))
// or 
console.log(Number(str))

// Integer to String

let n = 124
console.log(n.toString())

// String to Float
let x = '10.41'
console.log(Number(x))
console.log(Number.parseFloat(x))

// Converting Infinity
console.log(Number(Infinity)) // type number
console.log(String(Infinity)) // string type

// Falsy Values

/* 
    '', 0, null, undefined, Nan
*/

// Truthy string

/* 

    'any string', any negative/positive number, Infinity

*/