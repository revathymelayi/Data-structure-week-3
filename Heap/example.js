class Heap{
    constructor(){
        this.heap = []
    }


 getParentIndex(i){
    return Math.floor((i-1)/2)
 }

 getleftIndex(i){
    return 2*i+1
 }
 getrightIndex(i){
    return 2*i+2
 }
 swap(v1,v2){
    [this.heap[v1],this.heap[v2]]=[this.heap[v2],this.heap[v1]]
 }
 push(value){
    this.heap[this.heap.length]=value
    this.minHeapifyUp()

 }
 minHeapifyUp(){
    let currentIndex = this.heap[this.heap.length-1]
    while (this.heap[currentIndex]<this.heap[this.getParentIndex(currentIndex)]){
        this.swap(currentIndex,this.getParentIndex(currentIndex))
        currentIndex=this.getParentIndex(currentIndex)
    }
 }

 pop(){
    let maxValue = this.heap[0]
    this.heap[0]=this.heap[this.heap.length-1]
    this.heap.length--
    this.minHeapifyDown(0)
    return maxValue
 }

 minHeapifyDown(i){
    let n = this.heap.length
    let smallest = i
    let left =this.getleftIndex(i)
    let right = this.getrightIndex(i)
    if(left<n && this.heap[left]<this.heap[smallest]) {
        smallest = left
    }
    if(right<n && this.heap[right]<this.heap[smallest]){
        smallest = right
    }
    if(smallest !== i){
        this.swap(smallest,i)
        this.minHeapifyDown(smallest)
    }else{
        return
    }
 }
 remove(value){
    let i =0
    while(this.heap[i]!==value){
        i++
    }

    let removeValue = this.heap[i]
    this.heap[i]=this.heap[this.heap.length-1]
    this.heap.length--
    this.minHeapifyDown(i)
    return removeValue
 }

 }