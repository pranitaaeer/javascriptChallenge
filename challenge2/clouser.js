
 let email="Pranitaa@gmail.com"

function greet(){  
 let username="Pranita Aeer"
    function sayHello(){
        console.log("hello",username,email);
    }
    sayHello()

}
greet()

var e=10
function sum(a){
  return function(b){
    return function(c){
        return a+b+c+e
    }
  }
}
console.log(sum(10)(20)(30));

let count=0;
(
    function(){
        if(count===0){
            let count=1
            console.log(count);
        }
        console.log(count);
    }
)()

function createBase(a){
   return function(b){
      console.log(a+b);
   }
}

const addSix=createBase(6)
addSix(10)
addSix(24)

function find(){
  let arr=[]
  for (let i = 0; i < 1000000; i++) {
   arr[i]=i*i
     
  }
  return function(index){
    console.log(arr[index]);
  }
}

console.time("6");
find(1000)
console.timeEnd("6");


function a(){
    for (var i = 0; i < 3; i++) {
        function inner(i){
            setTimeout(function log(){
                console.log(i);
            },i*1000)
        }
        inner(i)
    }
}
a()

function counter(){
    var _counter=0

function add(val){
    _counter+=val
}
function retrive(){
    console.log("counter",_counter);
}
return {add,retrive}
}
var a=counter()
a.add(5)
a.retrive()


var module=(
    function(){
        function PrivateMethod(a,b){
            console.log("private method....",a+b);
        }
        return {
            AccessPrivateMethod:function(a,b){
                PrivateMethod(a,b)
            }
        }
    }
)()

module.AccessPrivateMethod(10,20)
// module.PrivateMethod(10,20) // it will give an error because we are trying to access the private method outside the module

function like(){

    let count=0
    return function countLike(){
        if(count>0){
        console.log("arlready liked");
        }
        else{
            console.log("liked");
            count++
        }
    }
    countLike()
}


//polyfill for once method

Function.prototype.MYonce = function () {
    let called = false;
    let fn = this;

    return function (...args) {
        if (!called) {
            called = true;
            return fn(...args);
        }
    }
}

const result=like.apply(null, [like.MYonce()]) //context,this reference
result()
result()