//Assignment 1: Date Creation & Extraction (Beginner)
let d1=new Date();
/*Tasks:
       1. Create a Date object for current date & time.
       2. Extract and display:
                    * Year
                    * Month (human readable)
                    * Date
                    * Day of week
                    * Hours, minutes, seconds

      3. Display the date in this format:
                    DD-MM-YYYY HH:mm:ss
                    */
console.log("Current date and time is:",d1.toString());
console.log(d1.getFullYear());
console.log(d1.getMonth()+1);
console.log(d1.getDate());
console.log(d1.getDay())
console.log(d1.getHours());
console.log(d1.getMinutes());
console.log(d1.getSeconds());
let dd=d1.getDate();
let mm=d1.getMonth()+1;
let yyyy=d1.getFullYear();
let hh=d1.getHours();
let min=d1.getMinutes();
let ss=d1.getSeconds();
console.log(`${dd}-${mm}-${yyyy} ${hh}:${min}:${ss}`);
