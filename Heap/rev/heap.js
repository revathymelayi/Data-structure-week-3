class Heap{
    constructor(){
        this.heap =[]
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
        this.minheapifyUp()
    }
    minheapifyUp(){
        let currentVal= this.heap[this.heap.length-1]
        if(this.heap[currentVal]<this.heap[this.getParentIndex(currentVal)]){
            this.swap(currentVal,this.getParentIndex(currentVal))
            currentVal = this.getParentIndex(currentVal)
        }

    }
    pop(){
        let maxValue=this.heap[0]
        this.heap[0]=this.heap[this.heap.length-1]
        this.heap.length--
        this.minheapifyDown(0)
        return maxValue
    }

    minheapifyDown(i){
        let smallest = i
        let n = this.heap.length
        let left = this.getleftIndex(i)
        let right = this.getrightIndex(i)
        if(left<n && this.heap[left]<this.heap[smallest]){
            smallest =left
        }
        if(right<n && this.heap[right]<this.heap[smallest]){
            smallest = right
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
        while(this.heap[i]!== value){
            i++
        }
        let removeValue= this.heap[i]
        this.heap[i]=this.heap[this.heap.length-1]
        this.heap.length--
        this.minheapifyDown(i)
        return removeValue

    }
}

const heap = new Heap()
heap.push(10)
heap.push(15)
heap.push(18)
heap.push(20)
heap.push(22)
heap.push(23)
console.log(heap.heap.join(','))
heap.pop()
console.log(heap.heap.join(','))