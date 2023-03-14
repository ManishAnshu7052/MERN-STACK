class emp{
    constructor(n){
        this.name = n;
    }
    msg(){
        console.log("Hi......")
    }
}
class manager extends emp{
    constructor(p,d){
        super(p);
        this.department = d;
    }
    info(){
        console.log(this.name + " is mamanger of department " + this.department);
    }
}
let mng1 = new manager("Manish Kumar" , "web development");
console.log(mng1.info());
