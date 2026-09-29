//Most Frequent of Two
function  modify(arr,x,y) {
        
       let map=new Map()
        for(let val of arr){
            if(map.has(val)) map.set(val,map.get(val)+1)
            else map.set(val,1)            
          }
          let fx=map.get(x)
          let fy=map.get(y)
          if(fx===fy) return Math.min(x,y)
          else if(fx>fy) return x
          else return y
      
}

console.log(modify([1, 2, 3, 4, 5, 6, 7, 8],1,7))
