let person1 = {};

console.log(person1);  // Blank On=bject

let person2 ={Name :"Samrat"};  // Jab bhi ham object banate hai ya property name ka object apane aap 
// attach ho jata hai .

console.log(person2);


 // *** Has Own Property 

 // Iska kaam hai sare kisi object me us name ka peroperty hai ya nahi

  let peroson3 = {
      name:"Smarat"
  };

  console.log(peroson3.hasOwnProperty("age"));   // agar hoga to false dikaayega nahi to true dikaayega

// Prototype :- It's a container



  // *** Creating with constructor 

  // Constructure ke through koi property banete hai to ye apane name ka property bana leta hai

  // In ja  jiske andar koi bhi container nahi hai usko null container bolege


  function Person(n){
      this.name =n;

  }

  let peroson4 = new Person("Samrat");

  console.log(peroson4);
  // It's use in INheritance 



 