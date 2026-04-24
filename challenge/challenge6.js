//primitive Data type
let num=20 //number 
let name="Pranita" //string
let isTrue=true //boolean
let age; //undefined
let college=null //null
let number=1245n
let sym=Symbol('id')
console.log( "typeof null:",typeof college);
console.log("typeof symbol:",typeof sym);
console.log("typeof bigint:",typeof number);

//Reference(Non-primitive )data type
let arr=[1,2,3,4]
console.log("typeof array:",typeof arr);

let fun=()=>{
    console.log("Radhe Radhe");
    
}
console.log("typeof function:",typeof fun);

let obj={
    name:"Pranita",
    class:'TY BCA',
    age:20
}
console.log("typeof object:",typeof obj);



console.log(parseInt("hello"));      // NaN
console.log(Math.sqrt(-1));          // NaN
console.log("abc" * 2);              // NaN
console.log(undefined + 1);          // NaN
console.log(0 / 0);                  // NaN

console.log(NaN === NaN);            // false (confusing but important)
console.log(isNaN(NaN));             // true
console.log(Number.isNaN(NaN));      // true (better)

// Trick: check NaN properly
function isReallyNaN(value) {
  return value !== value;  // Only NaN returns true
}
console.log(isReallyNaN(NaN));      // true
console.log(isReallyNaN(5));        // false





