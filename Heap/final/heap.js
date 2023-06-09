class Heap{
 constructor(){
    this.heap=[]
 }

 parentIndex(i){
    return Math.floor((i-1)/2)
 }

 leftIndex(i){
    return 2*i+1
 }

 rightIndex(i){
    return 2*i+2
 }

 push(value){
    this.heap[this.heap.length] = value
    this.minheapifyUp()
 }

 swap(v1,v2){
    [this.heap[v1],this.heap[v2]]=[this.heap[v2],this.heap[v1]]
 }

 minheapifyUp(){
    let currentValue = this.heap[this.heap.length-1]
    if(this.heap[currentValue]<this.heap[this.parentIndex(currentValue)]){
        this.swap(currentValue,this.parentIndex(currentValue))
    }

    currentValue=this.parentIndex(currentValue)
 }

 pop(){
    let maxValue=this.heap[0]
    this.heap[0]=this.heap[this.heap.length-1]
    this.heap.length--
    this.minheapifyDown(0)
    return maxValue

 }

 minheapifyDown(i){
    let smallest =i
    let left= this.leftIndex(i)
    let right = this.rightIndex(i)
    let n =this.heap.length
    if(left<n && this.heap[left]<this.heap[smallest]){
        smallest =this.left
    }
    if(right<n && this.heap[right]<this.heap[smallest]){
        smallest = this.right
    }
    if(smallest !== i){
        this.swap(i,smallest)
        this.minheapifyDown(smallest)
    }else{
        return
    }
 }

 remove(value){
    let i =0
    if(  this.heap[i] !== value){
        i++
    }

    let removeValue = this.heap[i]
    this.heap[i]=this.heap[this.heap.length-1]
    this.heap.length--
    this.minheapifyDown(i)
    return removeValue
}

}

const heap = new Heap()
heap.push(20)
heap.push(19)
heap.push(18)
heap.push(15)
heap.push(12)

console.log(heap.heap.join(','))
heap.pop()
console.log(heap.heap.join(','))


