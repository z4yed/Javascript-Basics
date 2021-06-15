var firstName = ""
var lastName = ""

var fullName = firstName || "Zayed"
fullName += lastName || " Hassan"

console.log(fullName)


var isOk = true

isOk && console.log("Everything is OK. ") // For single Statement

if (isOk) {
    console.log("Everything is OK.")
}