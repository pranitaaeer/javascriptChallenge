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

// reverse vowels
 function modify(s) {
        // code here
        let ans=''
        for(let val of s){
            if(val==='a' || val==='e' || val==='i' || val==='o' || val==='u'){
                ans+=val
            }
        }
        ans=ans.split("").reverse().join('')
        let i = 0;
        let result = "";

        for (let val of s) {
                if ("aeiou".includes(val)) {
                result += ans[i];
                i++;
                } else {
                result += val;
                }
        }
        return res

}
console.log(modify("practice"))
