/** @format */

let arr = [
  { id: 1, name: "john", age: "18", marks: 80 },
  { id: 2, name: "jack", age: "20", marks: 85 },
  { id: 3, name: "karen", age: "19", marks: 35 },
];

function PrintStudentswithMap() {
  arr.map((a) => {
    a.marks > 50 && console.log(a);
  });
}

function PrintStudentsbyForEach() {
  arr.forEach((a) => {
    a.marks > 50 && console.log(a);
  });
}

function addData() {
  const id = arr[arr.length - 1].id + 1;
  const names = prompt("Enter the name of the Student");
  const age = prompt("Enter the age of the Student");
  const marks = prompt("Enter the marks of the Student");

  const newObj = {
    id: id,
    name: names.trim(),
    age: age.trim(),
    marks: Number(marks.trim()),
  };
  arr.push(newObj);
  console.log(newObj);
}

function removeFailedStudent() {
  arr = arr.filter((a) => {
    return a.marks >= 50;
  });

  console.log(arr);
}

function concatenateArray() {
  let newArr = [
    { id: arr[arr.length - 1].id + 1, name: "Ash", age: "18", marks: 90 },
    { id: arr[arr.length - 1].id + 2, name: "Hideki", age: "20", marks: 69 },
    { id: arr[arr.length - 1].id + 3, name: "Michi", age: "31", marks: 50 },
  ];
  arr = arr.concat(newArr);
  console.log(arr);
}
