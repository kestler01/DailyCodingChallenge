// Given an array of integers in which two elements appear exactly once and all other elements appear exactly twice, find the two elements that appear only once.

// const { isInteger } = require("core-js/core/number")

// For example, given the array [2, 4, 6, 8, 10, 2, 6, 10], return 4 and 8. The order does not matter.

// Follow-up: Can you do this in linear time and constant space?

const returnUnique = function (myArray) {
  // input verification 
  if(!Array.isArray(myArray)){
    console.log("invalid input, must pass an array")
    return
  }
  if(myArray.length <= 0){
    console.log("invalid input, array is empty ")
    return
  }

  let counter = {}

  for(let index of myArray){
    if(!Number.isInteger(index)){
      console.log("invalid input, array must only contain integers")
      return
    }
    if(!counter[index]){
      counter[index] = 1
    } else if(counter[index]){
      counter[index]++
    }
  }
  let unique = []
  for(let key of Object.keys(counter)){
    if(counter[key] === 1){
      unique.push(key)
    }
  }
  console.log( unique)
  return unique

}

const demoArray = [2, 4, 6, 8, 10, 2, 6, 10] 
returnUnique(demoArray) // [4, 8]
returnUnique([]) // error
returnUnique([2,3,4,'4']) // error