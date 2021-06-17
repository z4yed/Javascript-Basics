console.log(n)
// It returns the same result if the same arguement passes
// It does not cause any observable side effects. 

function sqr(n){
	return n*n;
}

console.log(sqr(5))
console.log(sqr(5))

// sql(n) is a pure function

var n = 10;
function change(){
	n += 100;
}

console.log(n) // 10
change()
console.log(n) // 110 

// change() is not pure cause it has side effect

