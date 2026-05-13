
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
