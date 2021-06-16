var obj = {
    x: 40,
    y: 60,
    z: 75
};

// get all keys as an array
console.log(Object.keys(obj))
// ge all values as an Array
console.log(Object.values(obj))

// get key, value as a two dimentional array
console.log(Object.entries(obj))


// Copying obj to another object

var copied_obj = Object.assign(obj)
console.log(obj, copied_obj)

// don't do copied_obj = obj