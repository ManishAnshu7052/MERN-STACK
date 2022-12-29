function compoundInterest(principle,rate,time,n){
    var interest = principle*(Math.pow(1+(rate/n),(n*time)));
    return principle + interest;

}
console.log(compoundInterest(20000,5,2,2));