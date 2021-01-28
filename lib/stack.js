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
            const newNode = new Node(value);
            newNode.next = this.top;
            this.top = newNode;
            this.length += 1;
           
            return this.length;
    }
    pop(value){
        this.top = this.top;
        this.size -= 1;
        return this.top;
 
   }
   size(){
     return this.length

   }
}
 console.log(new Node())
  //console.log(Stack())


exports.Node = Node;
exports.Stack = Stack;
