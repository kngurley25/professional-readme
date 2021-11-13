const questions = [
    {
        type: "input",
        name: "projectTitle",
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
        name: "licenses",
        message: "Select license.",
        choices: []
    }
]

module.exports = questions;