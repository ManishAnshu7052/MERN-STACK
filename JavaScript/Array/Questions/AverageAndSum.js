//Find the average and sum of the Array

var nums =[1,2,3,4,5,6];
var l = nums.length;
var totalSum = 0;
for(var i=0;i<nums.length;i++){
    totalSum = totalSum + nums[i];
}
console.log(totalSum);//21

var avg = totalSum/l;
console.log("Average " + avg);