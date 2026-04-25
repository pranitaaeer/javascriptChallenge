
let obj={
    name:"Doremon",
    age: 100,
    color:"blue",
    "like food":"doracake",
    friend:["Nobita","Shizuka","Gian","Suneo"],
}

console.log(obj.name);
console.log(obj["like food"]);
delete obj.age
console.log(obj);

const ans=(
    function(a){
        delete a
        return a
    }
)(5)
console.log(ans);

let key="username"
let val="pranita"
let user={
    [key]:val
}
console.log(user);

for(key in obj ){
    console.log(key ,":" ,obj[key]);
}

let obj2={
    name:"pranita",
    age:21,
    name:"rani"
}
console.log(obj2);

let nums={
    a:20,
    b:30,
    title:"my nums"
}

const multiplyBy2=()=>{
    for(key in nums){
        if( typeof nums[key] ==="number"){
           nums[key]*=2
        }
    }
}
multiplyBy2()
console.log(nums);


let a={}
let b={key:"b"}
let c={key:"c"}

a[b]=123
a[c]=456

console.log(a);

//JOSN.Stringify and JSON.Parse
let stringobj=JSON.stringify(nums)
console.log(stringobj);
// localStorage.setItem("key",stringobj)
console.log(JSON.parse(stringobj));

console.log([..."Pranita"]);

const customer={name:"pranu",age:21}
const admin={admin:true,...customer}

console.log(admin);

const setting={
    player:"player1",
    level:"Medium",
    score:255
}

console.log(JSON.stringify(setting,["level","score"]));

const shape={
    radius:20,
    diameter(){
        return this.radius*2
    },
    perimeter:()=>{
      return 2*Math.PI*this.radius
    }
}
console.log(shape.diameter());
console.log(shape.perimeter());

let obj3={
    name:"pranita",
    age:21,
    name:"rani",
    fullname:{
        first:"pranita",
        last:"aeer"
    }
}
// const {first}=obj3.fullname

//another way
const {fullname:{first}}=obj3 

console.log(first);

console.log({a:1}=={a:1});
console.log({a:1}==={a:1}); 
 // both returns false ,coz they are in different memory
 // non-primitive data type compare by reference

 let persons={name:"pranita"}
 const members=[persons]
 persons=null
 console.log(members);
 //it doesn't effect on array coz array store in persons[0]
 //but if we do like this than it affeacted persons.name=null

 const number={value:10}

 const multiply=(x={...number})=>{
    console.log(x.value*=2);
 }

 multiply()//20
 multiply()//20
 multiply(number)//20
 multiply(number) //pass by reference thts why ans is 40


 //deep copy of objects
 const objClone=Object.assign({},obj3)
 objClone.fullname.first="rani" //does not make deep copy in case of nested objects

 const anotherWay=JSON.parse(JSON.stringify(obj3))
anotherWay.fullname.first="pranita"  //work on nested objects as well

const way={...obj3}
way.fullname.first="pranita"
 console.log(way);