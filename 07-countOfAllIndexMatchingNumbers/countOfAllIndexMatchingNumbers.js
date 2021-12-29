function countOfAllIndexMatchingNumbers(nums) {
  // Insert code here;
  let countOfAllIndexMatchingNumbers = 0;
  for(let i = 0; i < nums.length; i++){
    if(i === nums[i]){
      countOfAllIndexMatchingNumbers++
    }
  }
  return countOfAllIndexMatchingNumbers
}

// Do not edit this line;
module.exports = countOfAllIndexMatchingNumbers;