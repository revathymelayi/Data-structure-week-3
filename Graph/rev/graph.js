class Graph{
    constructor(){
        this.adjacentlist={}
    }

    addVertex(vertex){
        if(!this.adjacentlist[vertex]){
            this.adjacentlist[vertex]=new Set();
        }

    }
    addEdge(vertex1,vertex2){
        if(!this.adjacentlist[vertex1]){
          this.addVertex(vertex1)
        }
        if(!this.adjacentlist[vertex2]){
            this.addVertex(vertex2)
        }
        this.adjacentlist[vertex1].add[vertex2]
        this.adjacentlist[vertex2].add[vertex1]

    }
   
}