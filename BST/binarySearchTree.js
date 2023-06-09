class Node {
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
        return this.root ===null
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

   preOrder(root){
    if(root){
        console.log(root.value)
        this.preOrder(root.left)
        this.preOrder(root.right)
    }
   
   }

   inOrder(){
    if(root){
        this.inOrder(root.left)
        console.log(root.value)
        this.inOrder(root.right)
    }
   }

   postOrder(){
    if(root){
        this.postOrder(root.left)
        this.postOrder(root.right)
        console.log(root.value)
    }
   }

   levelOrder(){
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
   min(root){
    if(!root.left){
      return root.value
    }else{
        return this.min(root.left)
    }
   }

   max(root){
    if(!root.right){
        return root.value
    }else{
        return this.max(root.right)
    }
   }
   delete(value){
    this.root = this.deleteNode(this.root,value)
   }

   deleteNode(root,value){
    if(root === null){
        return root
    }
    if(value<root.value){
        root.left = this.deleteNode(root.left,value);
    }else if (value>root.value){
        root.right = this.deleteNode(root.right,value)
    }else{
        if(!root.left && !root.right){
            return null
        }

        if(!root.left)
        {
            return root.right
        }else if (!root.right){
            return root.left
        }
        root.value = this.min(root.right)
        root.right = this.deleteNode(root.right,root.value)
    }
    
    return root
   }


}

const bst = new BinarySearchTree()

console.log("Tree is empty",bst.isEmpty())

bst.insert(10)
bst.insert(5)
bst.insert(15)
bst.insert(20)
bst.insert(4)
bst.insert(6)
bst.insert(1)

//       10
//    /       \
//    5      15
//   / \       \
//  4   6      20
//  /
//  1
//after delete

//     10
//   /    \
//  4      15
// / \       \
// 1   6      20


// console.log(bst.Search(bst.root,10))
// console.log(bst.Search(bst.root,5))
// console.log(bst.Search(bst.root,15))
// console.log(bst.Search(bst.root,6))
// console.log(bst.min(bst.root))
// console.log(bst.max(bst.root))

// bst.levelOrder(bst.root)
// console.log("***********")
// bst.deleteNode(bst.root,1)
// bst.levelOrder(bst.root)
bst.preOrder(bst.root)