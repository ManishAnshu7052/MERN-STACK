// Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the propert

var student = {
    name : "David Rayy",
    class : 6,
    rollno : 12,
}
console.log(student);//{ name: 'David Rayy', class: 6, rollno: 12 }
delete student.rollno;
console.log(student);//{ name: 'David Rayy', class: 6 }