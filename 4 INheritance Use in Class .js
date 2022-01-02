// Use of INheritance in class

class emp {
    constructor(){
        console.log.apply("emp constructor called....");
    }
}

class manager extends emp{

}

let mng1 = new manager();

console.log(mng1);

