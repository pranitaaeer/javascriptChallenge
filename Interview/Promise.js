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
const firstPromise=new Promise((resolve,reject)=>{
    resolve("success")
})
const secondPromise=new Promise((resolve,reject)=>{
    resolve(firstPromise)
})
secondPromise.then((res)=>
{return res}
).then((res)=>console.log(res))
async function loadJson(url) {
  try {
    const res = await fetch(url);

    if (res.status === 200) {
      return await res.json();
    }
  } catch (err) {
    console.log(err);
  }
}

const result = async () => {
  const data = await loadJson(
    "https://dummyjson.com/users"
  );

  console.log(data);
};

result();

function greet(user){
    return new Promise((resolve,reject)=>{
        resolve(`hello ${user}`)
    })
}
function logout(user){
    return new Promise ((resolve,reject)=>{
        resolve(`${user} log out successfully`)
    }
    )
}

function recpromises(arr){
    if(arr.length===0)return
    const curr=arr.shift()
    curr.then((data)=>{console.log(data)})
    recpromises(arr)
}
arr=[
    greet("pranita"), 
    logout("pranita")
    ]
    recpromises(arr)
