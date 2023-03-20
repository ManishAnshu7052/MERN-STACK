//this in Object

let person1 = {
    firstName : "Manish kumar",
    lastName : "Patel",
    age : 24,
    sayHello(){
        console.log("Hello ! I am " + this.firstName +" "+ this.lastName + " and I  have a "+ car.brand + " car");
    }
};
let car = {
    brand : "Tata",
    model : "Safari"
}
console.log(person1);
person1.sayHello();