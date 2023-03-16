// 1
function add(a,b){
    return a+b;
}
let c = add(5,8);
document.write(c);

document.write("<br>")

//2
function add2(a,b){
    let d = a+b;
    return d;
}
let sum = add2(4,5);
document.write(sum);

document.write("<br>");

//return an array
function array(){
    let d = [1,2,3,5,7,9,0];
    return d;
}
let arr = array();
document.write(arr);


document.write("<br>");

// compare using return:
function compare(a,b){
    if(a>b){
        return 1;
    }
    else if(b>a){
        return -1;
    }
    else{
        return 0;
    }
}
let com = compare(12,11);
document.write(com)


