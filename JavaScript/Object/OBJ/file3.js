//check the property present or not using (in) return- true,false

let person = {
    firstName : 'Manish',
    lastName : 'Kumar',
}
console.log('age' in person);//false
console.log('lastName' in person);//true

//itrate object

let person2 = {
    firstName : 'viswajeet',
    lastName : 'kumar',
    age :27,
}
for(let key in person2){
    // console.log(key);
    console.log(key + " : "+person2[key]);
}