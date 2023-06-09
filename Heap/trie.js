class trieNode{
    constructor(){
        this.children={}
        this.isEndofword = true
    }
}
  class trie{
    constructor(){
        this.root = new trieNode()
    }
  }
  insert(word){
    let current = this.root
    for(let i =0;i<word.length;i++){
        const char = word[i]
        if(!current.children[char]){
            current.children[char]=new trie(node)
        }
    }

    current = current.children[char]

}

