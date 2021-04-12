// append(element)
// insert(position, element)
// get(position)
// indexOf() 返回索引或-1
// update(position, element) 修改
// removeAt(position)
// remove(element) 移除一项 返回下标
// isEmpty()
// size()
// forwardString() 正向遍历输出字符串
// backwardString() 反向遍历 输出字符串


class DoublyNode {
  constructor(element) {
    this.element = element
    this.next = null
    this.prev = null
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }
  append(element) {
    const newNode = new DoublyNode(element)
    if (this.length === 0) { // 或者this.head === null
      this.head = newNode
      this.tail = newNode
    } else {
      let lastNode = this.tail
      lastNode.next = newNode
      newNode.prev = lastNode
      this.tail = newNode
    }
    this.length++
  }
  insert(position, element) {
    if (position < 0 || position > this.length) return false
    const newNode = new DoublyNode(element)
    if (position === 0) {     // 插入表头
      if (this.head === null) { // 空链表 
        this.head = newNode
        this.tail = newNode
      } else {               // 非空链表
        newNode.next = this.head
        newNode.next.prev = newNode
        this.head = newNode
      }
    } else if (position === this.length) { // 插在表位
      newNode.prev = this.tail
      this.tail.next = newNode
      this.tail = newNode
    } else { // 插在表中
      let current = this.head
      let previous = null
      for (let i = 0; i < position; i++) {
        previous = current
        current = current.next
      }
      previous.next = newNode
      newNode.next = current
      current.prev = newNode
      newNode.prev = previous
    }
    this.length++
  }
  get(position) {  // 可以直接继承单向链表的get方法
    if (position < 0 || position > this.length - 1)  return false 
    else {
      let current = this.head
      for (let i = 0; i < position; i++) {
        current = current.next
      }
      return current.element
    }
  }
  indexOf(element) {  // 可以直接继承单向链表的indexOf方法
    let current = this.head
    let isFind = false
    for (let i = 0; i < this.length; i++) {
      if (current.element == element) return i
      current = current.next
    }
    if (!isFind) return -1
  }
  removeAt(position) {
    if (position < 0 || position > this.length - 1) return false
    let current = this.head
    if (position === 0) { // 删除第一个节点
      if (this.length === 1) { // 只有一个节点
        this.head = null
        this.tail = null
      } else {  // 不止一个节点
        this.head = this.head.next
        this.head.prev = null
      }
    } else if (position === this.length - 1) { //删除最后一个节点
      current = this.tail
      this.tail = this.tail.prev
      this.tail.next = null
    } else {
      let previous = null
      for (let i = 0; i < position; i++) {
        previous = current
        current = current.next
      }
      previous.next = current.next
      current.next.prev = previous
    }
    this.length--
    return current.element
  }
  update(position, element) {
    this.removeAt(position)
    this.insert(position, element)
  }
  remove(element) {  // 可以直接继承单向链表的remove方法
    const index = this.indexOf(element)
    if (index === -1) return
    this.removeAt(index)
    return index
  }
  isEmpty() {  // 可以直接继承单向链表的isEmpty方法
    return this.length === 0
  }
  size() {  // 可以直接继承单向链表的size方法
    return this.length
  }
  forwardString() {  // 可以直接继承单向链表的toString方法
    let current = this.head
    let arr = []
    for (let i = 0; i < this.length; i++) {
      arr.push(current.element)
      current = current.next
    }
    return arr.join(" ")
  }
  backwardString() {
    let current = this.tail
    let arr = []
    for (let i = 0; i < this.length; i++) {
      arr.push(current.element)
      current = current.prev
    }
    return arr.join(" ")
  }
}