//Student Marks List
const marks = [78, 92, 35, 88, 40, 67];
/*Tasks:
    1. filter() marks ≥ 40 (pass marks)
    2. map() to add 5 grace marks to each student
    3. reduce() to find highest mark
    4. find() first mark below 40
    5. findIndex() of mark 92*/
const passmarks=marks.filter(ele=>ele>=40);
console.log("marks greater than 40:",passmarks);

const graceMarks=marks.map(ele=>ele+5);
console.log("marks after adding grace marks:",graceMarks);

const highestmark=marks.reduce((acc,ele)=>ele>acc?ele:acc,0);
console.log("highest mark:",highestmark);

const firstBelow40=marks.find(ele=>ele<40);
console.log("first mark below 40:",firstBelow40)

const indexOf92=marks.findIndex(ele=>ele==92);
console.log("index of mark 92:",indexOf92) 
