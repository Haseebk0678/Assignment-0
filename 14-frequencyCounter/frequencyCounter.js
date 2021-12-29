function frequencyCounter(word) {
  let charMap = {}
  for (let char of word) {
    // works because of truthy values in js is charMap[char] exists then it would + 1 
    // for that function but if it didn't exist it would go to the next function
    charMap[char] = charMap[char] + 1 || 1
    
  }
  return charMap
}

// Do not edit this line;
module.exports = frequencyCounter;