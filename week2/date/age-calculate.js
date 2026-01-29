
//Assignment 3: Age Calculator (Intermediate)

let dob="2000-05-15";
let dobDate=new Date(dob);
let currentDate=new Date();
let age=currentDate.getFullYear()-dobDate.getFullYear();
let month=currentDate.getMonth()-dobDate.getMonth();
if(month<0 || (month===0 && currentDate.getDate()<dobDate.getDate())){
    age--;
}
console.log("Age is:",age);