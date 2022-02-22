// Good morning! Here's your coding interview problem for today.

// This problem was asked by Two Sigma.

// Using a function rand5() that returns an integer from 1 to 5 (inclusive) with uniform probability, implement a function rand7() that returns an integer from 1 to 7 (inclusive).

rand7() = {
// given the rand5 function giving 5 whole integer choices, to get 7 choices we will have to divide or multiply and round? to ensure even distribution is the trick ... this is the wrong method to preserve the randomness

// 1] could make 2 rolls, the 2nd being -1 and truncated if its larger than 2 after - so given it's perfectly random- 1-5 + 0-2 = 1-7

// 2] could make a two dimensional array with dimensions 5x5, and have each coordinate have an integer from 1-7... 
// 25 cells and 7 goes into that 3 times... 21 | needs 4 0's with every other integer repeated only 3 times.
// after array definition pick a cell by using the [rand5] [rand5]
// if it hits 0 repeat until we hit a non 0. 
}

