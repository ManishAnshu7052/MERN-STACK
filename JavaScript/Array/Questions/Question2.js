//Write a program to clone an Array
var array_clone = function(arra1){
    return arra1.slice(0);
}
console.log(array_clone([1,2,3,4]));//[ 1, 2, 3, 4 ]
console.log(array_clone([1,2,[2,3]]));//[ 1, 2, [ 2, 3 ] ]