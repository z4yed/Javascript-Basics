var array = [1, 5, 9 , 6]

console.log(array.join(','))  // generate strings

array.fill(0)  // makes all the elemets 0

console.log(array)

var newArray = [1, 2, 3, 4]

var merged_array = array.concat(newArray) //
console.log(merged_array)


// Copying array
var copied_array = Array.from(merged_array)
// copied_array = merged_array; // only will give a reference; if elements of copy array changed, merged array will also changed. 
console.log(copied_array)