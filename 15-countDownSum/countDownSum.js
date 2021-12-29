class MySolution {
  countDownSum(num) {
    // Insert code here;
    // There is no number when counted down and summed == 5
    if (num === 0) {
      return 0
    }
    if (num === 1) {
      return 1
    }
    return (num + this.countDownSum(num - 1))
  }
}

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;