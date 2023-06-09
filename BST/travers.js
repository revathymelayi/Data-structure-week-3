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
            if(root.left=== null){
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
    Search(value){
        if(!root){
            return false
        }else{
            if(root.value === value){
            return true
        }else if (value<root.value){
            return this.Search(root.left,value)

        }else{
            return this.Search(root.right,value)
        }

    }
 }

 preOrder(root){
    if(root){
        console.log(root.value)
        this.preOrder(root.left)
        this.preOrder(root.right)
    }
 }

 inOrder(root){
    if(root){
        this.inOrder(root.left)
        console.log(root.value)
        this.inOrder(root.right)
    }

 }
 postOrder(root){
    if(root){
        this.postOrder(root.left)
        this.postOrder(root.right)
        console.log(root.value)
    }
 }


 levelOrder(root){
    const queue = []
    queue.push(this.root)
    while(queue.length){
        let curr = queue.shift()
        console.log(curr.value)
        if(curr.left){
            queue.push(curr.left)
        }
        if(curr.right){
            queue.push(curr.right)
        }
    }
 }

}

const bst = new BinarySearchTree()
bst.insert(70)
bst.insert(80)
bst.insert(20)
bst.insert(60)

bst.preOrder(bst.root)
console.log("******************");
bst.levelOrder(bst.root)
//   10
//  /  \
// 15  20
//    70
//   /  \
// 20   80
//  \
//   60
