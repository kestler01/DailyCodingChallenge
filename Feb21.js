// This problem was asked by Google.

// Given a string which we can delete at most k, return whether you can make a palindrome.

// For example, given 'waterrfetawx' and a k of 2, you could delete f and x to get 'waterretaw'.

const makePalindrome = function (myString, k) {
  // palindrome is when it is spelled the same backwards as forwards / left to right right to left. 

  // if we have an odd numbers of letter it can be symmetrical around the center, potentially 'lonely' letter.
  
  // input of myString should be normalized to lowercase with no spaces and have this new string cached for us to work with
  const myNewString = myString.split(' ').join('').toLowerCase()
  console.log( myNewString)
  // so first we need to count all the numbers in a counter object
  const counter = {}
  // loop through original myString counting all the letters and their frequency ( edge case for caps, sor bring all to lowercase)
  for (let letter of myNewString) {
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
    console.log(true, ' string has correct letter frequency to potentially be a palindrome, lets check it')
    // return (true)
  } else { 
    console.log(false, ' string cannot be a palindrome based on letter frequency')
    return (false)
  }
  // I have realized that the question doesn't allow use to rearrange letters only delete them... so we need to re think our approach. 
  // the code above DOES tell us if it is possible but now we need to check the input string. May leave in place as a good valid check for input before loop crazy-ness. 
  // to check the input string, we should loop through to the middle and look for 'matching blocks' we can string together that line up with any blocks in the 2nd half.
  // if we dont have a palindrome then we remove a letter that isn't in one fo those blocks and check again. 
  // while we have deletes available or have used our last delete 
   let stringLength= myNewString.length;
   let stringBlocks= []

  while( k > -1){
    let tempBlock = []
    // loop through front half of string, rounding down for odds because we would be symmetrical about the center
    for(let i=0; i< (stringLength%2===0? (stingLength/2-1) : (stringLength/2 -2)); i++){
      // if the letters in the corresponding parts match add it to our NewBlock Array.
      if( myNewString[i] === myNewString[stringLength-(i+1)]){
				tempBlock.push(myNewString[i])
				// heres the kicker, what do we do when we don't have the palindrome yet? we need to make a cut, but do we cut the letter in the front or back half of the string? if we check the index's next to our letter for matches with the other, or vice versa, we may justify a cut.
				// if the next letter matches the the symmetry one
			} else if (myNewString?.[i+1] === myNewString?.[stringLength - (i+1)]) {
        // remove this letter 
        // 
			}
      // || myNewString[i] === myNewString?.[stringLength-(i+1)]
    }


  }
}

const myString = 'Waterr fetawx'
makePalindrome(myString, 2)
makePalindrome(myString, 1)
makePalindrome(myString, 0)
