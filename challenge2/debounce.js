
const debaounce=(fn,delay)=>{

    let time=null;

   return deb=()=>{
    clearTimeout(time)
    time=setTimeout(()=>{
      fn.apply(this)
    },delay)
   }
}
const search=()=>{
    console.log("seraching...");
}
const debouncedSearch=debaounce(search,100)
debouncedSearch()


