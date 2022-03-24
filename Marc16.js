

const treeTranversal = function ( root ) { 

  // verify input

  // write helper function

  // cache/ global variable []
  // node counter

    // use a que 
  // const recursion = function (node, level) { 
    // look at given node, add value to cache 
    // incriment node counter
    // increment level
    // optionally chain onto left and right attribute / nodes
    // if(node?.left){
    //   recursion(node.left, level)
    // }
    // if(node?.right){
    //   recursion(node.right, level)
    // }
    // if the node is a leaf left and right are undefined

    // call self on those nodes if the exist 
   
    /////////////////////////////////////////

    // que solution

    // create output variable
    let output= []
    // create que data str
    // add root to que 
    while (que){
      // let lengthOfQ
      let tierLevel = []
      for( let node of que){
        let ParentNode = que.pop(node)
        tierLevel.push(node.value)

        if(node?.left){
          que.add(node.left)
        }
        if(node?.right){
          que.add(node.right)
        }
      }
      output.push(tierLevel)
    }
    return output;
  }
  // linear time and space complexity
  
  // cut up cached array based on node counter 
  //  ex- if node counter is 13
  1,2,4,6
  // return cache