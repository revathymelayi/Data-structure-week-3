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
        if(node.value < root.value){
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
            if(value === root.value){
              return true
            }
            else if(value<root.value){
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
    postOrder(root){
        if(root){
            this.postOrder(root.left)
            this.postOrder(root.right)
            console.log(root.value)
        }
    }
    inOrder(root){
        if(root){
            this.inOrder(root.left)
            console.log(root.value)
            this.inOrder(root.right)
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
          root.left= this.deleteNode(root.left,value)
        }else if(value>root.value){
           root.right = this.deleteNode(root.right,value)
        }else{
            if(!root.left && ! root.right){
                return null
            } if(!root.left){
                return root.right
            }else if(!root.right){
                return root.left
            }
            root.value = this.min(root.right)
            root.right = this.deleteNode(root.right,root.value)
        }
        return root
        
    }

    closestValue(root,target){
        let closest = root.value
        while(root){
            if(Math.abs(root.value-target)<Math.abs(closest-target)){
              closest=root.value
            }
            if(target<root.value){
                root=root.left
            }else{
                root=root.right
            }

        }
        return closest
    }
  

}

const bst = new BinarySearchTree()



    bst.insert(15)
    bst.insert(20)
    bst.insert(10)
    bst.insert(7)
    bst.insert(12)
    bst.insert(2)

// console.log(bst.Search(bst.root,2))
// bst.levelOrder(bst.root)
//  console.log("***********")
//   bst.deleteNode(bst.root,15)
 bst.levelOrder(bst.root)

 console.log(bst.closestValue(bst.root,5))