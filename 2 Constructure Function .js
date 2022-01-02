 // Isme jitne bhi property hai use pass krege as a argument 
 // THis is conscructure function 
 // yahs ham ek baar blue print bana kiya to kitna bhi person add akr sakte hai 


 function Person(first, last, a){
     this.firstName = first;
     this.lastName = last;
     this.age = a;

 };

  let Person1 = new Person("Samrat", "Singh", "20");

  let Person2 = new Person("Anirudh", "Kumar", 19);
  console.log(Person1);
  console.log(Person2);



  // *** We can also add method here

  function Person3(first, last, a){
    this.firstName = first;
    this.lastName = last;
    this.age = a;

    this.sayHi = function(){
        alert("Hii");
    }

};

 let Person4 = new Person("Samrat", "Singh", "20");

 let Person5 = new Person("Anirudh", "Kumar", 19);
 console.log(Person4);
 console.log(Person5);




   // *** Change Age here 

  
  function Person8(first, last, a){
    this.firstName = first;
    this.lastName = last;
    this.age = a;

    this.sayHi = function(){
        alert("Hii");
    }

    this.chanegAge =function(newAge){
        this.age =newAge;
    }

};

 let person8 = new Person("Samrat","Singh", 21);

 let Person7 = new Person("Samrat", "Singh", "20");

 let Person6 = new Person("Anirudh", "Kumar", 19);
 console.log(Person7);
 console.log(Person6);
 
   // Here we can also change the name or modify the name


   // Generally yahi kaam hota hai, object jo banta hai vo dusro ko apana property filahta hai