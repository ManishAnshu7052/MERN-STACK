const myObj = {
    name : "Manish Kumar Patel",
    age : 23,
    cars : {
        car1 : "Ford",
        car2 : "BMW",
        car3 : "Fiat"
    }
}

console.log(myObj["name"]);
console.log(myObj.cars.car1);
console.log(myObj.cars["car2"]);

const obj2 = {
    name : "Manish Kumar0",
    age : 30,
    cars:[
        {name: "Ford", models:["Fiesta","Focus","Mustang"]},
        {name : "BMW", models:["320","X3","X5"]},
        {name:"Fiat", models:["500","Panda"]}
    ]
}
//console.log(obj2)
console.log(obj2.cars);