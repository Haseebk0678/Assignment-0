function productOfAnyAmountOfNumbers(...args) {
  // Insert code here;
  let productOfAnyAmountOfNumbers = 1;
  for(let i = 0; i < args.length; i++){
    productOfAnyAmountOfNumbers *= args[i]
  }
  return productOfAnyAmountOfNumbers
}

// Do not edit this line;
module.exports = productOfAnyAmountOfNumbers;