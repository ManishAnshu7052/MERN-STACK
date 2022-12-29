function app(){
    const myFunc = () =>{
        console.log("Hello from myFunc...");
    }
    const addTwo = (num1,num2) =>{
        return num1+num2;
    }
    const mul =(num1,num2)=>num1*num2;
    console.log("inside app");
    myFunc();
    console.log(addTwo(21,11));
    console.log(mul(2,4));
}
app();