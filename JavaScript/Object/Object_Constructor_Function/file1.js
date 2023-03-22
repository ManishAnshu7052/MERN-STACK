function student(first, last, age, clas){
      this.firstName = first;
      this.lastName = last;
      this.age = age;
      this.class = clas;
}
var Student1 = new student("vishwajeet","kumar",20,7);
console.log(Student1);

//add property Student1
Student1.natonality = "Indian";
console.log(Student1);

//add function Student1
Student1.name = function(){
    return this.firstName + " "+this.lastName;
}
console.log(Student1.name());// vishwajeet kumar