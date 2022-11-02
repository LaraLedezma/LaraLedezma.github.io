var humanresources = 
{
    "companyName":"Tech Stars",
    "website":"www.techstars.site",
    "Employees": [
        {
        "firstName":"Sam",
        "department":"Tech",
        "designation":"Manager",
        "salary":40000,
        "raiseEligible":true,
        },
        {
        "firstName":"Mary",
        "department":"Finance",
        "designation":"Trainee",
        "salary":18500,
        "raiseEligible":true,
        },
        {
        "firstName":"Bill", 
        "department":"HR",
        "designation":"Executive",
        "salary":21200,
        "raiseEligible":false,
        }
    ]
}

console.log(humanresources);
// Part 2

console.log(humanresources.employees);
// Part 1

var AnnaJSON = 
    {
    "firstName" : "Anna",
    "department" : "Tech",
    "designation" : "Manager",
    "salary" : 40000,
    "raiseEligibl" : true, 
     }
var Anna = JSON.parse(AnnaJSON)
humanresources.employees.push(Anna)
console.log(humanresources.employees)
// Part 3

var totalSalary = 0
for(var x=0; x< humanresources.employees.length; x++){
    totalSalary += humanresources.employees[x].salary
}
console.log(totalSalary)
// Part 4

function updateSalary(employees){
    for(var x= 0; x< employees.length; x++){
        if(employees[x].raiseEligible == true){
            employees[x].salary = employees[x].salary * 1.1
            employees[x].raiseEligible = false
        }
    }
}
updateSalary(humanresources.employees)
console.log(humanresources.employees)
// Part 5

wfh = ['Anna', 'Sam']
for(var x= 0; x< humanresources.employees.length; x++){
    if(wfh.indexOf(humanresources.employees[x].firstName) >= 0){
        humanresources.employees[x].wfh = true
    } else {
        humanresources.employees[x].wfh = false    
    }
}
console.log(humanresources.employees)
// Part 6