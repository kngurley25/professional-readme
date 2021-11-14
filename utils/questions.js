const licenseChoices = require("./licenses");

const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?"
    },
    {
        type: "input",
        name: "description",
        message: "Provide a description of your project."
    },
    {
        type: "input",
        name: "installation",
        message: "Provide installation instructions for your project."
    },
    {
        type: "input",
        name: "usage",
        message: "Provide usage information for your project."
    },
    {
        type: "input",
        name: "contribution",
        message: "Provide contribution guidelines for your project."
    },
    {
        type: "input",
        name: "instructions",
        message: "Provide test instructions for your project."
    },
    {
        type: "confirm",
        name: "confirmLicense",
        message: "Would you like to select a license?",
        default: false
    },
    {
        type: "list",
        name: "license",
        message: "Select license.",
        choices: licenseChoices,
        when: ({ confirmLicense }) => {
            if (confirmLicense) {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: "input",
        name: "github",
        message: "Enter your GitHub username.",
    },
    {
        type: "input",
        name: "email",
        message: "Enter your email address.",
    }
]

module.exports = questions;