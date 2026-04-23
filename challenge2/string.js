
// let string="1213"

// function isPalindrom(str){
//     let newstr=str.split("").reverse().join("")
//     if(newstr===str) return true
//     else return false
// }
// console.log(isPalindrom(string));

// let rev=''
// for(val of string){
//     rev=val+rev
// }
// if(rev==string)return true
// else return false


let word="welcome to javascript"
let map={}

for(let val of word){
    if(val!==" "){
        if(map[val]){
            map[val]=map[val]+1
        }else{
            map[val]=1
        }
    }
}

// console.log(map);
for(let elm in map){
    if(map[elm]===1){
        console.log(elm); 
        break
    }
}

let n=10
let m=20
let p=5
console.log(n<m<p);
//n<m is true and javascript convert true into 1 than check 1<p which is true
//final ans=true

let arr=[1,2,3,4]
for(val of arr){
    arr[3]=val
}
//Round1-arr[3]=1 arr=[1,2,3,1]
//Round2-arr[3]=2 arr=[1,2,3,2]
//Round3-arr[3]=3 arr=[1,2,3,3]
//Round4-arr[3]=3 arr=[1,2,3,3]
console.log(arr);