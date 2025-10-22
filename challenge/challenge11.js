//array
let arr=[1,2,3,4,5]
console.log(arr);
let brr=new Array("doraemon","nobita","shizuka","sunio","gian")
console.log(brr.includes("Doremon"));
console.log(brr.indexOf("nobita"));
// //push or pop
brr.push("dekisugi")
console.log("Array after push:",brr);
brr.pop()
console.log("Array after pop:",brr);
// //shift or unshift
brr.unshift("doremi")
console.log("Array after unshift:",brr);
brr.shift()
console.log("Array after shift:",brr);
//slice or splice()
let crr=brr.slice(1,3) //does not make any chages in actual array its return new array
console.log("Array after slice:",crr);
console.log(brr);
brr.splice(1,3) //chages actual array
console.log("Array after splice:",brr);
