//Getter

var person = {
    name : "vishwajeet",
    age : 24,

get getname(){
    return this.name.toUpperCase();
    
}
}
console.log(person.getname);

//setter
var person2 = {
    name : "Manish Kumar patel",
    
    set setName(n){
        this.name = n.toUpperCase();
    }
}
person2.setName = 'ajit';
console.log(person2.name)