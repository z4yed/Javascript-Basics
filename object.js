// var obj = {} // literal
// console.log(typeof obj)

// var new_obj = Object() // Constructor
// console.log(typeof new_obj)


var point = {
    // key: value;
    x: 10,
    y: 20,
    "New Key": "New Value"
}

console.log(point)
point.y = 30 // updating property
point.z = 50 // adding new property
console.log(point)
console.log(point.x) // prints value. DOT notation
console.log(point['x'])
console.log(point['New Key'])  // Array Notation


// removing property
delete point['New Key']

console.log(point)

// comparing objects
console.log({a:10} ===  {a:10})

// converting objects to string
var xxx = {a:10, b:20}
var yyy = {a:10, b:20}

console.log(JSON.stringify(xxx)===JSON.stringify(yyy))

// Checking if a key is in objects

console.log('a' in xxx) // returns true if
console.log('asfdas' in yyy)

// Traversing in object
// for in loop

for (var i in xxx){
    console.log(i, xxx[i])
}