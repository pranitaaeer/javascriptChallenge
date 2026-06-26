function Fibonacci(n){
    if(n<=1) return n
    return Fibonacci(n-1)+Fibonacci (n-2)
}
let n=7
for(let i=0;i<n;i++){
console.log(Fibonacci(i))
    
}
function removeFalsy(arr){
    let newarr=[]
    for(val of arr){
        if(val) newarr.push(val)
    }
    return newarr
}
console.log(removeFalsy(["",0,1,-2,null, undefined,NaN]))
