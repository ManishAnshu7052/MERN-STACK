let car = "Audi";//Global variable
function add(){
    let result = 33;//Local variable
}


let car2 = "Audi";
function add2(){
    let result = 33;
    console.log(result);//local variable use only inside function
}
add2();


let car3 = "Tata"; //Global variable use any where in function or outside of function
function add3(){
    let result = 44;
    console.log(car3);
}
add3();

//Local variable ,we can use again

function add4(){
    let result = 67;
    console.log(result);
}
function sub(){
    let result2 = 59;
    console.log(result2);
}
add4();
sub();