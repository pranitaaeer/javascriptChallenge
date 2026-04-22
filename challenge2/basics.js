// var variable is function scoped and let variable is block scoped.
//  so if we try to shadow var variable with let variable it will throw an error because var variable is already declared in the same scope. 
// but if we try to shadow let variable with var variable it will not throw an error because let variable is block scoped and var variable is function scoped.

const shodowing=()=>{
    var a="hello"
    let b="hi"

    if(true){
        let a="world"
        var b="bye"
        console.log(a) // world
        console.log(b) // bye
    }
    console.log({a,b});
}
shodowing()

const shodowing=()=>{
    var a="hello"
    var b="hi"

    if(true){
        let a="world"
        let b="bye"
        console.log(a) // world
        console.log(b) // bye
    }
    console.log({a,b});
}
shodowing()

function hoisting(){
    console.log(a,b,c);
    var a=10;
    let b=20;
    const c=30
}
hoisting() // ReferenceError: Cannot access 'a' before initialization