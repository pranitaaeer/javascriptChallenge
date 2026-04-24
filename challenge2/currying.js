

function f(a){
    return function (b){
        return {a,b}
    }
}
console.log(f(10)(20));

function sum(a){
    return function (b){
        return function(c){
            console.log("sum: ",a+b+c);
        }
    }
}
sum(2)(6)(1)


function Evaluate(op){
    return function(a){
       return function(b){
        if(op==="sum") return a+b
        else if(op==="multiply") return a*b
        else if(op==="devide") return a/b
        else if(op==="substract") return a-b
        else return "Invalid operation"
       }
    }
}
console.log(Evaluate("substract")(10)(5));


//infinte currying

function add(a){
    return function(b){
        if(b) return add(a+b)
        return a    
    }
}
console.log(add(5)(2)(4)());

//partial application

function fn(a){
    return function(b,c){
        return a+b+c
    }
}

console.log(fn(10)(10,20));

//another way of calling
let ans=fn(10)
console.log(ans(10,20) );

//manupulate DOM
function changeHeading(id){
    return function(context){
        document.querySelector("#"+id).textContent=context
    }
}
let changedName=changeHeading("heading")
changedName("pranu")