// event delegation

const container=document.getElementById("container")
container.addEventListener("click",(event)=>{

 if(event.target.classList.contains("btn")){
    document.body.style.backgroundColor=event.target.dataset.color
 }
})
/* 
Event delegation is a technique where we attach a single event listener to a parent element
instead of adding listeners to multiple child elements. 
It works using event bubbling and is especially useful for handling dynamically added elements.
*/

// event propagation

const parent=document.getElementById("parent")
const child=document.getElementById("child")
// Event bubbling -> the event travels from the target element to its parent elements
parent.addEventListener("click",(_)=>{
    console.log("parent clicked")    
})
child.addEventListener("click",(_)=>{
    console.log("child clicked")    
})

const parent1=document.getElementById("parent1")
const child1=document.getElementById("child1")
// Event capturing -> the event travels back from the parent elements to its target element 
parent1.addEventListener("click",(_)=>{
    console.log("parent clicked1")    
},true)
child1.addEventListener("click",(_)=>{
    console.log("child clicked1")    
})

/* 
Event propagation is the process by which an event travels through the DOM.
 For example, if a button is inside a div and we click the button,
  the event first travels from the parent towards 
  the button during the capturing phase, reaches the target,
 and then travels back from the button to the parent during the bubbling phase..
*/