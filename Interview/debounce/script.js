const searchInput=document.getElementById("search")

let timer;
searchInput.addEventListener("input",(e)=>{
    clearTimeout(timer)
    timer=setTimeout(()=>{
        console.log("API call:",e.target.value)
    },500)
})

// searchInput.addEventListener("input",(e)=>{
//         console.log("API call:",e.target.value)
// })

// Without debouncing, it makes an API call for every input.


// Debouncing is a technique where a function executes only after the user
//  stops triggering an event for a specified amount of time.