function setUnionOfAnyAmountOfSets(...args) {
  let set = new Set()

  for(let i = 0; i < args.length; i++){
    for(let k of args[i]){
      set.add(k)
    }
  } 
  // Insert code here;
  return set
}

// Do not edit this line;
module.exports = setUnionOfAnyAmountOfSets;