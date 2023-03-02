class Person{
    constructor(name){
        this.name = name;
    }
    introduce(){
        console.log(`hello, my name is ${this.name}`);
    }
}
const person = new Person("Manish Kumar");
person.introduce();