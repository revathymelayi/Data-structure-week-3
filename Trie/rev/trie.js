class TrieNode{
    constructor(){
        this.children = {}
        this.isEndofword = false
    }
}
class Trie{
  constructor(){
    this.root = new TrieNode()
  }
  
  insert(word){
    let current = this.root
    for(let i =0;i<word.length;i++){
        const char =word[i]
        if(!current.children[char]){
            current.children[char]=new TrieNode()
        }
        current = current.children[char]
    }
    current.isEndofWord=true
   }

   Search(word){
    let current = this.root
    for(let i =0;i<word.length;i++){
        const char = word[i]
        if(!current.children[char]){
            return false
        }
        current = current.children[char]
    }
    return current.isEndofWord
   }

   print(){
    let words=[]
    let stack =[]
    stack.push([this.root,""])
    while(stack.length>0){
        let [node,word] = stack.pop()
        if(node.isEndofWord){
            words.push(word)
        }
      for(let char in node.children){
        stack.push([node.children[char],word+char])
      }
    }
    return words
   }

   getSuggestions(prefix){
    let suggestions=[]
    let current = this.root
    for(let i =0;i<prefix.length;i++){
        let char = prefix[i]
        if(!current.children[char]){
            return suggestions
        }
        current = current.children[char]
    }
    let stack = [[current,prefix]]
    while(stack.length>0){
        let [node,word] = stack.pop()
        if(node.isEndofWord){
            suggestions.push(word)
        }
        for(let char in node.children){
            stack.push([node.children[char],word+char])
        }

    }
   
    return suggestions
   }
   
}