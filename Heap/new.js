function heapSort(arr){
    for(let i = Math.floor(arr.length/2)-1;i<=0;i--){
        heapify(arr,i,arr.length)
    }
    for(let i =arr.length-1;i>0;i--){
        [arr[0],arr[i]]=[arr[i],arr[0]]
        heapify(arr,0,i)
    }
}

function heapify(arr,parent,n){
    let largest = parent
    let left = 2*parent+1
    let right = 2*parent+2
    if(left<n && arr[left]<arr[largest]){
        largest = left
    }
    if(right<n && arr[right]<arr[largest]){
        largest = right
    }
    if(largest!= parent){
       [arr[largest],arr[parent]]=[arr[parent],arr[largest]]
    }
}

const arr = [7,2,5,1,9,8]
heapSort(arr)
const largest = arr[0]
console.log(arr)
console.log(largest)

