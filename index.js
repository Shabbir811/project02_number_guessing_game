#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.black.bold.underline.overline.bgGreen `welcome dear user let start game `);
//let we auto generate a even number from pc
let randomNumber = Math.floor(Math.random() * 10 + 1);
// // create a function which return a even value 
function evennumber(even) {
    if (even % 2 == 0) {
        return even;
    }
    else {
        return even + 1;
    }
}
// let function store in a variable
let even = evennumber(randomNumber);
//let a number input from user using inquirer
let answer = await inquirer.prompt([
    { name: 'usernumber',
        type: "number",
        message: "enter a even number from blew \n  2 , 4 , 6 , 8 , 10\n\n"
    }
]);
// store a inquirer userinput value in a variable
let usernumber = answer.usernumber;
//now we add our game's logic in this Even number guessing game
if (even === usernumber) {
    console.log(chalk.whiteBright.bold.underline.overline.bgGreen `Congratulations!` + chalk.bgBlack.italic.blue ` you guessed the right number ${even}`);
}
else {
    console.log(chalk.white.overline.bgRed.bold `your guess is wrong ` + chalk.bold.blue.bgBlack.italic.dim `\n\n to play again:` + chalk.blue `press arrowUpKey +` + chalk.bgBlack.red ` enter`);
}
