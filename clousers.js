function add(){
	let counter = 0;
	console.log(" Add Function Called. ")

	return function(){
		counter += 1; 
		console.log(counter);
	}
}


let increase = add()
increase()
increase()
increase()
