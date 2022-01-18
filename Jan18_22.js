// This problem was asked by Uber.
// A rule looks like this:

// A NE B
// This means this means point A is located northeast of point B.

// A SW C
// means that point A is southwest of C.

// Given a list of rules, check if the sum of the rules validate. For example:

// A N B
// B NE C
// C N A
// does not validate, since A cannot be both north and south of C.

// A NW B
// A N B
// is considered valid.

// Given a list of rules, check if the sum of the rules validate.
// validate function with rules as parameters, should be an array ?
function validate (...rules) {
	//accept any number of rules
	// access an array of all the rules by using 'arguments' built in variable
	// for each rule we need to check it doesn't disagree with any other rule. HOW ?
	// make a tree ? if a is a node and it is n & w of b then a n b is true
	// N&S? = false
	// E&W = false
	// so we split up the rules first so a nw b is a n b & a w b
	// then loop through all the rules adding each one to a counter object
	// obj would look like {
	//    a:[N B, W B, N B]
	// }
	// add the rules of each counter up and check to see if any rule got crossed by checking to see if there is both N&S or E&W ?- have to be a more complex check see below
	// A:[ N B]
	// B:[N C, E C]
	// C:[ N A]
	// here we get A N A, A E A if we join all of our rules together which should fail
	// A:[ N B]
	// B:[N C, E C]
	// C:[ N A]
  // D:[E F]
  // this chain is also good how do we know we passed x

	for (const rule of rules) {
	}
}