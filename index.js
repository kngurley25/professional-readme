// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");

const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const inquirerQuestions = require("./utils/questions");

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(inquirerQuestions)
        .then(answers => {
            console.log(answers);

            const generatedText = generateMarkdown(answers);

            fs.writeFile(path.join("./", "dist", "README.md"), generatedText,
            (err) => {
                if (err) throw err;
                console.log("The file has been saved.");
            })
        })
}

// Function call to initialize app
init();

