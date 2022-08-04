"use strict";
var idCont  = 1000;
var minSenior=1500;
var maxSenior=2000;
var minMidSenior=1000;
var msxMidSenior=1500;
var minJunior	=500;
var msxJunior	=1000;
const body = document.getElementsByTagName("body");
const divOut = document.getElementById("divOut")
body[0].appendChild(divOut)
function Users (fullName,department,level,imageURL,minSalary,maxSalary ){
    this.employeeID= function(){
       var counter=idCont
       idCont++
        return counter;
    } ;
    this.fullName = fullName;
    this.department = department;
    this.level = level;
    this.imageURL = imageURL;
    this.salary= function() {
        var salary = Math.floor(Math.random() * (maxSalary - minSalary) ) + minSalary;
        var netSalary = salary-salary*0.075;
        return Math.ceil(netSalary);}
      }
Users.prototype.render = function (){


   const divE1 = document.createElement("div");
   divOut.appendChild(divE1)
   divE1.id="card";
   const pE1 = document.createElement("p")
   divE1.appendChild(pE1);
   const pE2 = document.createElement("p")
   divE1.appendChild(pE2)
   const pE3 = document.createElement("p")
   divE1.appendChild(pE3);
   const pE4 = document.createElement("p")
   divE1.appendChild(pE4);
   const pE5 = document.createElement("p")
   divE1.appendChild(pE5);
  const imgE1 = document.createElement("img");
   imgE1.src = this.imageURL;
   imgE1.alt = this.fullName;
   divE1.appendChild(imgE1),
   pE1.textContent =`Employee Name : ${this.fullName}`
    pE2.textContent= `Employee ID : ${this.employeeID()}`
    pE3.textContent= `Department : ${this.department}`
    pE4.textContent= `level : ${this.level}`
    pE5.textContent= `Salary : ${this.salary()}`
   
   
{}}
    // document.write(`<p>The Employee ID : ${this.employeeID()}</p>`,)
    // document.write(`<p>The Employee name : ${this.fullName}</p>`,)
    // document.write(`<p>Department : ${this.department}</p>`,)
    // document.write(`<p>Employee Salary : ${this.salary(minSenior,maxSenior)}</p>`,)
    // document.write(`<p>----------------------------------------------------------</p>`,)



const Ghazi = new Users("Ghazi Samer","Administration","Senior","./Ghazi.jpg",minSenior,maxSenior);
const Lana = new Users("Lana Ali","Finance","Senior","./Lana.jpg",minSenior,maxSenior)
const Tamara = new Users(" Tamara Ayoub","Marketing","Senior","./Tamara.jpg",minSenior,maxSenior)
const Safi = new Users("Safi Walid","Administration","Mid-Senior","./Safi.jpg",minMidSenior,msxMidSenior)
const Omar = new Users("Omar Zaid" ,"Development","Senior","./Omar.jpg",minSenior,maxSenior)
const Rana = new Users("Rana Saleh","Development","Junior","./Rana.jpg",minJunior,msxJunior)
const Hadi = new Users("Hadi Ahmad","Finance","Mid-Senior","./Hadi.jpg",minMidSenior,msxMidSenior)
Ghazi.render();
Lana.render();
Tamara.render();
Safi.render();
Omar.render();
Rana.render();
Hadi.render();


// const  objGhazi ={ employeeID : function(){
    
    
//     return idCont 
// } ,
//     fullName : "Ghazi Samer" ,
//     department : "Administration",
//     level :"Senior",
//     imageURL :"" ,
//     salary : function  () {
        
//         var seniorSalary = Math.floor(Math.random() * (maxSenior - minSenior) ) + minSenior;
//         var netSalary = seniorSalary-seniorSalary*0.075;

//         return Math.ceil(netSalary);
//       }
//     }
   
//     console.log(objGhazi.salary());

    

// const objLana={ employeeID : function(){
//     return idCont +1
// },
//     fullName : "Lana Ali" ,
//     department : "Lana Ali",
//     level :"Senior",
//     imageURL :"" ,
//     salary : function () {
//         var seniorSalary = Math.floor(Math.random() * (maxSenior - minSenior) ) + minSenior;
//         var netSalary = seniorSalary-seniorSalary*0.075;

//         return Math.ceil(netSalary);
//       },    
//     }  

// ;

// const objTamara ={ employeeID : function(){
//     return idCont +2
// },
//     fullName : " Tamara Ayoub" ,
//     department : "Marketing",
//     level :"Senior",
//     imageURL :"" ,
//     salary : function () {
//         var seniorSalary = Math.floor(Math.random() * (maxSenior - minSenior) ) + minSenior;
//         var netSalary = seniorSalary-seniorSalary*0.075;

//         return Math.ceil(netSalary);
//       },

// };
// const objSafi ={  employeeID : function(){
//     return idCont +3
// },
//     fullName : "Safi Walid" ,
//     department : "Administration",
//     level :"Mid-Senior",
//     imageURL :"" ,
//     salary :  function () {

//         var midSeniorSalary = Math.floor(Math.random() * (msxMidSenior - minMidSenior) ) + minMidSenior;
//              var netSalary = midSeniorSalary-midSeniorSalary*0.075


//              return Math.ceil(netSalary);
//       },

// };
// const objOmar ={ employeeID : function(){
//     return idCont +4
// },
//     fullName : "Omar Zaid" ,
//     department : "Development",
//     level :"Senior",
//     imageURL :"" ,
//     salary : function () {
//         var seniorSalary = Math.floor(Math.random() * (maxSenior - minSenior) ) + minSenior;
//         var netSalary = seniorSalary-seniorSalary*0.075;

//         return Math.ceil(netSalary);
//       },

// };
// const objRana ={  employeeID : function(){
//     return idCont +5
// },
//     fullName : "Rana Saleh" ,
//     department : "Development",
//     level :"Junior",
//     imageURL :"" ,
//     salary :function () {

//         var juniorSalary = Math.floor(Math.random() * (msxJunior - minJunior) ) + minJunior;
//         var netSalary =  juniorSalary-juniorSalary*0.075;
//         return Math.ceil(netSalary);
//       },
// };


// const objHadi ={ employeeID : function(){
//     return idCont +6
// },
//     fullName : "Hadi Ahmad" ,
//     department : "Finance",
//     level :"Mid-Senior",
//     imageURL :"" ,
//     salary : function () {
//         var midSeniorSalary = Math.floor(Math.random() * (msxMidSenior - minMidSenior) ) + minMidSenior;
//         var netSalary = midSeniorSalary-midSeniorSalary*0.075;

//         return Math.ceil(netSalary);
//       },
// };
// console.log("Employee name: "+ objGhazi.fullName)
// console.log("Employee salary:",objGhazi.salary());
// console.log("------------------------------------")
// console.log("Employee name: "+ objHadi.fullName)
// console.log("Employee salary:",objHadi.salary());
// console.log("------------------------------------")
// console.log("Employee name: "+ objLana.fullName)
// console.log("Employee salary:",objLana.salary());
// console.log("------------------------------------")
// console.log("Employee name: "+ objOmar.fullName)
// console.log("Employee salary:",objOmar.salary());
// console.log("------------------------------------")
// console.log("Employee name: "+ objRana.fullName)
// console.log("Employee salary:",objRana.salary());
// console.log("------------------------------------")
// console.log("Employee name: "+ objSafi.fullName)
// console.log("Employee salary:",objSafi.salary());
// console.log("------------------------------------")
// console.log("Employee name: "+ objTamara.fullName)
// console.log("Employee salary:",objTamara.salary());
// console.log("------------------------------------")


