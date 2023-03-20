//compare date

let x = new Date("October 13 , 2018 11:12:33");
let y = new Date();
if(y>x){
    console.log("x is past date");
}
else if(x>y){
    console.log("x is future date");
}
else{
    console.log("x is same date");
}