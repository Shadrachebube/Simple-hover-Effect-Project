window.addEventListener("resize",() => {
   let w = document.querySelector(".w").innerHTML = window.innerWidth;
   let h = document.querySelector(".h").innerHTML = window.innerHeight;
  
})



console.log("am here");


var count = 0
function cc(card) {
     
    switch (card) {
        case 1:
        case 2:
        case 3:
        case 4:
            count++;
            break;
        case 10:
        case "J":
        case "Q":
        case "K":
        case "A":
            count--
            break;  
            
                  }

   var gee = "Hold on"  
   if(count > 0 ) {
   gee = "bet"
   } 
    
   return count + " " + gee;
     
}

 cc("K"); cc("J"); cc("Q"); cc("A"); cc(10)
 console.log(cc(1))




 var goods = {
    4: "obinna",
    5:"Edungwo",
    1:"Onyibest" 
 }

 var men = 1
 var gee = goods[men]
console.log(gee);



var Ebig = {
    "a gap": "obinna",
    "a man":"Edungwo",
  "a BEE":"Onyibest" 
 }

 console.log(Ebig["a gap"])

//how to change the value of an object 
 var Adada = {
    gap: "obinna",
    man:"Edungwo",
    BEE:"Onyibest" 
 }
 let me = Adada.gap = "obinna ugwuoke changed"
 console.log(me)

 //adding properties to object
 Adada.og = 'MAMA EMEKA'
 console.log(Adada)

 //deleting properties from object
 delete Adada.gap
 console.log(Adada)

 //using objects for lookups
 function ebube(eme) {

    var access = ""

    var lookup = {
       "name":"Ebuka",
       "age":35,
       "mass":10,
       "place":"Obollo"

    }
   
    access = lookup[eme]
    return access
    
 }


 console.log(ebube('name'))

 //how to check if an object is in an array

 var kepa = {
    "name":"Ebuka",
    "age":35,
    "mass":10,
    "place":"Obollo"

 }

 function oby(kojo){
   if(kepa.hasOwnProperty(kojo)){

   return kepa[kojo]
   

   }
   else{return "not found"}

 }

  console.log(oby("place"))


//broad and vast try and go through it

  var jepa = [
   {
   "nameG":"Ebuka",
   "age":9,
   "mass":10,
   "place":"lagos"

},

{
   "nameG":"jude",
   "age":75,
   "mass":10,
   "place":"ikeja"

},

{
   "nameG":"Ebube",
   "age":35,
   "mass":10,
   "place":"Obollo"

}
  ]


  function ebuse(name,prop) {

  for(var i = 0; i < jepa.length;i++){
  
    if(jepa[i].nameG ===name){
      return jepa[i][prop] = jepa[i][prop]|| " sorry property does not exist"

    }

   }
   
   return "contact doesnt exist"
  }

  console.log(ebuse("Ebuka", "place"));



  //how to convert strings into an integer or arrays

  function Men(gee){
   return parseInt(gee)

  }
 let keke = Men("25")
 console.log(keke);
 //or using this console.log method
 //console.log(gee("25"))

 
 //HOW TO convert base two to base Ten

 function okeke(gee){
   return parseInt(gee, 2)

  }
 let nneka = okeke("101")
 console.log(nneka);


 
 //HOW TO convert four to base Ten

 function oge(gee){
   return parseInt(gee, 4)

  }
 let nne = oge("101")
 console.log(nne);


 //Ternary Operators
 function ike(a,b){
 return a === b;

  }
 let e = ike(2,1)
 console.log(e);



 function k(b){
   return b > 1 ? "it is greater than 1" : "it is not greater than 1"
  
    }
   let u = k(12)
   console.log(u);

   function hey(b){
      return b > 1 ? "it is greater than 1" : b > 0  ? "yes b is greater than\/ 0 but less than 1": "it is not greater than 1"
      
       }
      let fee = hey(0.5)
      console.log(fee);

 //learn Object.freeze
  function ohee() {
   
  const nnana = {
   pi: 3.142

 }

 //Object.freeze(nnana) //this is used to stop emutation/changing/rearrangement 
 //of the Values of a given OBJECT i.e you dont want the items in your object to change 

 try {
   nnana.pi = 99;
 } catch (error) {
   console.log(error);
   
 }
  
return nnana.pi;

}

let na = ohee()
console.log(na);



//accessing arrays and adding them up
let girl = [ 2, 4, 5, 11, 10 ]  ;
let total = 0;
 for (var i = 0; i < girl.length; i++) {
  total += girl[i];
 
    }
  console.log(total);

  //accessing a nested array
  
  function ray(mama) {
   let multiply = 1;
  for (let b = 0; b < mama.length; b++) {
   
   for (let n = 0; n < mama[b].length; n++) {
      multiply *= mama[b][n]
         }
   
  }
   return multiply
  }


 let obg = ray([[2,4,],[1,3], [1,2] ]);
 console.log(obg)

 //do while and while loop
 let tee = 10;
 let edu =[];

   do {
      edu.push(tee);
      tee++;
      
   } while (tee<8);
   console.log(tee, edu)

 //How to reassign/update an array declear with const.
 //and changing its contents using BRACKET NOTATION
 const otobo =[ "nwannem oh","nwa ngwu","obinwa","ezigbo nnem"];
      // otobo =["mmadu","emele"]; contents can't be changed it this way. try this
      otobo[0] = 'ikenna'//changed 'nwannem oh' to 'ikenna'
      otobo[1] = 'obinna'//changed 'nwa ngwu' to 'obinna'
      otobo[3] = 'EMEKA MMADU'//Changed 'ezigbo nnem' to 'EMEKA MMADU'

      console.log(otobo);

      let m = (num1,num2) => num1.concat(num2)//declared and placed the function into a countainer
      let ma =   m([2,4,1],[3,1]) //called the function here       
      console.log(ma)//outpu the result here 


//
let ogo = [2,-1, 0, 0.9, -6.2, 3, 4, 5, 6, 7, 8, 9]
let bee =(num) =>{
    let ebube = num.filter(me => Number.isInteger(me) && me > 0).map(be => be + be)
      //the above says go to an array called "ogo" get me all the 
      //integers(number without decimals but can be eaither a megative or positive number) 
     //and all the numbers that are greater than zero. the map method as well carries a 
     //function that adds up the results from filter method
      return ebube
}

let he = bee(ogo);
console.log(he);


//check out please bro
let onah =function ( num,value =1
){
   return num + value
   function onah(num ){
      return num
   }
   
}
 let ebusm = onah(3,6)
 let eche = onah(2)
 console.log(ebusm);
 console.log(eche);

//also check out the differences
//this performs to functions please study it well and do some testings by changing
//their numbers to see the effect
let shadrach =(function (){
      
      return function shadrach( num,value =1 ){
         return num + value
      }
      
   }) 
   (); //this is another way of calling the
   // function when a function is placed in a container 
    let ebu = shadrach(3,4)
    let ece = shadrach(5)
    console.log(ebu);
    console.log(ece);
   
   //
 "<br>"
   let shady =(function (){
      
      return function shady( x,y,z ){
        let obim =[x,y,z]
         return obim.reduce((a,b)=>a+b, 0)
      }
      
   }) ();
   let dabere = shady(1,5,4)
   console.log(dabere)

//easy way of doing the above using the resst operator
//the below method can acept many items as an array and
// add them up. try as many no of items as you can

//USING REST METHOD
let hady =(function (){
      
   return function hady( ...obim ){
    
      return obim.reduce((a,b)=>a+b, 0)
   }
   
}) ();
let dabe = hady(1, 5, 4, 2, 3, 1000)
console.log(dabe)

//the use of spread operator. pay attention
let mpe = ['edu', 'amaka', 'ebuka', 'chidi']  ;
let mpe22;

(function () {
   mpe22 = mpe
  return mpe[0] = 'NNAEMEKA'//changed the content 'edu'
})();

console.log(mpe22)//consoled 'mpe22' instead of 'mpe' to
// show that 'mpe22' js now assigned to 'mpe'
//though using this method cannot output the whole items in
// 'mpe'
//To output all the items use the method below


//USING SPREADING METHOD
let mp = ['edu', 'amaka', 'ebuka', 'chidi']  ;
let mp22;

(function () {
   mp22 =[...mp] //using this SPREAD OPERATOR. that has dots
  return mp[0] = 'EBUKA' //cannot change the content.gives out all the items of 'mp' instead 
})();

console.log(mp22);



//USING DESTRUCTURING METHOD to access Objects


const EBUBE = { name:'MMESOMA',  place: "IMILIKE-ENU" }

function yep(ikenna) {

   const{name:vertebrate} = ikenna
   return vertebrate

      
}

let ngo = yep(EBUBE)
console.log(ngo)


//USING DESTRUCTURING METHOD to access NESTED Objects
const angel = {name2:{boy:"OBINNA", girl:"ADAEZE"}, place:{local:"IMILIKE", foreign:"ISREAL"}}

function daddy(Boss) {
   const{ place:{ local:Beta }  }  =  Boss
   return Beta

}

let dd = daddy(angel)
console.log(dd);


//HOW TO USE DESTRUCTURING ASSIGNMENT TO ASSIGN VARIABLE FROM ARRAYS
const[x,y] = [1,2,3,4,5,6,7];
console.log(x,y) //gives out 1 and 2

//to access the third element and skipping the second element check the code below

const[a, b, , d ]= [1,2, 3,4,5,6,7];//i added a comma in place of 'C' in order to escape it

console.log(a,b,d) //gives out 1, 2 and 4

//NOTE: You can also use destructing of arrays to exchange or switch values of two variables
let A1 = 8,  B1 = 10;
(
()=>{

 "use strict";
 
   [A1, B1] = [B1, A1]

}

)();

console.log(A1);//outputs "10" instead of "8" 
console.log(B1);//outputs "8 instead of "10" 


//HOW TO USE DESTRUCTURING ASSIGNMENT WITH THE REST OPERATOR
//where it is used to return an array with first three items missing 
const allow = [1, 2, 3, 4, 5, 6, 7];
function ebuse(paper) {
   const [ , , ,...man] = paper //the "," shows that a value is supposed to be there
   return man                    //but it left empty
}

let abuchi = ebuse(allow);
console.log(allow)//logs out all the items in "allow " array
console.log(abuchi);//logs out only the ones the were not escaped or skipped.
                    //i.e it logs out everything except "1,2, 3,"


//USING DESTRUCTURING ASSIGNMENT TO PASS AN OBJECT AS A FUNCTION`S PARAMETERS
const stat = {
     max : 56,
     standard_deviation :4.34,
     median:34.54,
     mode:23.87,
     min:-4,
     average:35.85

};

const half = ( function () {
return function gee(stat) {
   return (stat.max + stat.min)/2.0
   
} })();
console.log(stat)//logs out all the data in stat
console.log(half(stat))//logs out only the evaluated results which is 26
 //check out the simplest way of solving the above problem using destructuring assignment
  
 const tat = {
   max : 56,
   standard_deviation :4.34,
   median:34.54,
   mode:23.87,
   min:-4,
   average:35.85

};

const hal = ( function () {
return function gee({max, min}) {
 return (max + min)/2.0
 
} })();
console.log(tat)//logs out all the data in stat
console.log(half(tat))//logs out only the evaluated results which is 26


//CREATE A STRING USING TEMPLATE LITERALS

 const objizu = {
  success : ["A level", "B level", "C level"],
  Fairlure : ["E level", "D level", "F level"],
  Skipped : ["id-blacklist", "no-dup-keys"],
   }

   function ene(aspect){

      const EBUBE = [];
      for (let i = 0; i < aspect.length; i++) {
         // element = aspect[i];//LONG WAY
         //EBUBE.push(`${element}`)//LONG WAY
           EBUBE.push( `<li> i love  ${aspect[i]} </li> `)
       
      }
      return EBUBE
   }

  let hear = ene(objizu.success);
  console.log(hear);


  //USE SIMPLE FIELD TO WRITE A CONCISE LITERAL DECLARATION
  //LONG METHOD
 const ebee = (name, age, place ) => {

   return{
      name: name,
      age : age,
      place: place,
   }
   
  }

  console.log(ebee( 'EJIKE', 54, 'IMILIKE-AGU'))

  //SHORTCUT
  const boss = (name, age, place )=> ({name, age, place })

  console.log(boss( 'EJIKE', 54, 'IMILIKE-AGU'))


  //WRITE A CONCISE/SIMPLE DECLARATION FUNCTIONS

  const bicycle = {

    gear: 2,
    setGear: function (MEKUS) {
      
      "use strict ";//LONG METHOD
      this.gear = MEKUS //change the value of "gear" to
      // whatever that will be passed in as argument to "MEKUS" parameter

    }

  };

bicycle.setGear(4)//function call that changed the 'VALUE' of 'GEAR'
console.log(bicycle.gear)//outputs the current value of gear which is "4"


const car = {
    brakee : 33,
    setMan(KEKUS){
      "use strict"//SHORTCUT
      this.brakee = KEKUS
    }

}

car.setMan(4)//function call that changed the 'VALUE' of 'GEAR'
console.log(car.brakee)//outputs the current value of gear which is "4"


//HOW TO USE CLASS SYNTAX TO DEFINE A CONSTRUCTOR FUNCTION
//OLD METHOD
var spaceShuttle = function (place) {
   this.man = place
  // return man //just testing something
  }

  let odog = new spaceShuttle("OBOLLO-AFOR")
  console.log(odog.man);

  //let lee = spaceShuttle("IMILIKE-AGU");//just testing something
 // console.log(lee);//logs out "IMILIKE-AGU"

//THE NEW METHOD USING "CLASS CONSTRUCTOR" EASIER THAN THE ABOVE METHOD
class spaceShuttl{constructor(place) {
   this.man = place}
}

let oog = new spaceShuttl("UMUONU-UBAHU");
console.log(oog.man);//logs out umuonu ubahu;

function desire() {
   class Ejike{
      constructor( name){
         this.OMENGANGA = name 
      }
     
   }
   return Ejike
}

let ik = desire()
let obc = new ik("IKENGA")
console.log(obc.OMENGANGA)//Very tough but easy to understand



//USING GETTERS AND SETTERS TO CONTROL ACCESS TO AN OBJECT
   class BOOK{
      constructor(name){
 
         this.CAGE = name

      }
       
      getters() {

        return this.CAGE;

      }

      setters(types){
        return this.CAGE = types;
      }

   }

   let mpempe = new BOOK("IDODUME BIOLOGY");
   let ot = mpempe.getters("nduka");//you still cant change after adding "nduka"
   // because fuhction is a getter function
  let oy = mpempe.setters("nduks")//successfully changed with setters function
   console.log(ot)
   console.log(oy)

   
   //ANOTHER WAY USING FUNCTION CONSTRUCT METHOD.
   function obinwa() {

      class House{
         constructor(type){
            this.name = type 
         }
         
         getters1(){
          return this.name;
         }
        
         setters1(set){
          return this.name = set
         }
      }
      return House
   }

   let fun = obinwa()
   let H = new fun("Ebubechukwu House")
   let mmA = H.getters1();//only outputs the value but cant change it even if you add sth inside the bracket
   let mpA = H.setters1("Shadrach House"); //changes the value

   console.log(mmA);//logs out "Ebubechukwu House" and didnt change anything 
   console.log(mpA);//logs out 'Shadrach House'


   //USING FUNCTION CONSTRUCTORS, GETTERS AND SETTERS TO SOLVE MATHEMATICAL PROBLEMS
   function mal() {

      class MALE{

         constructor(main){
            this.ACCCESS =  `${(main-32)*5/(9) } Fahrenheit`
                  }

         getters2(){
          return this.ACCCESS;
         }    
         
         setters2(hey){
          return this.ACCCESS = `${(hey-32)*5/(9) } Fahrenheit` ;
         }
      }
      
     return MALE
   }

   let mak = mal()
   let makat = new mak(100)//out puts the default value
   console.log(makat.ACCCESS)

let o = makat.getters2(400);//Cant change it from the current value gotten from evaluating it with 100   
let pee = makat.setters2(70);//changes it and processes it to whatever value that was added to bracket as an Argument
console.log(o);
console.log(pee);

//UNDERSTAND THE DIFFERENCE BETWEEN "IMPORT" AND "REQUIRE"







