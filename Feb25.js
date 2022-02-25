// This problem was asked by Google.

// Given the root of a binary search tree, and a target K, return two nodes in the tree whose sum equals K.

// For example, given the following tree and K of 20

//     10
//    /   \
//  5      15
//        /  \
//      11    15
// Return the nodes 5 and 15.

// Sample BST node class
// class Node {
// 	constructor(data,) {
// 		this.data = data
// 		this.left = null
// 		this.right = null
// 	}
// }

const BSTsum = function ( root, k) {
// suggestion of input validation
if(!root || !k) {
  console.log("invalid input")
  return
}
// place holder for the starting subtree to navigate based on the root value and target
let initNode
// if the root value is less than the target we start with the 2nd node as root.right
if( root.data < k) {
 initNode = root.right
 // if the root value is greater than the target we want the 2nd node to start as root.left 
 // edge case of the root value = k, but we need to return 2 nodes so we should start with root.left to move towards smaller values
} else if ( root.data >= k) {
  initNode = root.left
}
const sumNodes = function ( node1, node2) {
  if( node1 || node2 == null){
    console.log("found edge")
    return
  }
  let sum = node1.data + node2.data
  if(sum<k){
    // if the sum is less than the target we need to search the right subtrees
    sumNodes(node1.right, node2)
    sumNodes(node1, node2.right)
  } else if(sum>k){
    // if the sum is greater than the target we need to search the left subtrees
    sumNodes(node1.left, node2)
    sumNodes(node1,node2.left)
  } else {
    // last case is that we are on target, return the nodes!
    console.log( `we have found a pair of nodes that sum to the target${k}, ${node1} and ${node2}`)
    return ( node1, node2)
  }

}
return (sumNodes(root, initNode))
}
// let root=
// let k = 20
// BSTsum(root, k)

// need to write node constructors and build tree before testing. 
