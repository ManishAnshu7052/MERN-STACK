class emp{
    #name = "";
    #age = "";
    constructor(n,a){
        this.#name = n;
        this.#age = a;
    }
    getName(){
        console.log(this.#name);
        console.log(this.#age);
    }
}
let emp1 = new emp("vishwajeet",23);
console.log(emp1.getName());