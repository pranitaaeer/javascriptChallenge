
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
