class person{
    constructor(n,a){
        this.name = n;
        this.age = a;
    }
    sayHii(){
        console.log("sayHiiii.....");
    }
    static property = "something";
    static hello(){
        console.log("hello.....");
    }
}
let person1 = new person("Manoj kumar",34);
console.log(person1);
person1.sayHii();
person.hello();
console.log(person.property);

/**
 * output-
 * 
person { name: 'Manoj kumar', age: 34 }
sayHiiii.....
hello.....
something
 */