//primitive Data type
let num=20 //number 
let name="Pranita" //string
let isTrue=true //boolean
let age; //undefined
let college=null //null
let sym=Symbol('id')
console.log(typeof college);
console.log(typeof sym);

let name2=name
name2="Ankita"
console.log(name);
console.log(name2); //call by value

//Reference(Non-primitive )data type
let arr=[1,2,3,4]
let fun=()=>{
    console.log("Radhe Radhe");
    
}
console.log(typeof fun);

let obj={
    name:"Pranita",
    class:'TY BCA',
    age:20
}
let obj2=obj
obj2.age=21
console.log(obj);
console.log(obj2); //call by reference



