//Anonymous function -- without name
let show = function(){
    console.log("Hello world!")
}
show();

//setTimeout() function
function show2(){
    console.log("Hello");
}
setTimeout(show2,3000);

//case2
setTimeout(function(){
    console.log("Rahul");
},4000);

//immeditately Invocked Function
(function(){
    console.log("Manish kumar Patel");
    let string = "Hellooo";
    console.log(string);
    alert("Hello world");
})();// () immeditately invocked function