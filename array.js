var arr = [1, 3, 4, 5]  // array declaration with literal
console.log(arr)
console.log(arr[0]) // 0 index based

arr[0] = "New Data"  // Value is replacable

arr[9] = 'wtf'

console.log(arr)

console.log(arr[8]) // undefined

console.log(arr.length)


var newArray = Array(1, 2, 3, 10, 20, 5) // using constructor
console.log(newArray)


// Array Traversal

for (var i=0; i<newArray.length; i++)
{

    if (newArray[i]%2){  // odd numbers
        console.log(newArray[i])
    }

}


// Insert & remove elements

var xyz = [10, 20, 30, 40, 50]

xyz.push(60) // inserts at last location
xyz.unshift(0)  // inserts ar index 0
xyz.unshift(1) //


// xyz.splice(index, numberOfElementsToRemove, element(s) to insert)

xyz.splice(0, 2) // remove first two elements
console.log(xyz)

xyz.splice(2, 0, 22, 25) //removes 0 element, inserts 22, 25 from location 2
console.log(xyz)

xyz.splice(2, 1, 24)  // removes 1 element & insert 1 element, works as updating value at that index.

console.log(xyz)

xyz.pop() // removes last elements
console.log(xyz)

xyz.shift() // removes first elements
console.log(xyz)


// Reversing Array.
console.log(xyz.reverse())