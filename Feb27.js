// Let's represent an integer in a linked list format by having each node represent a digit in the number. The nodes make up the number in reversed order.

// For example, the following linked list:

// 1 -> 2 -> 3 -> 4 -> 5
// is the number 54321.

// Given two linked lists in this format, return their sum in the same linked list format.

// For example, given

// 9 -> 9
// 5 -> 2
// return 124 (99 + 25) as:

// 4 -> 2 -> 1
///////////////////////////////////////////////
// DEMO SLL implementation
///////////////////////////////////////////////
class Node {
    // constructor
    constructor(element)
    {
        this.element = element;
        this.next = null
    }
}


// linkedlist class
class LinkedList {
	constructor() {
		this.head = null
		this.size = 0
	}

	// functions to be implemented
	// add(element)
	// adds an element at the end
	// of list
	add(element) {
		// creates a new node
		var node = new Node(element)

		// to store current node
		var current

		// if list is Empty add the
		// element and make it head
		if (this.head == null) this.head = node
		else {
			current = this.head

			// iterate to the end of the
			// list
			while (current.next) {
				current = current.next
			}

			// add node
			current.next = node
		}
		this.size++
	}
	// insertAt(element, location)
	// removeFrom(location)
	// removeElement(element)

	// Helper Methods
	// isEmpty
	// size_Of_List
	// PrintList
}

///////////////////////////////////////////////
const sumLinkedLists = function (list1, list2) {

 let num1Array = []
 let num2Array = []
 console.log( list1, list2)
 let tempNode = list1.head
 for(let i=0; i<list1.size; i++){
  num1Array.unshift(tempNode.element)
  tempNode = tempNode.next
 }
 console.log(num1Array)
 tempNode = list2.head
  for (let j = 0; j < list2.size; j++) {
		num2Array.unshift(tempNode.element)
		tempNode = tempNode.next
	}
  console.log(num2Array)

  let num1 = parseInt(num1Array.join('')) // now a number parsed form joint array string digits
  let num2 = parseInt(num2Array.join('')) // now a number 
  let sum = num1 + num2 //number
  console.log(`num1 ${num1} + num2 ${num2} = ${sum} ? - check`)
  // theres a bette way of doing this... could enumerate over the number instead of the array we are building off of the number.... ?
  let tempString = sum.toString() // number to string 
  let num3Array = tempString.split('') //  string to array 
  let digits = num3Array.length
  let list3 = new LinkedList // make new linkedList from num3Array starting with the lowest digit and going up.
  for ( let k=0; k<digits; k++) {
    list3.add( num3Array[digits-k-1] )
  }
  console.log(list3)
  return(list3)
}

let sixtySix = new LinkedList
sixtySix.add(6)
sixtySix.add(6)
let hundredFifteen = new LinkedList
hundredFifteen.add(5)
hundredFifteen.add(1)
hundredFifteen.add(1)
let ninetyNine = new LinkedList
ninetyNine.add(9)
ninetyNine.add(9)
let seven = new LinkedList
seven.add(7)
let five = new LinkedList 
five.add(5)

sumLinkedLists( ninetyNine, seven)
sumLinkedLists( sixtySix, hundredFifteen)
sumLinkedLists( seven, five)
