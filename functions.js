// function functionName(parameters){
//     statements;
// }

function add(){
    var a = 10;
    var b = 20;
    console.log(a+b)
}

function sub(a, b){
    console.log(a-b)
}

add();
add();
add();
sub(100, 20);

function sum_of_numbers(){
    var sum = 0;
    for(var i=0; i<arguments.length; i++){
        sum += arguments[i]
    }
    return sum
    console.log("will not be executed. ")
}

var total_sum = sum_of_numbers(19, 1, 30, 3, 53, 11)
console.log(total_sum)