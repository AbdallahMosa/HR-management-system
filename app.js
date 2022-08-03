"use strict";
var idCont  = 1000;
var minSenior=1500;
var maxSenior=2000;
var minMidSenior=1000;
var msxMidSenior=1500;
var minJunior	=500;
var msxJunior	=1000;

const  objGhazi ={ employeeID : function(){
    
    
    return idCont 
} ,
    fullName : "Ghazi Samer" ,
    department : "Administration",
    level :"Senior",
    imageURL :"" ,
    salary : function  () {
        
        var seniorSalary = Math.floor(Math.random() * (maxSenior - minSenior) ) + minSenior;
        var netSalary = seniorSalary-seniorSalary*0.075;

        return Math.ceil(netSalary);
      }
    }
   
    console.log(objGhazi.salary());

    

const objLana={ employeeID : function(){
    return idCont +1
},
    fullName : "Lana Ali" ,
    department : "Lana Ali",
    level :"Senior",
    imageURL :"" ,
    salary : function () {
        var seniorSalary = Math.floor(Math.random() * (maxSenior - minSenior) ) + minSenior;
        var netSalary = seniorSalary-seniorSalary*0.075;

        return Math.ceil(netSalary);
      },    
    }  

;

const objTamara ={ employeeID : function(){
    return idCont +2
},
    fullName : " Tamara Ayoub" ,
    department : "Marketing",
    level :"Senior",
    imageURL :"" ,
    salary : function () {
        var seniorSalary = Math.floor(Math.random() * (maxSenior - minSenior) ) + minSenior;
        var netSalary = seniorSalary-seniorSalary*0.075;

        return Math.ceil(netSalary);
      },

};
const objSafi ={  employeeID : function(){
    return idCont +3
},
    fullName : "Safi Walid" ,
    department : "Administration",
    level :"Mid-Senior",
    imageURL :"" ,
    salary :  function () {

        var midSeniorSalary = Math.floor(Math.random() * (msxMidSenior - minMidSenior) ) + minMidSenior;
             var netSalary = midSeniorSalary-midSeniorSalary*0.075


             return Math.ceil(netSalary);
      },

};
const objOmar ={ employeeID : function(){
    return idCont +4
},
    fullName : "Omar Zaid" ,
    department : "Development",
    level :"Senior",
    imageURL :"" ,
    salary : function () {
        var seniorSalary = Math.floor(Math.random() * (maxSenior - minSenior) ) + minSenior;
        var netSalary = seniorSalary-seniorSalary*0.075;

        return Math.ceil(netSalary);
      },

};
const objRana ={  employeeID : function(){
    return idCont +5
},
    fullName : "Rana Saleh" ,
    department : "Development",
    level :"Junior",
    imageURL :"" ,
    salary :function () {

        var juniorSalary = Math.floor(Math.random() * (msxJunior - minJunior) ) + minJunior;
        var netSalary =  juniorSalary-juniorSalary*0.075;
        return Math.ceil(netSalary);
      },
};


const objHadi ={ employeeID : function(){
    return idCont +6
},
    fullName : "Hadi Ahmad" ,
    department : "Finance",
    level :"Mid-Senior",
    imageURL :"" ,
    salary : function () {
        var midSeniorSalary = Math.floor(Math.random() * (msxMidSenior - minMidSenior) ) + minMidSenior;
        var netSalary = midSeniorSalary-midSeniorSalary*0.075;

        return Math.ceil(netSalary);
      },
};
console.log("Employee name: "+ objGhazi.fullName)
console.log("Employee salary:",objGhazi.salary());
console.log("------------------------------------")
console.log("Employee name: "+ objHadi.fullName)
console.log("Employee salary:",objHadi.salary());
console.log("------------------------------------")
console.log("Employee name: "+ objLana.fullName)
console.log("Employee salary:",objLana.salary());
console.log("------------------------------------")
console.log("Employee name: "+ objOmar.fullName)
console.log("Employee salary:",objOmar.salary());
console.log("------------------------------------")
console.log("Employee name: "+ objRana.fullName)
console.log("Employee salary:",objRana.salary());
console.log("------------------------------------")
console.log("Employee name: "+ objSafi.fullName)
console.log("Employee salary:",objSafi.salary());
console.log("------------------------------------")
console.log("Employee name: "+ objTamara.fullName)
console.log("Employee salary:",objTamara.salary());
console.log("------------------------------------")


