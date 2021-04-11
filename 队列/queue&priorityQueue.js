// enqueue(element) 向队列尾部添加元素
// dequeue() 移除第一个元素 并返回被移除的元素
// front() 返回队列中第一个元素 队列不做变动
// isEmpty()
// size()
// toString()

class Queue {
  constructor() {
    this.items = []
  }
  enqueue(element) {
    this.items.push(element)
  }
  dequeue() {
    return this.items.shift()
  }
  front() {
    if(this.items.length === 0) { return null }
    return this.items[0]
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

class QueueElement {
  constructor (element, priority) {
    this.element = element
    this.priority = priority
  }
}

class PriorityQueue extends Queue {
  enqueue(element, priority) {
    const queueElement = new QueueElement(element, priority)
    if (this.isEmpty()) {
      this.items.push(queueElement)
    } else {
      let added = false
      for (let i = 0, length = this.items.length; i < length; i++) {
        if (queueElement.priority < this.items[i].priority) {
          this.items.splice(i, 0, queueElement)
          added = true
          break
        }
      }
      if (!added) {
        this.items.push(queueElement)
      }
    }
  }
  toString() {
    let arr = []
    this.items.forEach(item => {
      arr.push(item.element + item.priority) 
    })
    let str = arr.join(' ')
    return str
  }
}