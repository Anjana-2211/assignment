// Daily Temperature Analyzer
//Scenario : You are analyzing daily temperatures recorded by a weather app.
const temperatures = [32, 35, 28, 40, 38, 30, 42];
/* Tasks:
    1. filter() temperatures above 35
    2. map() to convert all temperatures from Celsius → Fahrenheit
    3. reduce() to calculate average temperature
    4. find() first temperature above 40
    5. findIndex() of temperature 28
*/
const res1=temperatures.filter(temp=>temp>35)
console.log("temperatures above 35:",res1)

const res2=temperatures.map(ele=>(ele*9/5)+32)
console.log("temperatures from Celsius to Fahrenheit:",res2)

const res3=temperatures.reduce((acc,ele)=>acc+ele,0)/temperatures.length
console.log("average temperature:",res3)

const res4=temperatures.find(ele=>ele>40)
console.log("first temperature above 40:",res4)

const res5=temperatures.findIndex(ele=>ele==28)
console.log("index of temperature 28:",res5)

