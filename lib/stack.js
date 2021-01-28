// ============================================================================
// Implementation Exercise: Stack
// ============================================================================
class Node {
    constructor(value){
        this.value = value;
        this.next = null; 
    }
}
class Stack {
    constructor(){
        this.top = null;
        this.length = 0;
        
    }
    push(value){
        {
            this.top = new Node(value);
            this.size += 1;
            return this.size;
        }
    }
    pop(value){
        this.top = this.top.previous;
        this.size -= 1;
        return this.top;
 
   }
   size(){
     return this.length

   }
}
 console.log(new Node())
  //console.log(Stack())







//
// -------
// Prompt:
// -------
//
// Implement a Stack and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those 
// in the table provided in the Time and Space Complexity Analysis section
// of your Stack reading!
//
// -----------
// Let's Code!
// -----------

// class Node {

// }

// class Stack {

// }

exports.Node = Node;
exports.Stack = Stack;
