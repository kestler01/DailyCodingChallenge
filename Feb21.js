// This problem was asked by Google.

// Given a string which we can delete at most k, return whether you can make a palindrome.

// For example, given 'waterrfetawx' and a k of 2, you could delete f and x to get 'waterretaw'.

const makePalindrome = function (myString, k) {
  // palindrome is when it is spelled the same backwards as forwards / left to right right to left. 

  // if we have an odd numbers of letter it can be symmetrical around the center, potentially 'lonely' letter. 

  // so first we need to count all the numbers in a counter object
  const counter = {}
  // loop through original myString counting all the letters and their frequency ( edge case for caps, sor bring all to lowercase)
  for (let letter of myString) {
    counter[letter] ? counter[letter] += 1 : counter[letter] = 1;
  }
  console.log("FREQUENCY COUNTER OBJ FROM INPUT STRING:",counter)
  // now that we have all the letters counted we need to know how many of them are counted odd times. 
  let odds= []
  for( key in counter) { // must use 'in' instead of 'of' for objects
    if(counter[key]%2!=0){
      odds.push(key)
    }
  }
  console.log("ODDS COUNTED LETTER ARRAY FROM OBJ:", odds)
  // so now we know that because we need a palindrome we can only have 1 odd letter in odds, IF the sting is also an odd number of letters long... ( because even + even = even, and odd+even = odd, and odd+odd=even; we shouldn't have to check see if the length is odd if we have 1 and only one odd count 
  // NEXT STEP IS to compare the number of odds odds.length to the number of deletes we have, k. and if odds.length - k > 1 we cannot make a palindrome. otherwise we can !
  console.log(" difference of odds.length and k :", odds.length - k)
  if( odds.length - k < 2){
    console.log(true)
    return (true)
  } else { 
    console.log(false)
    return (false)
  }
}

const myString = 'waterrfetawx'
makePalindrome(myString, 2)
makePalindrome(myString, 1)
makePalindrome(myString, 0)
