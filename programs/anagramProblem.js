/*
  Anagram problem, Compare string
  eg. 
    s = "Hello Hi" // h:2 e:1 l:2 o:1 i:1
    t = "Hello Hi" // h:2 e:1 l:2 o:1 i:1
    function should return boolean true and false, strings are anagram or not
*/

function compareString(str1, str2) {
  if (str1 === str2) {
    return true
  }

  if (str1.length !== str2.length ) {
    return false
  }

  let count = {}

  for(let letter of str1) {
    count[letter] = (count[letter] || 0 ) + 1
  }
  // console.log(JSON.stringify(count));
  // {"s":1,"w":1,"a":1,"p":1,"n":1,"i":1,"l":1}

  for(let char of str2) {
    // if hash not found OR hash value is 0 then return false
    if (!count[char]) {
      return false
    } else {
      // when char found in second str2 then reduce char count by 1
      --count[char]
    }
  }

  return true
}
console.log("--------output----------");

console.log(compareString("swapnil", "swapnil"));
//true

console.log(compareString("swapnil", "patil"));
//false

console.log(compareString("swapnil", "ilswapn"));
//true

console.log("--------end----------");

