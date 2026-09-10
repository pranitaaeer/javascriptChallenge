//clouser
function outer() {
    let count = 0;

    function inner() {
        count++;
        console.log(count);
    }

    return inner;
}

const counter = outer();

counter();
counter();
counter();

//this
/* Normal function → this = how it is called
   Arrow function → this = where it is created */

  const name="pranu"
  const obj={
    username:"pranita",
    normal:function(){
        console.log("name by normal function :",this.username)
    },
    arrow:()=>{
        console.log("name by arrow function :",this.username)
    }

  }
  obj.normal()
  obj.arrow()

// call() -> arguments separately
const user1={
    name:"pranita"
}  
const user2={
    name:"Raj"
}
function greet(city){
    console.log(this.name,city)
}
function greet1(city,age){
    console.log(this.name,city,age)
}
function greet3(city,age){
    console.log(this.name,city,age)
}

greet.call(user1,"Malvan")
greet.call(user2,"Mumbai")

//apply() -> arguments in array
greet1.apply(user1,["Malvan",21])
greet1.apply(user2,["Mumbai",24])

// bind()
const newfun=greet3.bind(user1,"Malvan",21)
newfun()

/* 
Call, apply, and bind are JavaScript methods used to control the this value of a function.
 Call and apply immediately invoke the function, while bind returns a new function.
  that can be invoked later. The main difference between call and apply
 is that call accepts arguments individually, whereas apply accepts arguments as an array.
*/

const student={
    name:"pranu",
    language:{
        normal:"Malvani",
        programming:"javascript"
    }
}

const copy={...student} //spread op create shallow copy by default
copy.name="Hritik"
console.log("original name",student.name)
console.log("copy name",copy.name)

copy.language.normal="Hindi"
console.log("original language",student.language.normal)
console.log("copy language",copy.language.normal)

/* 
In a shallow copy, only the top-level properties are copied,
 while nested objects or arrays still share the same reference. 
Therefore, changing nested data can also affect the original object.
*/

const copy1=structuredClone(student)
copy1.name="Hritik"
console.log("original name",student.name)
console.log("copy name",copy1.name)

copy1.language.normal="Hindi"
console.log("original language",student.language.normal)
console.log("copy language",copy1.language.normal)

/* 
In a deep copy, nested objects and arrays are also completely copied,
 so the original and copied objects are independent of each other.
*/

//promise
const promise=new Promise((resolve,reject)=>{
    let success=true
    if(success){
        resolve(
            fetch("https://dummyjson.com/users")
        )
    }
    else{
        reject("something went wrong")
    }
})

promise.then((response)=>{
  return response.json()
}).then((data)=>{
    console.log("response",data)
}).catch((err)=>{
    console.log("err",err)
})

// asyn/await
async function fetchUser() {
    try {
    const data=await fetch("https://dummyjson.com/users")
        console.log("response from async/await:", await data.json())
    } catch (err) {
    console.log("err",err)
        
    }
}
fetchUser()

/* 
A Promise is an object that represents the eventual result of an asynchronous operation.
 It can be pending, fulfilled, or rejected.
Async/await is a cleaner way to handle Promises and makes asynchronous code easier to read and write.
*/

//callback
function fetchByCallback(cb){
    fetch("https://dummyjson.com/users")
    .then((response)=>  response.json())
    .then((data)=> cb(null,data))
    .catch((err)=>cb(err,null))
}
fetchByCallback((err,data)=>{
    if(err){
        console.log("error",err)
    }else console.log("data",data)
})

/* 
A callback is a function passed as an argument to another function
 which is executed later when a specific task is completed or an event occurs.
 Callbacks are commonly used for handling asynchronous operations in JavaScript.
*/