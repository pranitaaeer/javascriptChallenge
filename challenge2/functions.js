//function declaration
function square(num){
    return num*num
}

//function expression
const square2 = function(num){
    return num*num
}


const print=function(){
    return "printed output..."
}

const fn=function(fun){
    console.log("function executed:",fun());
}

fn(print);

//IIFE(Imediately Invoke Function Expression)

(function num(n){
    console.log("output:",n);
}
)(10);

(
    function (x){
        return (
            function(y){
                console.log("x:",x);
            }
        )(5)
    }
)(10)


//scpe and shadowing

// for(let i=0;i<5;i++){
//    setTimeout(function(){
//     console.log(i);
//    },i*1000)
// }

// for(var i=0;i<5;i++){
//    setTimeout(function(){
//     console.log(i);
//    },i*1000)
// }


var x=20

const fun=function (){
    console.log(x);
    var x=21
}

fun()

function multi(...args){ //rest operator
  console.log(args);
}
let arr=[1,2,3,4,5]
multi(...arr)  //spread operator

function basic(a,x,y,...nums){ //in this case rest operator should be at the end of the parameter list
 console.log(a,x,y,nums);
}

basic(1,2,3,45,6,7,8,9)

//calback function
const multiply=(a,b)=>{
  return {a,b}
}

const res=(cb)=>{
    console.log(cb());
}
res(()=>multiply(10,20))


//this 
let username="Pranu"
let user={
    username:"Pranita Aeer",
    f1(){
        console.log("username:",this.username);
    },
    f2:()=>{
      console.log("username :",this.username);
    }
}
user.f1()
user.f2()


function printNumbers(){
    console.log(arguments);
}

printNumbers(1,2,3,4,5)

const printNumbers2=()=>{
    console.log(arguments);
}
printNumbers2(1,2,3,4,5) //arguments is not defined in arrow function