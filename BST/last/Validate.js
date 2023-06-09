class Node{
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}
class Tree{
    constructor(){
        this.root = null
    }

  checkIsBst(root){
    return this.Validate(root,Number.MIN_VALUE,Number.MAX_VALUE)
  }
  Validate(root,min,max){
    if(root === null ){
        return true
    }
     if(root.value<=min || root.value>=max){
        return false
     }
     return this.Validate(root.left,min,root.value) && this.Validate(root.right,root.value,max)
  }
}

let tree = new Tree
let node1 =new Node(10)
let node2 = new Node(5)
let node3 = new Node(15)
let node4 = new Node(1)
tree.root=node1
node1.left = node2
node1.right = node3
node2.left=node4
console.log(tree.checkIsBst(tree.root))