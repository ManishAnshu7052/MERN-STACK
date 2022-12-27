function simpleInterest(principle,rate,time){
    var finalAmt=principle+principle*time*rate;
    return finalAmt;
}
console.log(simpleInterest(20000,5,2));