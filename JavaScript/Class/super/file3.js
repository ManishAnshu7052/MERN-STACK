class emp{
    constructor(n){
        this.name = n;
    }
    msg(){
        console.log("Hi.....")
    }
}
class manager extends emp{
    constructor(p,d){
        super(p);
        this.department = d;
    }
    info(){
        super.msg();
        console.log(this.name + " is manager of department " + this.department);
    }
}
let mng1 = new manager("Avanish kumar " , "web development");
console.log(mng1.info());

//Hi.....
//Avanish kumar  is manager of department web development