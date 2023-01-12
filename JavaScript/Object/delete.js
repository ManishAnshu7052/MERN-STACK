const person ={
    firstName : "John",
    lastName : "Doe",
    age : 23,
    eyeColor : "blue",
}
delete person.age;
console.log(person);

//{ firstName: 'John', lastName: 'Doe', eyeColor: 'blue' }

const person2 ={
    firstName : "John",
    lastName : "Doe",
    age : 23,
    eyeColor : "blue",
}
delete person2["age"];
console.log(person2);//{ firstName: 'John', lastName: 'Doe', eyeColor: 'blue' }