// This problem was asked by Facebook.

// Write a function that rotates a list by k elements. 
// For example, [1, 2, 3, 4, 5, 6] rotated by two 
// becomes [3, 4, 5, 6, 1, 2]. 

// Try solving this without creating a copy of the list. 
// How many swap or move operations do you need?

const rotateList = function (listArray, k){ // input list( array ) tp be rotated by k elements
  // first, verify input 
  if(!Array.isArray(listArray) || listArray?.length<=0){
    console.log( "list provided was not an array, or is empty")
    return
  }
  if(!Number.isInteger(k)) {
    console.log( "variable k for number of rotations must be an integer")
    return
  }

  // now to do this ' inplace ' without making a copy of the ListArray we will remove ( shift) the first indexed value, cache it and push it on the back and do this k times
  // but what if k is negative ? we should rotate the other way! currently it wont rotate at all
  // we could further optimise by reducing the number of rotations if it is more than the length of the array... 
  if(Math.abs(k)>=listArray.length){
    k = k%listArray.length // k is now the remainder remaining after being divided by the length, so if the length is 9 and k is 9 or 81 we shouldn't rotate 9/9 && 81/9 don't have any remainder. 
    // and edge case for modulo is when called on negative numbers HOWEVER: JS % operator is actually a remainder function instead of true modulo and therefore returns negative numbers as desired for our use-case!
    // console.log( `number of rotations requested is inefficient, reducing required number to most efficient int`)
  }
  if( k > 0 ){
    console.log(
			`the list to rotate is ${listArray}, which will be rotated ${k} times`
		)
		for (let i = 0; i < k; i++) {
			listArray.push(listArray.shift())
		}
  } else if( k < 0 ) {
    console.log(
			`the list to rotate is ${listArray}, which will be rotated ${k} times`
		)
		for (let i = 0; i < -k; i++) {
			listArray.unshift(listArray.pop())
		}
  } // if k = 0 we dont do any rotations before returning the array
  
  console.log(`The newly rotated list is: ${listArray}, which was rotated ${k} times`)
  return listArray
}

let bug = NaN
let setBug = new Set([1,2,3,4])
rotateList([1, 2, 3, 4, 5, 6, 7, 8, 9], 1) // The newly rotated list is: 2,3,4,5,6,7,8,9,1, which was rotated 1 times
rotateList([1, 2, 3, 4, 5, 6, 7, 8, 9], 0) // k = 0
rotateList([1, 2, 3, 4, 5, 6, 7, 8, 9], 9) // k = 0
rotateList([1, 2, 3, 4, 5, 6, 7, 8, 9], 100) // k => 1
rotateList([1, 2, 3, 4, 5, 6, 7, 8, 9], -4) // 6,7,8,9,1,2,3,4,5, which was rotated -4 times
rotateList([1, 2, 3, 4, 5, 6, 7, 8, 9], -400) // k => -4
rotateList([], 0) // error, array is empty
rotateList([1, 2, 3, 4, 5, 6, 7, 8, 9], bug) // k is not a number
rotateList({randomArray:[0,1,2]}, 1) // error, is not an array
rotateList(setBug, 1) // error, is not an array
rotateList( [ [1],[2],[3]], 2) // The newly rotated list is: 3,1,2, which was rotated 2 times
rotateList( ['a','b','c','d','e'], 2) // The newly rotated list is: c,d,e,a,b, which was rotated 2 times
rotateList(['identityBug?'], 5) // The newly rotated list is: identityBug, which was rotated 0 times
rotateList(['identityBug?'], -5) // The newly rotated list is: identityBug?, which was rotated 0 times
