//Case- 1 * If you don't pass any parameter
function add() {
  if (arguments.length == 0) {
    document.write("No parameter passed!");
  } else {
    document.write("Parameter passed!");
  }
}
add(12);

document.write("<br>")
document.write("<br>")

function add2(){
    if(arguments.length==0){
        document.write("No arguments passed!");
    }
    else{
      let sum =0;
      for(let i=0;i<arguments.length;i++){
        sum = sum+arguments[i];
      }
      document.write(sum);
    }
}
add2(12);
