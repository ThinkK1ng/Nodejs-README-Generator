const generateMarkdown = require("./utils/generateMarkdown");

function init() {

    const inquirer = require("inquirer");
    const fs = require("fs");
    
    inquirer.prompt([
        {
            type: "input",
            message: "What is a good Title for your project?",
            name: "title",
        },
        {
            type: "input",
            message: "What is the Description of your project?",
            name: "description",
        },
        {
            type: "input",
            message: "How do you Install your application?",
            name: "installation",
        },
        {
            type: "input",
            message: "How do you Use your application?",
            name: "usage",
        },
        {
            type: "list",
            message: "What License did you use for this repository?",
            choices: ["MIT", "GNU General Public License 2.0", "Apache License 2.0", "GNU General Public License 3.0"],
            name: "license",
        },
        {
            type: "input",
            message: "How can people Contribute to your project?",
            name: "contributing",
        },
        {
            type: "input",
            message: "How do people update the tests for your project?",
            name: "tests"
        },
        {
            type: "input",
            message: "What is your GitHub username?",
            name: "github"
        },
        {
            type: "input",
            message: "What is your email address where users and contributors can send questions?",
            name: "email"
        },
    ])
        .then((data) => {
            const substance = generateMarkdown(data)

            return fs.writeFile('README.md', substance, (err) =>
               err ? console.log(err) : console.log('Your README is complete... now go get some rest.'))
            })
}

init();
