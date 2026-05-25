const mergeSort=(arr)=>{
    if(arr.length<=1) return arr
    
    let mid=Math.floor(arr.length/2)
    let left=mergeSort(arr.slice(0, mid)) 
    let right=mergeSort(arr.slice(mid))
    //arr ke har ek part ke liye sorting lgegi
    return mergeArr(left, right)
}
const mergeArr=(left, right)=>{
    let result=[]
    let i=0, j=0;
     while(i<left.length&& j<right.length){
         if(left[i]<right[j]){
             result.push(left[i])
             i++
         }else{
             result.push(right[j])
             j++
         }
     }
     //agar ek arr khatam huva tab bhi dusra arr bacha hai toh uske elm ko add krna padega, at the end of the day vo sorted hi hoga isliye concat krrnge
     return result.concat(left.slice(i)).concat(right.slice(j))
    
}
console.log(mergeSort([7,8,9,5,4]))
