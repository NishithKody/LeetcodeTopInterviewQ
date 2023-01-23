function romanToInt(s: string): number {
    let res = 0
    let stack = []
    let map = new Map()
    map.set('I',1)
    map.set('V',5)
    map.set('X',10)
    map.set('L',50)
    map.set('C',100)
    map.set('D',500)
    map.set('M',1000)

    for(let i =0; i<s.length; i++){
        
      let temp = 0
      if(map.get(stack[stack.length-1])< map.get(s[i]))
      {
          while(map.get(stack[stack.length-1])< map.get(s[i])){
            temp = temp + map.get(stack.pop())
          }
          res = res + map.get(s[i]) - temp
      }
      else{
          stack.push(s[i])
      }
      console.log('stack',stack)

    }
      
    while(stack.length!=0){
        res = res + map.get(stack.pop())
    }
    return res

};
