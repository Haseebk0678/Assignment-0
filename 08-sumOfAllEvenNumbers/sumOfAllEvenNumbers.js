function sumOfAllEvenNumbers(nums) {
  // Insert code here;
  let sumOfAllEvenNumbers = 0;
  for(let i =0;i<nums.length;i++){
    if(nums[i]%2 == 0){
      sumOfAllEvenNumbers ++
    }
  }
  return sumOfAllEvenNumbers
}

// Do not edit this line;
module.exports = sumOfAllEvenNumbers;