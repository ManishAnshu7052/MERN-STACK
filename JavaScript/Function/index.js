/**input = array,target(number)
 * output = index of target if target present in the array
 */
function findTarget(array,target){
    for(let i=0;i<array.length;i++){
        if(array[i]===target){
            return i;
        }
    }
    return -1;
}
const myArray = [1,3,5,7,90];
const ans = findTarget(myArray,7);
console.log(ans);