class Node{
    constructor(value){
        this.value = value
        this.left = null
        this.right=null
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
        const node =new Node(value)
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
            if(root.right === null){
                root.right=node
            }else{
                this.insertNode(root.right,node)
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
        const queue=[]
        queue.push(this.root)
        while(queue.length){
            let current = queue.shift()
            console.log(current.value)
            if(current.left){
              queue.push(current.left)
            }
            if(current.right){
                queue.push(current.right)
            }
        }
    }

    Search(root,value){
        if(!root){
            return false
        }
        if(root.value ===  value){
            return true
        }else if(value<root.value){
            return this.Search(root.left,value)
        }else{
            return this.Search(root.right,value)
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
        if(!root.right && ! root.left){
            return null
        }
        if(!root.right){
            return root.left
        }else if(!root.left ){
            return root.right
            
        }
            root.value = this.min(root.right)
            root.right = this.deleteNode(root.right,value)
        

       }
       return root

    }




}


const bst = new BinarySearchTree()
bst.insert(20)
bst.insert(18)
bst.insert(22)
bst.insert(15)
bst.insert(23)
bst.insert(25)
bst.insert(10)
bst.levelOrder(bst.root)
bst.Search(bst.root,)


