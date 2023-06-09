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
        current.isEndofword=true
    }

    Search(word){
        let current = this.root
        for(let i =0;i<word.length;i++){
            const char= word[i]
            if(!current.children[char]){
                return false
            }
            current = current.children[char]
        }
        return current.isEndofword
    }

}