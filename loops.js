function forLoop(arr) {
 for (var i = 0; i < 25; i++) {
   if (i === 0) {
     arr.push("I am 1 strange loop.")
   }
   else {
     arr.push(`I am ${i+1} strange loops.`)
   }
 }
 return arr
}

function whileLoop(num) {
  var countdown = num
  while (countdown > 0) {
    console.log(--countdown)
  }
  return 'done'
}

function doWhileLoop(arr) {
  do {
    arr.pop()
  } while (arr.length > 0 && maybeTrue())
  return arr
}

function maybeTrue() {
  return Math.random() >= 0.5 // Returns a random number between 0 (inclusive) and 1 (exclusive)
}
