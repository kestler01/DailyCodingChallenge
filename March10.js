// write a function that given an amount of cents, returns the minimum number of coins to make up the number of cents using american standard denominations ( 1,5,10,25)

const coins = function (cents, verbose) {
	// verify input
	if (!Number.isInteger(cents) || cents < 0) {
		console.log('cents entered must be a positive integer')
		return
	}
  // console.log(verbose)
  // console.log(typeof(verbose))
  if (verbose === undefined){
    verbose = false
  }
	if (verbose && !typeof(verbose) === "boolean") {
		console.log('arg verbose must be true or false')
		return
	}
	// initiate holder variables of cents remaining and number of coins
	let remainingCents = cents
	let n = 0
	// normalize cents by reducing to lowest dollar
	if (remainingCents >= 100) {
		remainingCents = remainingCents % 100
	}
	// do we even need to give change ?
	// if verbose, log out numbers of each
	if (remainingCents === 0) {
    if(verbose){
      console.log('no change needed')
    }
		// return n // redundant
	} else if(verbose){
    console.log(`give ${remainingCents} cents, how few coins can we use to make change ?`)
  }
	// check quarters
	if (remainingCents >= 25) {
		if (verbose) {
			console.log(Math.floor(remainingCents / 25), ' quarters')
		}
		n = n + Math.floor(remainingCents / 25)
		remainingCents = remainingCents % 25
	}
	// check dimes
	if (remainingCents >= 10) {
		if (verbose) {
			console.log(Math.floor(remainingCents / 10), ' dimes')
		}
		n = n + Math.floor(remainingCents / 10)
		remainingCents = remainingCents % 10
	}
	// check nickels
	if (remainingCents >= 5) {
		if (verbose) {
			console.log(Math.floor(remainingCents / 5), ' nickles')
		}
		n = n + Math.floor(remainingCents / 5)
		remainingCents = remainingCents % 5
	}
	// check pennies
	if (remainingCents >= 1) {
		if (verbose) {
			console.log(Math.floor(remainingCents), ' pennies')
		}
		n = n + remainingCents
		remainingCents = 0
	}
	//return count of coins
  console.log("total coins:", n )
  return n
}

// testing
const goodInput = [0,1,6,13,25,51,99,125,433]
const badInput = [-0, -10, 1.5,"2", 1/3, "twenty two"]
coins(6)
coins(6, true)
coins(6, false)
goodInput.forEach(n => {
  coins(n, true)
});
badInput.forEach(n => {
  coins(n)
})
