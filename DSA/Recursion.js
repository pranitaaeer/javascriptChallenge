
function recfun(arr){
    if(arr.length<=0) return 1
    return arr[arr.length-1]*recfun (arr.slice(0, arr.length-1))
}
console.log(recfun([1,2,3,4]))

function Factorial (n){
    if(n==1) return 1
    return n*Factorial(n-1)
}
console.log(Factorial(5))
    
function range(start, end){
   if(end<start) return []
   const num=range(start, end-1)
   num.push(end)
   return num
}
console.log(range(0, 5))
