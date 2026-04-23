
const arr=[10,20,30,40,50]

let arr1=[1,2,3,4,5]

for(let v of arr1){
  arr1.pop()  //[1,2]
}
console.log(arr1);

//polyfills

Array.prototype.myMap=function(cb){
    let arr=[]

    for (let i = 0; i < this.length; i++) {
        arr.push(cb(this[i],i,this))
        
    }
    return arr
}

const multiply=arr.myMap((elm,i,arr)=>{
    return elm*3
})
console.log(multiply);

Array.prototype.myFilter=function(cb){
    let arr=[]

    for (let i = 0; i < this.length; i++) {
        if(cb(this[i],i,this)) arr.push(this[i])
        
    }
    return arr
}

const moreThan25=arr.myFilter((elm,i,arr)=>{
  return elm>=25
})
console.log(moreThan25);

Array.prototype.myReduce=function(cb,init){
    let initializer=init
    for (let i = 0; i < this.length; i++) {
        initializer=initializer? cb(initializer,this[i],i,this) : this[0]
    }
    return initializer
}

const sum=arr.myReduce((acc,curr,i,arr)=>{
   return acc+curr
},0)
console.log(sum);

let students=[
    {name:"Doremon",roll:1,marks:96},
    {name:"Nobita",roll:12,marks:50},
    {name:"Sizuka",roll:33,marks:55},

]

const brr=students.map((elm)=>{
  return elm.name.toUpperCase()
})
console.log(brr);

const scoredStudents=students.filter((elm)=> elm.marks> 60 && elm.roll>15)
console.log(scoredStudents);

const totalMarks=students.reduce((acc,curr)=> acc+curr.marks,0)
console.log(totalMarks);

const scoreThan60=students.filter((elm)=>elm.marks>60).map((elm)=>elm.name)
console.log(scoreThan60);

const total=students.filter((elm)=>elm.marks<60)
                    .map((elm)=>elm.marks+20)
                    .filter((elm)=>elm>60)
                    .reduce((acc,curr)=>acc+curr,0)



console.log(total)