// 十进制转成二进制
function dev2 (number) {
  const stack = new Stack()
  while(number>0){
    let yushu = number % 2
    number = Math.floor(number / 2)
    stack.push(yushu)
  }
  let str = ''  
  while(!stack.isEmpty()){
      
    str += stack.pop()
  }
  return str
}

