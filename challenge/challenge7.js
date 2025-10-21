//stack
let name="Pranita" //string
let name2=name
name2="Ankita"
console.log(name);
console.log(name2); //call by value

//heap
let obj={
    name:"Pranita",
    class:'TY BCA',
    age:20
}

let obj2=obj
obj2.age=21
console.log(obj);
console.log(obj2); //call by reference
