// var sum = 0

// var i = 0 // initialization

// while (i<=100) // condition
// {
//     sum += i;  //  statements
//     i++;   // increment/decrement
// } 

// console.log(sum)

var isRunning = true;

while (isRunning)
{
    var rand = Math.floor(Math.random() * 10 + 1);
    if (rand === 10)
    {
        console.log("Winner Winner Chicken Dinner. ")
        isRunning = false;
    }
    else
    {
        console.log("You've got : ", rand)
    }
}