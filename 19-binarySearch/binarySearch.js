class MySolution {
  constructor() {
    this.flag = false; // this is optional to use;
  }

  binarySearch(nums, target) {
    // // Insert code here;
    
    let leftp = 0
    let rightp = nums.length - 1
    let mid;
    while (leftp <= rightp) {
      mid = Math.floor((rightp + leftp)/2)
      if (nums[mid] === target) {
        return true;
      } else if (nums[mid] > target) {
        // rightp = mid -1;
        return this.binarySearch(nums.slice(leftp, mid -1),target)
      }else {
        leftp = mid + 1;
        // For some reason it works when mid + 2 which shouldn't be the case if this was a recursive call
        return this.binarySearch(nums.slice(leftp+1, rightp), target)
      }
    }
    return false;
  }
}

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;