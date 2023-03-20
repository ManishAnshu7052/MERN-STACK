//Ex-1

let x = new Date();
console.log(x);

//Ex-2

let x2 = new Date(2018,11,13,10,33,56,7);
console.log(x2);

//Ex-3 using string

let x3 = new Date("October 13 , 2018 11:12:33");
console.log(x3);

//Ex-4 Date and time count in milidecimal
let x4 = new Date("October 13 , 2018 11:12:33");
console.log(x4.getTime());

//Ex-4 method
let x5 = new Date("October 13 , 2018 11:12:33");
console.log(x5.getFullYear());
console.log(x5.getMonth());


//Ex-6 Find current date after 50 days

let x6 = new Date("October 13 , 2018 11:12:33");
x6.setDate(x6.getDate() + 50);
console.log(x6);

//second method

let x7 = new Date("October 13 , 2018 11:12:33");
let y = new Date("October 13 , 2018 11:12:33");
y.setDate(x.getDate() + 50);
console.log(x7);
console.log(y);