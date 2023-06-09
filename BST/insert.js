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
            if(root.left===null){
                root.left=node
            }else{
                this.insertNode(root.left,node)
            }
        }else{
            if(root.right===null){
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
bst.insert(13)
bst.insert(10)
bst.insert(7)
bst.insert(12)
bst.insert(11)
bst.insert(27)
bst.insert(23)
bst.insert(28)
bst.insert(26)
bst.insert(30)

console.log(bst.Search(bst.root,13))
console.log(bst.Search(bst.root,10))
console.log(bst.Search(bst.root,7))
console.log(bst.Search(bst.root,6))