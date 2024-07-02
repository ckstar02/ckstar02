// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector("#add-employees-btn");
// [
const employeesArray = [];
//   {
//   firstName:"Cindy",
// lastName:"Tran",
//   salary:12345},
// {firstName:"Rachelle",
//   lastName:"Zilavec",
// salary:12356},
// {
//   firstName:"Calvin",
//   lastName:"Tran",
//   salary:2345
// }];

// Collect employee data
const collectEmployees = function () {
  let keepDoing = true;
  while (keepDoing) {
    const firstName = window.prompt("Please enter the Employee's First Name");
    const lastName = window.prompt("Please enter the Employee's Last Name");
    let salary = window.prompt("Please enter the Employee's salary");

    const employee = {
      firstName: firstName,
      lastName: lastName,
      salary: parseFloat(salary),
    };
    employeesArray.push(employee);

    keepDoing = confirm("Do you wish to add another employee?");
  }
  return employeesArray;
};
console.log(employeesArray);

// TODO: Get user input to create and return an array of employee objects

// Display the average salary
const displayAverageSalary = function (employeesArray) {
  let avTotal = 0;
  const numberEmployees = employeesArray.length;

  for (const employee of employeesArray) {
    avTotal += employee.salary;
  }
  const avgSalary = avTotal / numberEmployees;
  console.log(`Your employees have an average of ${avgSalary} dollars!`);
};
// TODO: Calculate and display the average salary

// Select a random employee
const getRandomEmployee = function (employeesArray) {
  const randomEmployee =
    employeesArray[Math.floor(Math.random() * employeesArray.length)];
  console.log(
    console.log(`Congratulations to ${randomEmployee.firstName} ${randomEmployee.lastName}, our random drawing winner!`)
  );

  // TODO: Select and display a random employee
};

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function (employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector("#employee-table");

  // Clear the employee table
  employeeTable.innerHTML = "";

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
};

const trackEmployeeData = function () {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log("==============================");

  getRandomEmployee(employees);

  employees.sort(function (a, b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
};

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener("click", trackEmployeeData);
