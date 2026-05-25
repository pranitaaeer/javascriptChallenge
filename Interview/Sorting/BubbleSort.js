const bubbleSort=(arr)=>{
    for(let i=0;i<arr.length;i++){
        let swap=false
        for(let j=0;j<arr.length-i-1;j++){
            if(arr[j]>arr[j+1]){
                [arr[j],arr[j+1]]=[arr[j+1],arr[j]]
                swap=true
            }
        }
        if(!swap) break
    }
    return arr
}
const sortedArr=bubbleSort([4, 5,8,7,2])
console.log(sortedArr)
