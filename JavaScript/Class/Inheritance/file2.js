class employes{
    constructor(n){
        this.name = n;
    }
}
class manager extends employes{

}
let mng1 = new manager('vishwajeet');
console.log(mng1.name);