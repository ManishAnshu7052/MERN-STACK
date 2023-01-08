//Write a javascript function to check wheather an 'input' is an array or not

const is_array = function(input){
    if(toString.call(input)==="[object Array]")
    return true;
    return false;
}
console.log(is_array('Manish Kumar Patel'));//false
console.log(is_array([1,2,3,4,5]));//true