// ============================================================================
// Implementation Exercise: Stack
// ============================================================================
class Node {
    constructor(value){
        this.value = value;
        this.next = next;
    }
}
class Stack {
    constructor(){
        this.top = null;
        this.length = 0;
        // this.previous = null;
        // this.data = data;
    }
    _add(data){
        if (!this.top){
            //const newNode = new Node(data)
            this.top = newNode;
            this.size += 1;
            return this.top;
        }
    }
    myPop(data){
        this.top = this.top.previous;
        this.size -= 1;
        return this.top;
    }
}
// console.log(new Node())
// console.log(Stack())







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

class Node {

}

class Stack {

}

exports.Node = Node;
exports.Stack = Stack;
