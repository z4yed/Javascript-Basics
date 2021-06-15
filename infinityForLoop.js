

for (; ;){
    var rand = Math.floor(Math.random() * 10 + 1);
    if (rand === 10)
    {
        console.log("Winner Winner Chicken Dinner. ")
        break;
    }
    else
    {
        console.log("You've got : ", rand)
    }
}