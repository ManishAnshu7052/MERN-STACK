//first method

let person1 = {
    firstName : "Manish Kumar",
    lastName : "Patel",
    age : 24,
}
person1.sayHello = function(){
    console.log("Hello !!!!!!!!!!")
}
person1.sayHello();
console.log(person1);

//second Meyhod

let person2 = {
    firstName : "Avanish Kumar",
    lastName  : "patel",
    age : 20,
}
function greet(){
    console.log("By !!!!!!");
}
person2.sayHello = greet;
person2.sayHello();

//third method

let person3 = {
    firstName : "Manoj",
    lastName : "Patel",
    age : 40,
    sayHello : function(){
        console.log("!!!!!!!!!!!!")
    }
}
person3.sayHello();

//four method ES6

let person4 = {
    firstName : "vishwajeet",
    lastName : "Patel",
    age : 28,
    sayHello(){
        console.log("Hi.....")
    }
}
person4.sayHello();