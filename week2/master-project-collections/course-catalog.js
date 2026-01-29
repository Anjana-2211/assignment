const courses = [
  { id: 101, title: "JavaScript", price: 999, published: true },
  { id: 102, title: "React", price: 1499, published: false },
  { id: 103, title: "Node", price: 1299, published: true }
];
/* MODULE 2: COURSE CATALOG ENGINE
  -> Get published courses
  -> Sort courses by price (high → low)
  -> Extract { title, price } only
  -> Calculate total value of published courses
  -> Add a new course immutably */
const publishedCourses=courses.filter(ele=>ele.published==true);
console.log(publishedCourses);

for (let i=0;i<courses.length-1;i++){
    for(let j=0;j<courses.length-i-1;j++){
        if(courses[j].price<courses[j+1].price){
            let temp=courses[j];
            courses[j]=courses[j+1];
            courses[j+1]=temp;
        }
    }
}
console.log(courses);

const tp=courses.map(course=>(`${course.title},${course.price}`));
console.log(tp);

const total=courses.reduce((acc,ele)=>acc+ele.price,0)
console.log(total);

const newcourse={id:104,title:"MongoDB",price:1199,published:true};
courses.push(newcourse);// or we can use courses=[...courses,newcourse];
console.log(courses);

