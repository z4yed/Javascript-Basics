function sample(a, b, cb){
	var c = a + b
	var d = a - b

	var result = cb(c, d)
	return result
}



function sum(a, b){
	return a + b;
}

var result = sample(5, 8, sum) // returns 10
console.log(result)

// we can pass existing function or we can implement in our on way

var result2 = sample(5, 8, function(c, d){
	// c is a + b
	// d is a - b
	return c - d;
})

console.log(result2)
