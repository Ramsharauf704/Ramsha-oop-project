#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
// create class
class person {
    _personality;
    constructor() {
        this._personality = "Mystery";
    }
    // user input
    userInput(input) {
        // if-else statement
        if (input.includes('Talk to other about yourself openly')) {
            this._personality = 'happly';
        }
        else if (input.includes('keep your word to yourself')) {
            this._personality = 'talk rude';
        }
    }
    // return function
    get personality() {
        return this._personality;
    }
}
// create objects
class Main {
    async main() {
        // await called out
        const ans = await inquirer.prompt({
            // object create
            type: "list",
            name: "choice",
            message: chalk.yellow("Tell your behaviour?"),
            choices: [
                '1: talk to others about my self.',
                '2: keep quite and dont ask questions'
            ]
        });
        // create a personal class
        let myperson = new person();
        myperson.userInput(ans.choice);
        // output response
        console.log(chalk.bgCyanBright.black `you are ${myperson.personality}`);
    }
}
const myobject = new Main();
myobject.main();
