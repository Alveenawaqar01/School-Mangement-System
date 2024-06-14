#! /usr/bin/env node    

import inquirer from "inquirer";
const randomNumber :number = Math.floor(10000 + Math.random() * 90000)

let myBalance :number = 0
let answer = await inquirer.prompt([{
    name:"student",
    type:"input",
    message:"Enter student name",
    validate: function (value){
        if (value.trim() !== ""){
            return true;
        }
           return "please enter a non-empty value.";
    },
},{
               name:"Courses",
               message:"select the course to enrolled.",
               type:"list",
               choices:["MS.office","JavaScript","TypeScript","Python"]
}
]);
const tutionfee: {[key :string]:number} = {
      "MS.office": 2000,
      "JavaScript": 2500,
      "TypeScript":5000,
      "Python":1000,
    
};
console.log(`\ntution fees: ${tutionfee[answer.Courses]}\n`);

console.log(`balance:${myBalance} \n`);
let paymentType = await inquirer.prompt ([{
    name:"payment",
    type:"list",
    message:"Select your payment method",
    choices:["Bank transfer","Easypaisa","JazzCash"], 
},{
   name:"amount",
   type:"input",
   message:"Transfer Money",
   validate:function(value){
    if (value.trim() !== ""){
        return true;
    }
       return "please Enter a non-Empty value.";
   }
}
])
console.log(`\n you Select pyment method${paymentType.payment}`);
const tutionFees = tutionfee[answer.Courses];
const paymentAmount = parseFloat (paymentType.amount);
   if (tutionFees === paymentAmount){
    console.log(`\nCongratulation! you have successfully enrolled in: ${answer.Courses}\n`);

let ans = await inquirer.prompt ([{
          name:"Select",
          type:"list",
          message:"What would you like to next?",
          choices:["View Status","exit"]

    }])

          if (ans.Select === "View Status"){
            console.log("\n status\n");
            console.log(`Student Name : ${answer.student}`);
            console.log(`Student ID: ${randomNumber}`);
            console.log(`Course:${answer.Courses}`);
            console.log(`Tution fees paid :${paymentAmount}`);
            console.log(`Balance:${myBalance += paymentAmount}`);    
          }
          else {
            console.log(`\n Exiting Student Mangement System\n`);
            
          }
   }
else {
    console.log( "Invalid Amount Due to course.");
    
}
