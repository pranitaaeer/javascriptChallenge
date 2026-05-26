const binarySearch=(arr, target)=>{
    const mid=Math.floor(arr.length/2)
    if(arr.length<=1) return mid
  
    for(let j=0;j<arr.length;j++){
        if(arr[j]===target) return j
        if(arr[j]<target) binarySearch(arr.slice(0,mid,target))
        else binarySearch(arr.slice(mid,target))
    }
    return -1
}
console.log(binarySearch ([1,2,3,4,5,6],8))
