

function square(n){
    console.log("calculating...")
    return n*n
}

console.log(square(5))
console.log(square(3))
console.log(square(2))

//without memoiaztion

function memoizedsquare(){
    let cache={}
     return function (n){
        if(cache[n]){
            console.log("return data from cache...")
            return cache[n]
        }
        let ans=n*n
        cache[n]=ans
        return ans
     }
}
const sq=memoizedsquare()

console.log(sq(5))
console.log(sq(3))
console.log(sq(2))
console.log(sq(5))

