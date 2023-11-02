// Do not change this
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {

  constructor() {
    // Your code here
    this.root = null;
  }

  insert(val, currentNode = this.root) {
    // Your code here
    let node = new TreeNode(val);
    if (!this.root) {
      this.root = node;
    } else {
      let current = this.root;
      // if (node.val < this.root.val) {
      //   // this.root.left = node;
      //   while (current.val ){}
      // } else {
      //   if (node.val > this.root.val) {
      //     this.root.right = node;
      //   }
      // }

      while (current) {
        // console.log(current, 'current', node.val < current.val);
        if (node.val < current.val) {
          if (current.left) {
            current = current.left;
          } else {
            current.left = node;
            break;
          }
        } else if (node.val > current.val) {
          if (current.right) {
            current = current.right;
          } else {
            current.right = node;
            break;
          }
        }
      }

      // console.log('current AFTER', current)
    }
  }

  search(val) {
    // Your code here
  }


  preOrderTraversal(currentNode = this.root) {
    // Your code here
  }


  inOrderTraversal(currentNode = this.root) {
    // Your code here
  }


  postOrderTraversal(currentNode = this.root) {
    // Your code here
  }

  // Breadth First Traversal - Iterative
  breadthFirstTraversal() {
    // your code here
  }

  // Depth First Traversal - Iterative
  depthFirstTraversal() {
    // your code here
  }
}

module.exports = { BinarySearchTree, TreeNode };
