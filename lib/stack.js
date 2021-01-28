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
    pop(){
        if(this.length === 0)return null;
        if(this.length === 1){
            const popped = this.top
            //const next = popped.next
            this.top = null
            this.length -= 1;
            return popped.value;
        }
        const popped = this.top
        const next = popped.next
        this.top = next
        this.length -= 1;
        return popped.value;
 
   }
   size(){
     return this.length

   }
}
 console.log(new Node())
  //console.log(Stack())


exports.Node = Node;
exports.Stack = Stack;
