//Multiple way to print all element in Array

const a =[10,23,88,90];
for(i=0;i<a.length;i++){
    console.log(a[i]);
}
/** Output
 * 10
   23
   88
   90
 */
//print with the index
const b = [10,56,33,45,87];
for(i=0;i<b.length;i++){
    console.log("At Index "+i+"   "+b[i])
}
/** Outpou
 * At Index 0   10
   At Index 1   56
   At Index 2   33
   At Index 3   45
   At Index 4   87
 */

   //Using constructor:
   var s = new Array();
   s[0] = "ram";
   s[1] = "rehan";
   s[2] = "akhil";
   s[3] = "kartik";
   for(i=0;i<s.length;i++){
    console.log(s[i]);
   }

   //use for in loop

   let color = ["red","blue","green","yellow"];
   for(let a in color){
    console.log(color[a]);
   }

   //use for of loop
   let color2 = ["red","blue","green","yellow"];
   for(let a of color2){
    console.log(a);
   }

   //using for each loop
   let c = ['red','yellow','green','white'];
   c.forEach(function(a,index){
    console.log(a);
   })

  