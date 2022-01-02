
function Creature (ls){
    this.lifeSpan = ls;
}

Creature.prototype.breath = function(){
    console.log("breathing...");
}

let Creature1 = new Creature(100);

console.log(Creature1);

 function Person(first, last, a){
     this.firstName = first;
     this.lastName = last;
     this.age =a;

 }

 Person.prototype.fullName = function(){
     console.log(this.firstName + " " + this.lastName);
 }

 Person.prototype = Object.create(Creature.prototype);

 let person1 = new Person("Samrat" "SIngh", 21);
 let person2 = new Person("Anirudh", "Kumar", 22);

 console.log(person1);
 console.log(person2.breath());