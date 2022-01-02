// Here we lern how to attach Prototype in method

 
function Person(first, last, a){
    this.firstName = first;
    this.lastName =last;
    this.a = age;


}
 Person.prototype.fullName =function(){
    console.log(this.firstName + " " + this.lastName);

} 

let person1 = new Person("Samrat", "Singh", 21);

let person2 = new Person("Ajeet", "Kumar", 22);

console.log(person1.fullName());

console.log(person2);


 // *** Property in Prototype :-

 