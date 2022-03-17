//1. Class employees with properties name, id number, permissions they can perform, and store number where they work.

class Employee {
  constructor(name, empid, emppermissions, storenum) {
    this.name = name;
    this.empid = empid;
    this.emppermissions = emppermissions;
    this.storenum = storenum;
  }
}
console.log(Employee);

//2. Class Manager who extends from class Employee. Class Manager inherits all the properties of class Employee.
//Class Manager has two additional properties: list of employees and the ability to change the employee permissions.

class Manager extends Employee {
  constructor(
    name,
    empid,
    emppermissions,
    storenum,
    emplist,
    changepermissions
  ) {
    super(name, empid, emppermissions, storenum);
    this.emplist = emplist;
    this.changepermissions = changepermissions;
  }
}
console.log(Manager);

//3.Destructure and assign the elements of countires array to fin, est, sw, den, nor
const countries = ["Finland", "Estonia", "Sweden", "Denmark", "Norway"];

const [fin, est, sw, den, nor] = countries;
console.log(fin, est, sw, den, nor);


//4.Destructure the rectangle object by its properties.
const rectangle = {
  width: 20,
  height: 10,
  area: 200,
  perimeter: 60,
};

myRectangle(rectangle);

function myRectangle({ width, height, area, perimeter }) {
  const message = "My width is " + width + ", my height is " + height + ", my area is " + area + ", my perimeter is " + perimeter + ".";

  document.getElementById("demo").innerHTML = message;
}

// 5.Using the spread operator, the Array .map() method, and at least one arrow function to place the values from evens and odds into an array
//and display the values on a html screen in numerical order.
const evens = [0, 2, 4, 6, 8, 10];
const odds = [1, 3, 5, 7, 9];
const combined = [...evens, ...odds];

console.log("combined array:", combined);
document.write("combined array :", combined);

combined.sort(function (a, b) {
  if (a > b) return 1;
  if (a < b) return -1;
  return 0;
});

document.write("<br>sorted array :", combined);

function showarray(val) {
  return "" + val + "";
}

const myList = combined.map((item) => showarray(item));
document.write("<br>myList: ", myList);
