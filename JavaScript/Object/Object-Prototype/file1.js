function student(first , last , age , clas){
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.class = clas;
}
student.prototype.nationality = "Indian";
var student1 = new student("Manish kumar" , "Patel" , 24,11);
console.log(student1);
console.log(student1.nationality);

//add method
student.prototype.name = function(){
    return this.firstName + " " +this.lastName
}
console.log(student1.name());