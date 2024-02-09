let originalString = "!asiL evol I"

function reverseString(str) {
  let string2 = "";
  for(let i = str.length-1; i >= 0; i--) {
    string2 += str[i]
  }
  return string2
}

console.log(reverseString(originalString))