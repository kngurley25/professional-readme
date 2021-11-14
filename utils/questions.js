const licenseChoices = require("./licenses");

const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?",
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log("Please enter your project title.");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "description",
        message: "Provide a description of your project.",
        validate: descInput => {
            if (descInput) {
                return true;
            } else {
                console.log("Please enter a project description.");
                return false;
            }
        }
    },
    {
        type: "confirm",
        name: "confirmDeployment",
        message: "Would you like to include a link to your deployed application?",
        default: false
    },
    {
        type: "input",
        name: "deployment",
        message: "Provide a link to your deployed application.",
        when: ({confirmDeployment}) => {
            if (confirmDeployment) {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: "input",
        name: "installation",
        message: "Provide instructions on how to install your project.",
    },
    {
        type: "input",
        name: "usage",
        message: "Provide instructions on how someone may use your application after installation."
    },
    {
        type: "input",
        name: "contribution",
        message: "Provide contribution guidelines for your project."
    },
    {
        type: "input",
        name: "instructions",
        message: "Provide explanation of testing methods for your project."
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
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log("Please enter your GitHub username.");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "email",
        message: "Enter your email address.",
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log("Please enter your email.");
                return false;
            }
        }
    }
]

module.exports = questions;