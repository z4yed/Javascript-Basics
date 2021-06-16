var addition = function(a, b){
    return a+b;
}

console.log(addition(10, 40))

var new_addition = addition

console.log(new_addition(12, 23))

setTimeout(function(){
    console.log("3 Second gone. ")
}, 3000)