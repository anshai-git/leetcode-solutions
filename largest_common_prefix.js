class Trie {
  root;

  constructor() {
    this.root = new Node('');
  }

  save(word) {
    let current_node;
    current_node = this.root;
    for (let i = 0; i < word.length; i++) {
      if (!current_node.has(word[i])) {
        current_node.add(word[i]);
      }
      current_node = current_node.get(word[i]);
    }
  }
}

class Node {
  value;
  children;

  constructor(value) {
    this.value = value;
    this.children = [];
  }

  has(char) {
    return this.children.some(child => child.value == char);
  }

  get(char) {
    return this.children.find(child => child.value == char);
  }

  add(char) {
    this.children.push(new Node(char));
  }
}


const prefix_trie = new Trie();
prefix_trie.save('word');
prefix_trie.save('wood');
prefix_trie.save('world');
prefix_trie.save('work');
prefix_trie.save('worked');

console.log(JSON.stringify(prefix_trie));

function create_node(node_value) {
  const node = document.createElement('div');
  const value_element = document.createElement('div');

  node.appendChild(value_element);
}

const root_element = create_element('ROOT');

function draw_trie(root_node) {
	if (children == null)	{
		
	}
} 
