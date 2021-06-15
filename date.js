var date = new Date()

console.log(date)
console.log(date.toDateString())
console.log(date.toTimeString())
console.log(date.toLocaleString())
console.log(date.toLocaleDateString())
console.log(date.toLocaleTimeString())


console.log(date.getFullYear())
console.log(date.getMonth() + 1)  // As count starts from 0
console.log(date.getDate())


console.log(date.getHours()) // 24 hours format
console.log(date.getMinutes())
console.log(date.getSeconds())