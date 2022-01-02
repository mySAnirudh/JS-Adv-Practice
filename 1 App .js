let person = { // Kisi bhi object ko crely braket on kar dete hia to vo object ban jata hai .{}

    firstName : 'Samrat',
    'last name': 'Singh',  // Kisi bhi property ke andar space nahi hota 
    // Agar sapce use karna hai to quotation ke andar use karna hoag
     age: 20



};
// Ek object ke baad 2 Chije ho sakte hai..Propersties ho sakte hai and method 

// How to excess property 

 // 1. Dot Notation
// 1st write object name 

   console.log(person.firstName);

   // Is type me last name ko nahi call kar sakte 

   // So for them 
   // Use Array Like Rotation

   console.log(person["last name"])  // BUt generally dont try to use this

   // We can also change the property or modify the property 

   person.age = 19;  // Here we are modify the property

   console.log(person.age);



  
    // *** // Create new method 

   let person1 = {
    firstName : 'Samrat',
    'last name': 'Singh',
    age:18,

     fullName: function(){
         console.log(this.firstName + " " + this["last name"]);  // Give quotation betn space of space 
     }
   };

   person1.fullName();


    // ***   // Add property in another line 

   let person2 = {

   };
// Property ham baad me bhi add kar sakte hai

   person2.name = "Samrat Singh ";

   console.log(person2);

   // *** // We can also call alert methiod here 

let person3= {};
person3.name = "Samrat Singh ";

person3.sayHi = function(){

    alert("hi");
}

console.log(person3);

person3.sayHi();


    //*** We can also create new onject like this 

     
let person4= new Object();
person4.name = "Samrat Singh ";

person4.sayHi = function(){

    alert("hi");
}

console.log(person4);

person4.sayHi(); 
