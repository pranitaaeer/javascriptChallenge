const selectionSort=(arr)=>{
    for(let i=0;i<arr.length;i++){
        let min=i
        for(let j=i+1;j<arr.length-i;j++){
            if(arr[j]<arr[min]){
                min=j
            }
        }
        if(min!==i){
            [arr[i],arr[min]]=
            [arr[min],arr[i]]  
        }
    }
    return arr
}
console.log(selectionSort([8,9,4,5,3,2]))
