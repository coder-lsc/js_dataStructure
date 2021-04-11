// 栈的常见操作
// Push()
// pop()
// peek() 返回栈顶元素
// isEmpty()
// size() 返回个数
// toString()
class Stack {
  constructor () {
    this.items = [] // 基于数组实现
  }
  push(element) {
    this.items.push(element)
  }
  pop() {
    return this.items.pop()
  }
  peek() {
    if (this.items.length === 0) { return null }
    return this.items[this.items.length - 1]
  }
  isEmpty() {
    return this.items.length === 0
  }
  size() {
    return this.items.length
  }
  toString() {
    return this.items.join(' ')
  }
}
