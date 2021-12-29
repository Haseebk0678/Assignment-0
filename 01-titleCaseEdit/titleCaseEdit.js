function titleCaseEdit(title) {
  const words = title.split(" ");
  console.log(words)
  for(let i = 0; i < words.length; i++){
    words[i] = words[i][0].toUpperCase() + words[i].substr(1);
  }
  let sentance = words.join(" ");
  return sentance
  // Insert code here;

}

// Do not edit this line;
module.exports = titleCaseEdit;