// Good morning! Here's your coding interview problem for today.

// This problem was asked by Google.

// Given a set of closed intervals, find the smallest set of numbers that covers all the intervals. If there are multiple smallest sets, return any of them.

// For example, given the intervals [0, 3], [2, 6], [3, 4], [6, 9], one set of numbers that covers all these intervals is {3, 6}.

// returns smallest set of numbers that includes all given intervals
const smallestSet = function ( intervalSet ){
	// validate input, ( is a set with arrays each of 2 items that are integers)
  console.log("input validation!")
  // not sure how to check if its a set, other than to use the set constructor on the input to MAKE it so 
  // console.log(' is input a Set ? ', intervalSet === Set)
  // if( !intervalSet===Set){ return Error}
  
  console.log(
		' is input a Set with size greater than 1 ? ',
		intervalSet.size > 1
	)
  if( intervalSet.size < 1){ return}
  
  console.log(' what is the input sets size ?', intervalSet.size)
  for (let interval of intervalSet){
    console.log(
			' the entries of the input set are arrays ? ',
			Array.isArray(interval)
		)
    if(!Array.isArray(interval)){ 
      return
    }
      for( let item of interval){
        console.log(' the each item of the array is a number?', typeof(item) === "number")
        if (!typeof(item) === "number") {
					throw new Error('Something went badly wrong!')
				}
      }
  }

  

	// ... there could be multiple solutions, so do we build all possible sets are return the smallest ?
	// y
	// we need to iterate over intervalSet
	// for each set item ( an array),
	// we look at the index 0 and check if its in the set
	// y - pass over into next item, no action
	// n - check next index
	// ( repeat until last index )
	// y - pass over into next item, no action
	// n - create new copy of set for each index of current item and add each to it's newest splinter set (brute force method)
	// because of this branching we likely have to use recursion. Also, it becomes very costly ~ n^n in worst case... not the nest use case
	// ALTERNATIVE

	// we start by counting the frequency in the intervalSet of each integer, and add the most frequent number to our smallestSet, which we know should be part of the solution.
	let smallestSet = new Set()
	const counter = {}
	console.log(intervalSet)
	// for each interval of the intervalSet
	for (let interval of intervalSet) {
		// for each index of the interval array
		for (let item of interval) {
			// if its in the counter add 1 otherwise, set at 1
			counter[item] ? (counter[item] += 1) : (counter[item] = 1)
			// if it's not already in the counter object
			// if(!counter[item]){
			//   counter[item] = 1
			//   // if it is in the counter object increment it by 1
			// } else {
			//   counter[item] += 1
			// }
		}
	}
	// debugging check of counter object
	console.log(counter)

	// find the most frequent number from counter
	// initialize placeholder outside loop starting at lowest possible value
	let mostFrequentValue = null
	let frequency = 0
	for (let key in counter) {
		if (counter[key] > frequency) {
			// console.log("SYNTAX CHECK IN FREQUENCY LOOP - key:",key, "[key]:",counter[key])
			frequency = counter[key]
			mostFrequentValue = Number(key) // MAKE SURE TO INITIALIZE WITH A NUMBER NOT A STRING
		}
	}
	smallestSet.add(mostFrequentValue)
	// set the weight of the used value to 0
	counter[mostFrequentValue] = 0
	console.log(' DEBUG INITIAL COUNTER AND SMALLEST SET', counter, smallestSet) // initializes properly
	for (let interval of intervalSet) {
		// interval is an array of 2 numbers
		console.log(' in loop, looking at interval:', interval)
		console.log(' smallestSet is:', smallestSet)
		// if either value is contained in the smallest set already
		// console.log("SYNTAX CHECK IN INTERVAL CHECK before subtraction - counter[interval[1]]:",counter[interval[1]])
		if (smallestSet.has(interval[0]) && smallestSet.has(interval[1])) {
			// do nothing if both are already in smallestSet
			console.log('smallest set already contains both values: no change')
		} else if (smallestSet.has(interval[0])) {
			// subtract the other interval value from the counter
			console.log(
				"smallestSet has the lower number: reduce the second's frequency by 1 "
			)
			// console.log(counter[interval[1]])
			counter[interval[1]] -= 1
			// console.log(counter[interval[1]])
		} else if (smallestSet.has(interval[1])) {
			console.log(
				' smallestSet has the greater number: reduce the lowers frequency by 1'
			)
			// console.log(counter[interval[0]])
			counter[interval[0]] -= 1
			// console.log(counter[interval[0]])
		} else {
			// this interval is not included in smallestSet
			console.log(
				"smallestSet doesn't contain either number of the interval, which should we add ?"
			)
			// temp variable to hold the most frequent of the 2 values - to add to smallest set
			let tempAdd =
				counter[interval[0]] > counter[interval[1]] ? interval[0] : interval[1]
			// temp variable to hold the less frequent of the 2 values - to adjust weighted frequency
			let tempReduce =
				counter[interval[0]] < counter[interval[1]] ? interval[0] : interval[1]
			console.log(counter)
			console.log('adding this one', tempAdd)
			console.log('this one is stored in tempReduce', tempReduce)
			smallestSet.add(tempAdd)
			console.log('new smallestSet:', smallestSet)
			// adjust counter weighted frequency
			counter[tempAdd] = 0
			console.log('counter after 0ing out the added value', counter)
			counter[tempReduce] -= 1
			console.log(
				'counter after adjusting the frequency of the other value',
				counter
			)
		}
		// console.log(' DEBUGGING COUNTER:', counter)
		// console.log(' DEBUGGING smallestSet:', smallestSet)
	}
	// after all that looping through and adding based ont eh weighted frequency we should be at the smallest set!
	console.log(' DEBUGGING COUNTER:', counter)
	console.log(' DEBUGGING smallestSet:', smallestSet)
	return smallestSet
}
	// then we iterate through and do the check ( if its in the return set)
  // if an intervalSet array contains no hits we compare the frequency of each value and add the one that is weighted the highest.
  // HOWEVER
	// this doesn't guarantee the most efficient set (items can only occur once in a set)... ex:{[0,1],[0,2],[2,3],[3,4]} 
  // 0 start, then at [2,3], 2 and 3 are weighted the same by frequency BUT 3 is the better choice because it includes the next item instead of 2 which includes the previous.
  // SOLUTION - each time we do the check we subtract from the counter so that the weighted values only account for unchecked intervals!

  mySet = new Set([[0,1],[0,2],[2,3],[3,4]])
  smallestSet( mySet ) // 0,3
  myOtherSet = new Set([[0,1],[2,3],[10,11],[3,10],[0,100]]) // 0, 3, 10
  smallestSet( myOtherSet)
