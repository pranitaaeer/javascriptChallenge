
let arr=[1,2,4,5,1,4,5]

let obj={}
let brr=[]
for(let val of arr){
    if(!obj[val]){
        obj[val]=1
        brr.push(val)
    }
    
}
console.log(brr)

const debouncefn=(fn, delay)=>{
    let timer=null
    
    return debounce=()=>{
        clearTimeout(timer)
        timer=setTimeout(()=>{
            fn.apply(this)
        },delay)
    }
}
const search=()=>{
    console.log("searching... ")
}
const debouncefun=debouncefn(search, 500)
debouncefun()

let str="I love JavaScript and Nodejs"
function largestWord(str){
    let obj={}
    let lg=0;
    for( let val of str){
        obj[val]=val.length
        if(val.length>lg) lg=val.length
    }
    obj={}
    console.log(lg)
}
str=str.split(" ")
largestWord(str)

console.log("start")

function greet(username, cb){
    setTimeout(()=>{
        cb(`hello ${username}`) 
    },1000)
}
function callbackHell(cb){
    cb("callback hell occurs")
}
//console.log(greet("pranita"))
//undefined before using cb
const res=greet("pranu",function (ans){
    console.log(ans)
    callbackHell(function(cbans){
        console.log(cbans)
    })
})
console.log("stop")
