 // Name axign the inheritance value 

 class emp {
    constructor(n){
       this.name =n;
    }
    msg(){
        console.log("Hii...")
    }
}

class manager extends emp{
       constructor(p, d){
           super(p);
           this.department =d;
       }
       info(){
           console.log(this.name + "is manager of department "+ this.department);
       }
}

let mng1 = new manager("Samrat" , " Software Engineer");

console.log(mng1.info());

