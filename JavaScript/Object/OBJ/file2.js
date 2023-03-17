//change property

let person = {
    firstName : "Manish",
    lastName : "Patel",
}
person.firstName="vishwajeet";
console.log(person.firstName);

//add new property

let person2 = {
    firstName : "Avanish",
    lastName : "Patel",
}
person2.Age = 23;
console.log(person2);

//delete property

let person3 = {
    firstName : 'Manoj',
    lastName : 'Patel',
    age : 40,
}
delete person3.lastName;
console.log(person3);