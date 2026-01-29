//Exam Result Summary

const marks = {
  maths: 78,
  physics: 65,
  chemistry: 82,
  english: 55
};

/*Tasks:
    1. Calculate total marks
    2. Calculate average marks
    3. Find the highest scoring subject
    4. Add a new subject computer: 90
*/

let total=0
for (let i in marks){
    total+=marks[i]
}
console.log("Total Marks:",total)
let avg=total/Object.keys(marks).length
console.log("Average Marks:",avg)
let high=marks.maths
for (let i in marks){
    if(marks[i]>high){
        high=marks[i]
    }
}
console.log("Highest Marks:",high)
marks.computer=90;
console.log(marks);