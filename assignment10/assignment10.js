var humanresourcesJSON = 
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

console.log(humanresourcesJSON);
// Part 2

console.log(humanresources.Employees);
// Part 1

var AnnaJSON = 
    {
    "firstName" : "Anna",
    "department" : "Tech",
    "designation" : "Manager",
    "salary" : 40000,
    "raiseEligible" : true, 
     }
var Anna = JSON.parse(AnnaJSON)
humanresources.Employees.push(Anna)
console.log(humanresources.Employees)
// Part 3

var totalSalary = 0
for(var x=0; x< humanresources.Employees.length; x++){
    totalSalary += humanresources.Employees[x].salary
}
console.log(totalSalary)
// Part 4

function updateSalary(Employees){
    for(var x= 0; x< Employees.length; x++){
        if(Employees[x].raiseEligible == true){
            Employees[x].salary = Employees[x].salary * 1.1
            Employees[x].raiseEligible = false
        }
    }
}
updateSalary(humanresources.Employees)
console.log(humanresources.Employees)
// Part 5

wfh = ['Anna', 'Sam']
for(var x= 0; x< humanresources.Employees.length; x++){
    if(wfh.indexOf(humanresources.Employees[x].firstName) >= 0){
        humanresources.Employees[x].wfh = true
    } else {
        humanresources.Employees[x].wfh = false    
    }
}
console.log(humanresources.Employees)
// Part 6