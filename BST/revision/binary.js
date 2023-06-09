class Node{
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}
class BinarySearchTree{
    constructor(){
        this.root=null
    }
    isEmpty(){
        return this.root===null
    }
    insert(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.root=node
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
                root.right=node
            }else{
                this.insertNode(root.right,node)
            }
        }

    }

    search(root,value){
        if(!root){
            return false
        }else{
            if(root.value===value){
                return true
            }else if(value<root.value){
               return this.search(root.left,value) 
            }else{
                return this.search(root.right,value)
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
        const queue=[]
        queue.push(this.root)
        while(queue.length){
            let current = queue.shift()
            console.log(current.value)
            if(current.left){
                queue.push(current.left)
            }if(current.right){
                queue.push(current.right)
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
    if(root===null){
        return root
    }
    if(value<root.value){
        root.left = this.deleteNode(root.left,value)
    }else if(value>root.value){
        root.right = this.deleteNode(root.right,value)
    }else{
        if(!root.left && !root.right){
            return null
        }
        if(!root.left){
            return root.right
        }
        else if(!root.right){
            return root.left
        }
        root.value=this.min(root.right)
        root.right =this.deleteNode(root.right,root.value)
        // root.value=this.max(root.left)
        // root.left=this.deleteNode(root.left,root.value)
    }
    return root
  }


}

const bst = new BinarySearchTree()
bst.insert(10)
bst.insert(8)
bst.insert(7)
bst.insert(5)
bst.insert(12)
bst.insert(13)
// console.log(bst.search(12))
// console.log(bst.min(bst.root))
// console.log(bst.max(bst.root))
// bst.levelOrder(bst.root)
bst.deleteNode(bst.root,10)
bst.levelOrder(bst.root)
// bst.preOrder(bst.root)
//     10
//    /  \
//   8   12
//  /     \
//  7      13
//  /
//  5
