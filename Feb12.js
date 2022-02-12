// Good morning! Here's your coding interview problem for today.

// This problem was asked by Twitter.

// Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree. Assume that each node in the tree also has a pointer to its parent.

// According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes v and w as the lowest node in T that has both v and w as descendants (where we allow a node to be a descendant of itself).”

// notice that it is NOT a binary search tree, 
// so there is no guarantee based on the values of where one should be to the other
// I believe then that brute force looping will have to be the way to find the lowest common ancestor

// sample BT class
// class BinaryTree {
// 	constructor() {
// 		// root of a binary tree
// 		this.root = null
// 	}
	// necessary function for implementation
	// insert(data)
	// remove(data)
	// Other Helper functions - Different helper methods can be declared in the BinarySearchTree class as per the requirement.
	// findMinNode()
	// getRootNode()
	// inorder(node)
	// preorder(node)
	// postorder(node)
	// search(node, data) **
// }

// Sample BT node class
// class Node {
// 	constructor(data,) {
// 		this.data = data
// 		this.left = null
// 		this.right = null
//    this.parent = null
// 	}
// }
// unsure how to initialize the parent relationship pointer don't want to looping infinitely

// Sample search method for BST 
// search(node, data) FROM BST - will have to be modified for BT
// {
// 	// if trees is empty return null
// 	if (node === null) return null
// 	// if data is less than node's data
// 	// move left
// 	else if (data < node.data) return this.search(node.left, data)
// 	// if data is less than node's data
// 	// move right
// 	else if (data > node.data) return this.search(node.right, data)
// 	// if data is equal to the node data
// 	// return node
// 	else return node
// }

// although binary tree is given for the problem, I do not believe it is necessary to include as a function argument, unless we want to check input by searching for the given nodes in the tree to start. 
const LCA = function ( nodeV, nodeW) {

  // local helper function declaration, recurs 'down' to leafs
  const searchChildren = function (node, targetNode) {
		// recursive function therefore start with base case - end of tree
		if (node === null) {
			return null
			// if one of the children nodes are the target we return true
		} else if (node.left === targetNode || node.right === targetNode) {
			return true
		} else {
			// otherwise we keep searching the tree
			searchChildren(node.left, targetNode)
			searchChildren(node.right, targetNode)
		}
	}
  // local helper function declaration, recurs 'up' to root
  const findLCA = function (subRoot, target) {
    // if this subroot has the target then it is the LCA
    if (searchChildren(subRoot, target) === true) {
			return subRoot
		} else {
			findLCA(subRoot.parent, target)
		}
  }

  return(findLCA( nodeV, nodeW))
  // if not, then go to nodeV parent, and check the other subtree to see if we find nodeW 
  // if not we to the next parent and check the next sub tree repeat until the root and if not found return null. (given valid input it WILL be found)

}