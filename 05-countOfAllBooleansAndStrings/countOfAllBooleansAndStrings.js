function countOfAllBooleansAndStrings(arr) {
  // Insert code here;
  let amountOfBooleansAndStrings = 0
  for(let i = 0; i < arr.length; i++){
    if (typeof arr[i] == "boolean" || typeof arr[i] == "string") {
      amountOfBooleansAndStrings++
  }
  }
  return amountOfBooleansAndStrings
}

// Do not edit this line;
module.exports = countOfAllBooleansAndStrings;