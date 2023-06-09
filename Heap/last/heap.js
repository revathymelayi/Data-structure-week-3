class Heap{
    constructor(){
        this.heap=[]
    }

    getParentIndex(i){
        return Math.floor((i-1)/2)
    }

    getLeftIndex(i){
        return 2*i+1
    }
    getRightIndex(i){
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
        let currentValue = this.heap[this.heap.length-1]
        if(this.heap[currentValue]<this.heap[this.getParentIndex(currentValue)]){
            this.swap(currentValue,this.getParentIndex(currentValue))
        }
        currentValue=this.getParentIndex(currentValue)
    }

    pop(){
        let maxValue=this.heap[0]
        this.heap[0]=this.heap[this.heap.length-1]
        this.heap.length--
        this.minHeapifyDown(0)
        return maxValue
    }

    minHeapifyDown(i){
        let smallest =i
        

    }
}


