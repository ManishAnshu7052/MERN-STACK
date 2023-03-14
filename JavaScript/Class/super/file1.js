class emp{
    constructor(n){
        this.name = n;
    }
}
class manager extends emp{
    constructor(p,d){
        super(p)
        this.department = d;
    }
}
let mng1 = new manager("Manish Kumar Patel","web development");
console.log(mng1)