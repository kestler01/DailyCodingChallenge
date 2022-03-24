// You are controlling a robot that is located somewhere in a room. The room is modeled as an m x n binary grid where 0 represents a wall and 1 represents an empty slot.
// The robot starts at an unknown location in the room that is guaranteed to be empty, and you do not have access to the grid, but you can move the robot using the given API Robot.
// You are tasked to use the robot to clean the entire room (i.e., clean every empty cell in the room). The robot with the four given APIs can move forward, turn left, or turn right. Each turn is 90 degrees.
// When the robot tries to move into a wall cell, its bumper sensor detects the obstacle, and it stays on the current cell.

const { clean } = require("underscore");

// Design an algorithm to clean the entire room using the following APIs:
interface Robot {
  // returns true if next cell is open and robot moves into the cell.
  // returns false if next cell is obstacle and robot stays on the current cell.
  boolean move();

  // Robot will stay on the same cell after calling turnLeft/turnRight.
  // Each turn will be 90 degrees.
  void turnLeft();
  void turnRight();

  // Clean the current cell.
  void clean();
}

// I can think of 2 main approaches to solving this problem 'blind'
 // 1 is to spiral out from the start location, less sure how to handle finding edges here and not overrunning our closest edge to the start point grid-'largest edge' times. 
 // 2 is to start by finding the edges of the room and then spiraling in back to the start point
  // you will always know the dimensions of the rectangle if we follow these steps
    // make this a recursion function with that sets our temp variables for the loops
    // go straight to the N edge 
    // turn right to face east 
    // go straight till we find the NE corner
    // turn right to face down
    // go till we find the SE corner caching the number of moves we make, 
    // this is the y of the room
    // turn right to face west
    // go straight till we find the SW corner caching the number of moves we make on this run
    // this is the x of the room,
    // turn right and begin a recursion loop that is based off the found x and y -- every other in the loop starting from that corner.
    // may want to use a recursion function or just a callback in loops
    // will end in center of room regardless of start position and cover every square at least once, and no more than twice. 
    // if it's desired to not clean each square more than once we can cache where we are starting at the beginning and then check.
    // OR we can try and not overlap via snake game like logic, but it will require more logic checks based on where we started the 'game' 

const cleanRoom = function () {
  // robot starts facing 'up' / 'n'
  let facing = 'Y'
  let tempRun = 1
  let knownX = 1
  let knownY = 1
  let turnCounter = 0

  // helper function
  const moveFindCorners= function async () {
    
    if(await Robot.move()){ // may need to asycn the move helper function and await this api call 
      // if api call return True- position in db api has changed
      tempRun++
      if(facing==='Y' && tempRun>knownY ){
        knownY = tempRun
      } else if(facing === 'X' && tempRun>knownX){
        knownX = tempRun
      }
      // clean this new cell
      // Robot.clean() // if we want everything to be cleaned only once, we don't start right away
    } else {
      // if api call returned False, position in api db has not changed we found a wall fo the room!
      await Robot.turnRight()
      // reset the run
      turnCounter ++
      tempRun = 1
      // turn the facing so we know which direction we're moving
      if(facing === 'Y'){
        facing = 'X'
      } else {
        facing = 'Y'
      }
    }
    // after the 4th turn we know we've found enough corners to have the dimensions of the room, return that value to be used by our spiral cleaner function 
    // base case
    if(turnCounter >= 4){ // (having the greater than here is a safety)
      console.log(`after making 4 turns we KNOW we have found 3 corners, meaning that the dimensions of the room are ${knownX}x,${knownY}y`)
      return ([knownX,knownY])
    } else {
      //recurse until we find the 3 corners
      console.log("still finding corners")
      moveFindCorners()
    }
  }

  const cleanRunTurnRight = function(run){ //we move 'run' spaces 
    for(let i=0; i<run; i++){
      Robot.move()
      Robot.clean()
    }
    Robot.turnRight()
    if(facing === 'Y'){
        facing = 'up'
      } else if(facing==='up') {
        facing='right'
      } else if(facing==='right'){
        facing='down'
      } else if(facing==='down'){
        facing='up'
      }
    return
  }

  moveFindCorners() // after this we know he dimensions and are in the bottom left corner facing up / 'y'
  let x= knownX-1
  let y= knownY

    
    
  cleanRunTurnRight(y-1)// the -1 here takes into account our starting position 
    x--
  cleanRunTurnRight(x)
    y--
  while( y || x > 1){
    cleanRunTurnRight(y)
    x--
    cleanRunTurnRight(x)
    y--
    // cleanRunTurnRight(y)
    // x--
    // cleanRunTurnRight(x)
    // y--
    

  }
}

// Note that the initial direction of the robot will be facing up. You can assume all four edges of the grid are all surrounded by a wall.
// Custom testing:
// The input is only given to initialize the room and the robot’s position internally. You must solve this problem “blindfolded”. In other words, you must control the robot using only the four mentioned APIs without knowing the room layout and the initial robot’s position.
// Input: room = [[1,1,1,1,1,0,1,1],[1,1,1,1,1,0,1,1],[1,0,1,1,1,1,1,1],[0,0,0,1,0,0,0,0],[1,1,1,1,1,1,1,1]], row = 1, col = 3
// Output: Robot cleaned all rooms.
// Explanation: All grids in the room are marked by either 0 or 1.
// 0 means the cell is blocked, while 1 means the cell is accessible.
// The robot initially starts at the position of row=1, col=3.
// From the top left corner, its position is one row below and three columns right.
// Example 2:
// Input: room = [[1]], row = 0, col = 0
// Output: Robot cleaned all rooms.
// Constraints:
// m == room.length
// n == room[i].length
// 1 <= m <= 100
// 1 <= n <= 200
// room[i][j] is either 0 or 1.
// 0 <= row < m
// 0 <= col < n
// room[row][col] == 1
// All the empty cells can be visited from the starting position.