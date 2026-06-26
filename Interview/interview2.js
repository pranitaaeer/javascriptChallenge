function removeFalsy(arr){
    let newarr=[]
    for(val of arr){
        if(val) newarr.push(val)
    }
    return newarr
}
console.log(removeFalsy(["",0,1,-2,null, undefined,NaN]))
