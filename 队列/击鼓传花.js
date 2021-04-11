
function passGame (nameList, num) {
  const queue = new Queue()

  for(let i = 0, length = nameList.length; i < length; i++){
    queue.enqueue(nameList[i])
  }
 // 当===1时表示队列里只剩一个人
  while (queue.size() !== 1){ 
    for(let i = 0; i < num - 1; i++) {
      queue.enqueue(queue.dequeue()) // 将队列首元素 移去队列尾部
    }
    console.log('本次移除：'+queue.dequeue());
    
  }  

  return queue.front()
}