
let mydate=new Date()
console.log(mydate);
console.log(mydate.toString());
console.log(mydate.toDateString());
console.log(mydate.toLocaleString());
console.log(typeof mydate); //object

// let createDate=new Date(2025,10,22)
// console.log(createDate.toDateString());
let createDate2=new Date(2025,22,11,11,12) //month is 0 based index(YYYY,DD,MM)
console.log(createDate2.toLocaleString());
// let createDate2=new Date("10-22-2025") //MM-DD-YYYY
// console.log(createDate2.toDateString());
console.log(Math.floor(Date.now())/1000); //convert miliseconds into seconds
// console.log(createDate.getMonth());
// createDate.toLocaleString('default',{
//     weekday:'long'
// })