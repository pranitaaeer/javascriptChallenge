//Promise Cimbinator:
/* 1] Promise.all() -return array of promises 
and if any of these promise failed does not 
execute further promise
   2]promise.rase() - return first promise which is 
resolve and rejected it doesn't matter
   3]promise.allSettled() - return array of both resolve
and rejected promises 
   4]promise.any() - return first promise which resolve
*/
function getresult(){
    return new Promise((resolve, reject)=>{
        let success=true
        if(success) resolve("promise resolve")
        else reject(new Error("err to resolve promise"))
    })
}
const res=async()=>{
    try{
    const ans =await getresult()
    console.log(ans)
    }catch(err){
        console.log(err)
    }
}
res()
