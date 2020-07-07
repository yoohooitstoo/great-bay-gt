const inquirer = require("inquirer");
const fs = require("fs");


const questions = [
    {
        type: "list",
        name: "name",
        message: "Please selection an option.",
        choices: [
            "POST AN ITEM",
            "BID ON AN ITEM",
            "EXIT"
        ]
      },
];

inquirer.prompt(questions).then((answers) => {
    console.log(answers);
});