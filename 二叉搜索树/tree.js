// BST binary search tree 二叉搜索树
// insert(key) 向树中插入一个新键
// search(key) 在树中查找一个键 true/false
// inOrderTraverse 中序遍历
// preOrderTraverse 先序遍历
// postOrderTraverse 后序遍历
// min
// max
class Node {
  constructor(key) {
    this.key = key
    this.left = null
    this.right = null
  }
}
class BinarySearchTree {
  constructor() {
    this.root = null
  }
  insert(key) {
    const newNode = new Node(key)
    if (this.root === null) {
      this.root = newNode
    } else {
      this.insertNode(this.root, newNode)
    }
  }
  insertNode(node, newNode) {
    if (newNode.key > node.key) {
      if (node.right === null) {
        node.right = newNode
      } else {
        this.insertNode(node.right, newNode)
      }
    } else {
      if (node.left === null) {
        node.left = newNode
      } else {
        this.insertNode(node.left, newNode)
      }
    }
  }
  preOrderTraverse() {
    this.preOrderTraverseNode(this.root)
  }
  preOrderTraverseNode(node) {
    if (node === null) return;
    console.log(node.key);
    this.preOrderTraverseNode(node.left)
    this.preOrderTraverseNode(node.right)
  }
  inOrderTraverse() {
    this.inOrderTraverseNode(this.root)
  }
  inOrderTraverseNode(node) {
    if (node === null) return;
    this.inOrderTraverseNode(node.left)
    console.log(node.key);
    this.inOrderTraverseNode(node.right)
  }
  postOrderTraverse() {
    this.postOrderTraverseNode(this.root)
  }
  postOrderTraverseNode(node) {
    if (node === null) return;
    this.postOrderTraverseNode(node.left)
    this.postOrderTraverseNode(node.right)
    console.log(node.key);
  }
  min() {
    let node = this.root
    while (node.left !== null) {
      node = node.left
    }
    return node.key
  }
  max() {
    let node = this.root
    while (node.right !== null) {
      node = node.right
    }
    return node.key
  }
  search(key) {
    return this.searchNode(this.root, key)
  }
  searchNode(node, key) {
    if (node === null) return false
    if (node.key > key) {
      return this.searchNode(node.left, key)
    } else if (node.key < key) {
      return this.searchNode(node.right, key)
    } else {
      return true
    }
  }
}