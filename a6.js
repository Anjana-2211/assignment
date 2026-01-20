//Online Course Name Processor
//Scenario : You are preparing a course list for display on a website.
const courses = ["javascript", "react", "node", "mongodb", "express"];
/* Tasks:
    1. filter() courses with name length > 5
    2. map() to convert course names to uppercase
    3. reduce() to generate a single string:
              "JAVASCRIPT | REACT | NODE | MONGODB | EXPRESS"

    4. find() the course "react"
    5. findIndex() of "node"
*/
const nlg5=courses.filter(ele=>ele.length>5);
console.log("courses with name length > 5:",nlg5)

const uppcourses=courses.map(ele=>ele.toUpperCase())
console.log("course names to uppercase:",uppcourses)

const singleString=courses.reduce((acc,ele)=>acc? acc+" | "+ele.toUpperCase():ele.toUpperCase(),'');
console.log("single string:",singleString)

const reactCourse=courses.find(ele=>ele==="react")
console.log("the course react:",reactCourse)

const nodeIndex=courses.findIndex(ele=>ele==="node")
console.log("index of node:",nodeIndex)

