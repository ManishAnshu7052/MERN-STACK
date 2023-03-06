class Person{
    constructor(n,a){
        this.name = n;
        this.age = a;
    }
    sayHi(){
        console.log("Hi....");
    }
    static hello(){ //static function
        console.log("hello....");
    }
}
let person1 = new Person("Manish Kumar",24);
console.log(person1);
person1.sayHi();
Person.hello();//static function call directaly in class(Person)