   function longest(arr) {
        // code here
        let map=new Map()
        for(let val of arr){
            if(!map.has(val)){
                map.set(val,val.length)
            }
        }
        let minlength=arr[0].length
        let ans=""
        for(let [key,values] of map){
            if(values > minlength){
                minlength=values
                ans=key
            }
        }
        return ans
    }
    console.log(longest(["Geek", "Geeks", "Geeksfor", "GeeksforGeek", "GeeksforGeeks"]))
