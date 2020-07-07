const inquirer = require("inquirer");
const fs = require("fs");


const questions = [
    {
        type: "list",
        name: "initialQuestion",
        message: "Please selection an option.",
        choices: [
            "POST AN ITEM",
            "BID ON AN ITEM",
            "EXIT"
        ]
      },
      {
        type: "input",
        message: "What is it the item you would like to Post?",
        name: "postItem",
        when: (response) => response.initialQuestion === "POST AN ITEM",
    },
    {
        type: "input",
        message: "What is it the item you would like to Bid?",
        name: "bidItem",
        when: (response) => response.initialQuestion === "BID ON AN ITEM",
    },
];

// const postItem = [
    
// ]

function init (){
    inquirer.prompt(questions).then((answers) => {
        console.log(answers);
        
    });
};







init ();