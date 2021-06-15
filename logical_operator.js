// &&, ||, !
// true && true = true
// true && false = false
// false && false = false
// false && true = false


// true || true = true
// true || false = True
// false || true = true
// false || false = false

var a = 10
var b = 20
var c = 30
var d = 40

if (b > a && d > c)
{
    console.log("Worked. ")
}

if(!a) // not + true = false
{
    console.log("WTF")
}
else
{
    console.log("Working")
}