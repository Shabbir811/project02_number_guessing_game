#! /usr/bin/env node

import inquirer from "inquirer"


console.log(`----------------------- welcome to a number guessing game -------------------------------- \n\n\t\t\t you guess a number between 1 to 10
-------------------
-------------------`);  //some basic layout


//step 6: perform while loop again to retsart game
let start = true
while(start){


//step 1:  store a random number in variable trough math.random()                                                      
var randomNum:number = Math.floor(Math.random()*10+1)

//step 2:  let ask a number from a user though inquirer and store that number in a variable 
let userNum  = await inquirer.prompt(
    {
        name:"number",
        type: "number",
        message: "enter a number to guess",
    }
);

//step 3:  use while loop to biuld our game's logic  
console.log(`------------------------------------------------------- \n\n\t\t\t you guess a number between 1 to 10
-------------------
-------------------`);  //some basic layout

while(userNum.number !== randomNum   /*if user and random num is equals  loop is end*/   ){


     //step 4:   re use ranomnumber and usernumber in the while loop
     var randomNum = Math.floor(Math.random()*10+1)
     
     userNum = await inquirer.prompt(
        {
            name:"number",
            type: "number",
            message: `You guess wrong number try again:  `,


        }
        
        

    );
    console.log(` correct number is: "${randomNum}"\t  \n` );
      }

 console.log(`======================================================================================================`) // some basic layout

 //step 5:    print the message to user you guess the right answer 
                              console.log(`\n\ncongratulation! "${randomNum}" you guess the right number\n\n`);

 console.log(`======================================================================================================`) // some basic layout
              
 //step 7: let end while loop ask comformation from user 
            let stop = await inquirer.prompt(
                {
                    name: "break",
                    type: "confirm",
                    message: "do you want play this game again"
                }
            )

            start = stop.break

    }