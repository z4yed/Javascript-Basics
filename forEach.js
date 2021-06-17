var arr = [10, 40, 12, 22]

// var sum = 0
// arr.forEach(function(value, index, arr) {
//     // console.log(value, index, arr)
//     sum += value
// })

// console.log(sum)


// Implementing ForEach function

function forEach(arr, cb){
    for (var i = 0; i < arr.length; i++)
    {
        cb(arr[i], i, arr);
    }
}

var sum = 0

forEach(arr, function(value, index, arr){
    sum += value;
})

console.log(sum);