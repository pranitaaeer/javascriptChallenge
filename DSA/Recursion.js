

function recfun(arr){
    if(arr.length<=0) return 1
    return arr[arr.length-1]*recfun (arr.slice(0, arr.length-1))
}
console.log(recfun([1,2,3,4]))
