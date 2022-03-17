## Problem 1
### Create an Employee class
An employee should have
- name
- Id number
- List of permissions that they can perform on the company website
- Store number for the store where they work

### Solution

```javascript
class Employee {
  constructor(name, empid, emppermissions, storenum) {
    this.name = name;
    this.empid = empid;
    this.emppermissions = emppermissions;
    this.storenum = storenum;
  }
}
console.log(Employee);
```
## Problem 2
### Create a Manager class
A manager is a type of employee. A manager should should have
- name
- Id number
- List of permissions that they can perform on the company website
- Store number for the store where they work
- List of employees they manage
- The ability to change the permissions an employee that they manage has on the website.

### Solution
```javascript
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
```
## Problem 3
const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway']
Destructure and assign the elements of countries array to fin, est, sw, den, nor

### Solution
```javascript
const countries = ["Finland", "Estonia", "Sweden", "Denmark", "Norway"];

const [fin, est, sw, den, nor] = countries;
console.log(fin, est, sw, den, nor);
```
## Problem 4
const rectangle = {
width: 20,
height: 10,
area: 200,
perimeter: 60
}
Destructure the rectangle object by its properties.

### Solution
```javascript
myRectangle(rectangle);

function myRectangle({ width, height, area, perimeter }) {
  const message = "My width is " + width + ", my height is " + height + ", my area is " + area + ", my perimeter is " + perimeter + ".";

  document.getElementById("demo").innerHTML = message;
}
```
## Problem 5
```javascript
const evens = [0, 2, 4, 6, 8, 10]
const odds = [1, 3, 5, 7, 9]
Using the spread operator, the Array .map() method, and at least one arrow function to
place the values from evens and odds into an array and display the values on a html
screen in numerical order.

### Solution
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
```
