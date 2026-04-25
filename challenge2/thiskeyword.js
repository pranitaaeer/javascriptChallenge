let user={
    username:"pranita",
    getDetails(){
        console.log("username:",this.username);
    },
    getInfo:()=>{
        console.log("info:",this.username); //arraow function refers toh the window
    }
}
user.getDetails()
user.getInfo()

class user1{
    constructor(n){
        this.name=n
    }
    getDetails(){
        console.log(this.name);
    }
}
const User=new user1("Pranita")
User.getDetails()

const customer={
    username:"doremon",
    getDetails(){
        let username="nobita"
        console.log(this.username);
    }
}
customer.getDetails()

function makeUser(){
return {
    name:"pranu",
    ref(){
        return this
    }
}
}
let ans=makeUser()
console.log(ans.ref().name);

let candidate={
    username:"Pranitaaeer",
    getDetails(){
        console.log(this.username);
    }
}

// setTimeout(()=>{
//     console.log("output printend..",candidate.getDetails());  //undefined settimeout doest get long time access of this fun
// },1000)

// setTimeout(function(){
// candidate.getDetails()
// console.log("data printend");
// },1000)

let calculater={
    read(a,b){
        this.a=a,
        this.b=b
    },
    sum(){
        return this.a+this.b
    },
    multi(){
        return this.a*this.b
    }
}
calculater.read(10,20)
console.log(calculater.sum());
console.log(calculater.multi());


var length=4
function callback(){
    console.log(this.length);
}

const lengthObj={
    length:4,
    fn(fun){
        fun()
    }
}
lengthObj.fn(callback)

const calc={
    result:0,
    add(a){
        this.result+=a
        return this
    },
    multi(a){
        this.result*=a
        return this

    },
    sub(a){
        this.result-=a
        return this
    }
}
let answer=calc.add(10).multi(20).sub(30);
console.log(answer.result);