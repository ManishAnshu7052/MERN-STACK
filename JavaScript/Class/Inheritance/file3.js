class emp{
    constructor(n){
        this.name = n;
    }
    msg(){
        console.log("Hi....")
    }
}
class manager extends emp{
    constructor(p,d){
        super(p);
        this.department = d;
    }
    info(){
        super.msg();
            console.log(this.name + " is manager of department" + this.department);
        }
    }

class admin extends manager{

}
let admin1 = new admin("vishwajeet", "web development");
console.log(admin1);