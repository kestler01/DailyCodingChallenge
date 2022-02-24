// You have n fair coins and you flip them all at the same time. Any that come up tails you set aside.
// The ones that come up heads you flip again.
// How many rounds do you expect to play before only one coin remains?


// the odds are that we lose half of the coins each flip
// we can never put partial coins aside so we should round for each loop
// each loop increment a counter and check if we have one left

const flips = function ( n ) { // where n is the number of starting coins
  // validate n is a positive integer 
  if (!Number.isInteger(n) || n <= 0 ){
		console.log('*** invalid input ***')
		console.log('n was passed as : ', n)
		console.log(' n must be a positive non 0 integer ')
		return false
	}
  let flips = 0
  
  const flip = function ( coins ) {
    if( coins == 1) {
      // console.log(` only 1 coin left`)
      return
    } else {
      flips += 1
      let heads = Math.ceil((coins/2)) // we are rounding up because we can never have a partial coin
      // console.log( `we flipped all the coins and have ${heads} heads, this is the ${flips} flip`)
      flip(heads)
    }
  }
  flip(n)
  console.log( ` Given ${n} coins we expect ${flips} flips to have only 1 coins remaining on average`)
  return(flips)
}

let k = 10
let m = -5
let p = 0
let l = 100
let e = 1
let w = 7
flips( 10 ) // 4
flips( 100 ) // 7
flips( 1 ) // 0
flips( 7 ) // 3
flips(-5) // false invalid input
flips(0) // false caught invalid input
flips(5.5) // false caught invalid input