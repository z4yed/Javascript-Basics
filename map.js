// traverse in an array and return an modified array.

var arr = [1, 2, 3]

// var sqrArr = arr.map(function(value, index, arr){
//     return Math.pow(value, 2);
// })

// console.log(arr)
// console.log(sqrArr)

// IMplementing map function

function map(arr, cb){
    var newArr = []

    for (var i = 0; i < arr.length; i++){
       var temp = cb(arr[i], i, arr)
       newArr.push(temp)
    }

    return newArr
}

var sqlArray = map(arr, function(value, index, arr){
    return Math.pow(value, 2)
})

console.log(sqlArray)