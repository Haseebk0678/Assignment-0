function countOfAllBooleans(arr) {
  // Insert code here;
  let amountOfBooleans = 0
  for(let i = 0; i < arr.length; i++){
    if (typeof arr[i] == "boolean") {
      amountOfBooleans++
  }
  }
  return amountOfBooleans
}

// Do not edit this line;
module.exports = countOfAllBooleans;