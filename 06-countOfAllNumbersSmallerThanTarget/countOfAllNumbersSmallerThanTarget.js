function countOfAllNumbersSmallerThanTarget(nums, target) {
  // Insert code here;
  let amountOfNumbers = 0
  for(let i = 0; i < nums.length; i++){
    if (nums[i] < target) {
      amountOfNumbers++
  }
  }
  return amountOfNumbers
}

// Do not edit this line;
module.exports = countOfAllNumbersSmallerThanTarget;