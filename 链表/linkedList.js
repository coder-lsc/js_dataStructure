// append(element)
// insert(position, element)
// get(position)
// indexOf() 返回索引或-1
// update(position, element) 修改

class Node {
  constructor(element) {
    this.element = element;
    this.next = null
  }
}

class LinkedList {
  constructor() {
    this.head = null
    this.length = 0
  }
  append(element) {
    const newNode = new Node(element)
    if (!this.head) {
      this.head = newNode
    } else {
      let current = this.head
      while (current.next) {
        current = current.next
      }
      current.next = newNode
    }
    this.length++
  }
  insert(position, element) {
    if (position < 0 || position > this.length) { return false }

    const newNode = new Node(element)

    if (position === 0) {
      newNode.next = this.head
      this.head = newNode
    } else {
      let previous = null
      let current = this.head
      for (let i = 0; i < position; i++) {
        previous = current
        current = current.next
        
        if (i === position - 1) {
          newNode.next = current
          previous.next = newNode
        }
      }
    }
    this.length++
  }
  get(position) {
    if (position < 0 || position > this.length - 1) { return false }
    else {
      let current = this.head
      for (let i = 0; i < position; i++) {
        current = current.next
      }
      return current.element
    }
  }
  indexOf(element) {
    let current = this.head
    let isFind = false
    for (let i = 0; i < this.length; i++) {
      if (current.element == element) return i
      current = current.next
    }
    if (!isFind) return -1
  }
  update(position, element) {
    if (position < 0 || position > this.length - 1) return false

    let current = this.head
    for (let i = 0; i < position; i++) {
      current = current.next 
    }
    current.element = element
  }
  removeAt(position) {
    if (position < 0 || position > this.length -1) return false
    let current = this.head
    let previous = null
    if (position === 0) {
      this.head = current.next
    } else {
      for (let i = 0; i < position; i++) {
        previous = current
        current = current.next
      }
      previous.next = current.next
    }
    this.length--
    return current.element
  }
  remove(element) {
    const index = this.indexOf(element)
    if (index === -1) return ;
    this.removeAt(index)
  }
  isEmpty() {
    return this.length === 0
  }
  size() {
    return this.length
  }
  toString() {
    let current = this.head
    let arr = []
    for (let i = 0; i < this.length; i++) {
      arr.push(current.element)
      current = current.next
    }
    return arr.join(" ")
  }
}