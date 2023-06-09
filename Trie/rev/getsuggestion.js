class TrieNode{
    constructor(){
        this.children ={}
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
            const char = word[i]
            if(!current.children[char]){
                current.children[char]=new TrieNode()
            }
            current =current.children[char]
        }
        this.isEndofword=true
    }

    Search(word){
        let current = this.root
        for(let i =0;i<word.length;i++){
            const char =word[i]
            if(!current.children[char]){
                return false
            }
            current = current.children[char]
        }
      return current.isEndofword
    }

    print(){
        let words = []
        let stack =[]
        stack.push([this.root,""])
        while(stack.length>0){
         let [node,word]=stack.pop()
         if(node.isEndofword){
            words.push(word)
         }
         for(let char in current.node){
            stack.push([node.children[char],word+char])
         }
        }
        return words
    }

    getSuggestions(prefix){
        let suggestion=[]
        for(let i =0;i<prefix.length;i++){
            const char=prefix[i]
            if(!current.children[char]){
                return suggestion
            }
            current = current.children[char]
        }

        let stack =[[current,prefix]]
        while(stack.length>0){
            let [node,word]=stack.pop()
            if(node.isEndofword){
                suggestion.push(word)
            }
            for(let char in node.children){
                stack.push([node.children[char],word+char])
            }

        }
        return suggestion

    }
    



}