function pairSum(nums, target) {
  let set = new Set()
  if(nums.length <= 1){
    throw Error
  }
  for(let i = 0; i < nums.length; i++){
    if(set.has(nums[i])){
      return true;
    }else{
      set.add(target - nums[i])
    }
  }
  return false
  // Insert code here;
}

// Do not edit this line;
module.exports = pairSum;