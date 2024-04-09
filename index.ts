#! /usr/bin/env node

import inquirer from "inquirer"


console.log(`----------------------- welcome to a number guessing game -------------------------------- \n\n\t\t\t you guess a number between 1 to 10
-------------------
-------------------`);  //some basic layout


        //step 4: perform while loop to autu retsart game
 let start = true
 while(start == true){


//step 1:  store a random number in variable trough math.random()                                                      
let randomNum:number = Math.floor(Math.random()*10+1)   


  //step 2:  let ask a number from a user though inquirer 
let user_input  = await inquirer.prompt(
    {
        name:"number",
        type: "number",
        message: "you guess a number between 1 to 10      ",
    }
);



 //step 3:  use if else statement to biuld our game's logic

if(user_input.number === randomNum){

    console.log(`======================================================================================================`) // some basic layout
                                                         start = false
                        console.log(`\n\n\t\t\t\t\tcongratulation! "${randomNum}", you guess the right number\n\n`);
    console.log(`======================================================================================================`) // some basic layout

}else{

    console.log(`======================================================================================================`) // some basic layout
                        
                                                
                        console.log(`\t\t\tyour guess is wrong \n\t\t\t\tcorrect number is: "${randomNum}" \t  \n   try again ` );
     console.log(`======================================================================================================`) // some basic layout

}
  

 }










        
        

   
 
              



