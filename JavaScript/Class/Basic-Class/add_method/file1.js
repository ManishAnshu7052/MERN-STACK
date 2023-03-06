class Person{
    constructor(n,a){
        this.name = n;
        this.age = a;
    }
    sayHi(){
        console.log("Hi......");
    }
}
let person1 = new Person("Avanish Kumar",20);
console.log(person1);//Person { name: 'Avanish Kumar', age: 20 }
person1.sayHi();//Hi......