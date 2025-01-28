const j={
    name:"varun",
    age:25,
    gender:"male",
}
//const {name,age,gender}=j;
//console.log(name,age,gender);
//const {age,name,gender}=j;
//console.log(name,age,gender);
const {name:uname,age:uage,gender:ugender}=j;
console.log(uname,uage,ugender); v
const arr=[2,3,4,5,6,7,8,9,0,1];
//const [a,b]=arr;
//console.log(a,b);
//const [a,b,,,,d]=arr;
//console.log(a,b,d);
const [a,b,...therest]=arr;
console.log(a,b);
console.log(therest);