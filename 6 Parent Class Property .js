 // Name axign the inheritance value 

 class emp {
    constructor(n){
       this.name =n;
    }
}

class manager extends emp{
       constructor(p, d){
           super(p);
           this.department =d;
       }

}

let mng1 = new manager("Samrat" , " Software Engineer");

console.log(mng1);

