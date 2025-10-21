let str1="Pranita" //string
let score=75
console.log(`${str1} has score in exam ${score}%`);

let str2=new String("Pranitaa Aeer")
console.log(str1.charAt(5));
console.log(str1.toUpperCase());
console.log(str2.substring(0,4)); //cannot work in case of negative numbers
console.log(str2.slice(4,-2)); //can work in case of negative numbers

str2="http://localhost:5000/search/product%20camera"
str2.replace("%20","-")
console.log(str2);

str2="javascript is my favourite language"
console.log(str2.split(" "));
str2="   Pranitaa    Aeer"
console.log(str2.trim());


