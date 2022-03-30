// This problem was asked by Triplebyte.

// You are given n numbers as well as n probabilities that sum up to 1. Write a function to generate one of the numbers with its corresponding probability.

// For example, given the numbers [1, 2, 3, 4] and probabilities [0.1, 0.5, 0.2, 0.2], your function should return 1 10% of the time, 2 50% of the time, and 3 and 4 20% of the time.

// You can generate random numbers between 0 and 1 uniformly.

const weightedProbability = function (n, probs) {
	// input validation
  // check to make sure they are arrays
  if(!Array.isArray(n) || !Array.isArray(probs)){
    console.log('input error, both inputs must be arrays')
    return 
  } else { // check to make sure arrays contain proper inputs
    if( n.length != probs.length){ // we have the correct number of entries in each array
      console.log('input error, both inputs must have the same length')
      return
    }
    for(let value of n){
      if(typeof(value) != 'number'){ // entries in value array 'n' are all numbers - this could easily be removed to allow for wider use case
        console.log('input error, entries of value array must be of type "number"s')
        return 
      }
    }
    let tempSum = 0 // initiate variable for summing the 'probs' array here to save a loop
    for (let value of probs) {
			if (typeof value != 'number') {
				// entries in probability array 'probs' are all numbers
				console.log(
					'input error, entries of probability array must be of type "number"s'
				)
				return
			}

			tempSum += value // build sum of array values, after we check to make sure it's a number
		}
    if (tempSum != 1){ // sum of all 'prob' array values must equal 1. 
      console.log('input error, entires if probability array must sum to 1')
      return
    }
  }

	// generate a prob array with values of n appearing probs times
    // how do we determine the length ? ... 
      // we push the current value of n[x] value of prob[x]*10 times ?
        // what happens when we want something to occur NOT %10=0 of the time. like say 12%. now we have to have 100 cells. 
        // but if we want 25% it would be more efficient to use 4 indexes instead...
        
        // how do we find the lowest common denominator ? 


        let smallestProb = 1
        for (let value of probs) {
						if (smallestProb > value) {
							// find smallest value
							smallestProb = value
						}
          }
          // console.log(smallestProb)
          // console.log( ' testing modulus 1%7', 1%7)

          const multipleByTen = function (array) {
						for (let i = 0; i < array.length; i++) array[i] = array[i] * 10
					}
					const isAllIntegers = function (array) {
						for (let value of array) {
							if (!Number.isInteger(value)) return false
						}
						return true
					}
					while (!isAllIntegers(probs)) {
						multipleByTen(probs)
            smallestProb = smallestProb*10
						console.log('rebased probs to:', probs)
					}
					let newSum = 0
					for (let values of probs) {
						newSum += values
					}
        const checkDivisibility = function (array, value){ 
          for (let i=0; i<array.length; i++) {
						if (array[i] % value == 0) {
              // console.log('probs',probs)
              // console.log('smallestProb', smallestProb)
              console.log(`checkDivisibility${value}:true`)
              // console.log(' testing modulus 1%7', 1 % 7)
              console.log(array[i],value,array[i] % value)
							return true
						} else {
              console.log(`checkDivisibility ${value}:false`)
              return false
            } 
          }
        }
        let LCD = 1
        const reduceArrayValues = function (array, value){
          console.log('in reduce array, reduce by', value)
                    LCD = LCD * value
          for(let i =0 ; i<array.length; i++){
            array[i] = array[i]/value
          }
        }
        
        if(checkDivisibility(probs, smallestProb)){
          reduceArrayValues(probs, smallestProb)
        }
        while(checkDivisibility(probs, 7)){
          // console.log("in while %7,probs is ", probs)
          reduceArrayValues(probs, 7)
        }
        while(checkDivisibility(probs, 5)){ 
          reduceArrayValues(probs, 5)
        }
        while(checkDivisibility(probs, 3)){
          reduceArrayValues(probs,3)
        }
        while(checkDivisibility(probs, 2)){
          reduceArrayValues(probs,2)
        }
        console.log( " we have found that the LCD of the probs array values is:", LCD)
        console.log( "probs array reduced to :", probs)
				console.log('new sum of probs array is:', newSum)
        let weightedProbs = []
        for(let i=0; i<n.length;i++){
          for(let j=0; j<probs[i];j++){
            weightedProbs.push(n[i])
          }
        }
        console.log("our new weightedProbs array is:", weightedProbs)

        let myReturn = weightedProbs[ (Math.floor(Math.random() * weightedProbs.length)) ]
        console.log("myReturn is :", myReturn)
        return( myReturn )
        // now that probs values are reduced to the lowest common denominator
          // look at smallest value of probs, does it %=0 nicely into the other values ? 
            // yes ? - reduce : divide all the values by that number, then build prob array. remember to be carful while converting
              // even reducing by 2 will make us go from 100 - 50 cells  
            // no ? - try half of smallest prob', then try common bases of primes 7,5,3,2. then try again (so if all are divisible by 10 then we do this twice)
        // is it more efficient to find that just making a big array ?

	// pick an index of the prob array at random using math.random: Math.floor(Math.random() * probArray.length
}
// testing

let valueArray = [1, 2, 3, 4]
let probArray = [0.1, 0.5, 0.2, 0.2]
  weightedProbability(valueArray, probArray)

  weightedProbability(valueArray, [.25, .25, .25, .25])

   weightedProbability(valueArray, [0.2, 0.05, 0.5, 0.25])// need to bring all to same base
