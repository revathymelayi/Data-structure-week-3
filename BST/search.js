class Node{
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}
class BinarySearchTree{
    constructor(){
        this.root = null
    }
    isEmpty(){
        return this.root === null
    }

    insert(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.root = node
        }else{
            this.insertNode(this.root,node)
        }
    }

    insertNode(root,node){
        if(node.value<root.value){
            if(root.left === null){
                root.left = node
            }else{
                this.insertNode(root.left,node)
            }
        }else{
            if(root.right === null){
                root.right = node
            }else{
                this.insertNode(root.right,node)
            }
        }

    }

    Search(root,value){
        if(!root){
            return false
        }else{
            if(root.value === value){
                  return true
            }else if(value<root.value){
                return this.Search(root.left,value)
            }else{
                return this.Search(root.right,value)
            }
        }
       }
    
   
}

const bst = new BinarySearchTree()

bst.insert(10)
bst.insert(5)
bst.insert(15)
bst.insert(20)
bst.insert(4)
bst.insert(6)
bst.insert(1)

console.log(bst.Search(bst.root,10))
console.log(bst.Search(bst.root,10))
console.log(bst.Search(bst.root,5))
console.log(bst.Search(bst.root,15))
console.log(bst.Search(bst.root,6))