function sumOfAllOddNumbers(nums) {
  // Insert code here;
  let sumOfAllOddNumbers = 0;
  for(let i =0;i<nums.length;i++){
    if(nums[i]%2 === 1){
      sumOfAllOddNumbers ++
    }
  }
  return sumOfAllOddNumbers
}

// Do not edit this line;
module.exports = sumOfAllOddNumbers;