//Employee Payroll Processor

const employees = [
  { id: 201, name: "Amit", salary: 45000, department: "IT" },
  { id: 202, name: "Neha", salary: 60000, department: "HR" },
  { id: 203, name: "Rahul", salary: 75000, department: "IT" },
  { id: 204, name: "Pooja", salary: 30000, department: "Sales" }
];

/*Tasks:
    1. filter() employees from IT department
    2. map() to add:
            netSalary = salary + 10% bonus

    3. reduce() to calculate total salary payout
    4. find() employee with salary 30000
    5. findIndex() of employee "Neha"
*/

const it=employees.filter(ele=>ele.department==="IT")
console.log("IT Department Employees:", it);

const netsal=employees.map(emp=>emp.salary+emp.salary*0.1);
console.log("Employees with Net Salary:", netsal);

const totalsal=employees.reduce((acc,ele)=>acc+ele.salary,0);
console.log("Total Salary Payout:", totalsal);

const e=employees.find(ele=>ele.salary==30000)
console.log("Employee with salary 30000:", e);

const n=employees.findIndex(ele=>ele.name==="Neha")
console.log("Index of Neha:", n);
