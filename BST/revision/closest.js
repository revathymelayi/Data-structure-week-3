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
        return this.root === null
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
    levelOrder(root){
        const queue =[]
        queue.push(this.root)
        while(queue.length){
            let current=queue.shift()
            console.log(current.value)
            if(current.left){
                queue.push(current.left)
            }if(current.right){
                queue.push(current.right)
            }
        }
    }

    closestValue(root,target){
        let closest=root.value
        while(root){
            if(Math.abs(root.value-target)<Math.abs(closest-target)){
                closest=root.value
            }
            if(target<root.value){
                 root=root.left
            }
            else{
                root=root.right
            }
        }
        return closest
    }

 
}

const bst = new BinarySearchTree()
bst.insert(20)
bst.insert(18)
bst.insert(19)
bst.insert(16)
bst.insert(30)
bst.insert(25)
bst.insert(15)
// bst.levelOrder(bst.root)

console.log(bst.closestValue(bst.root,29));