// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is the name of your file?",
        name: "fileName",
    },
    {
        type: "input",
        message: "What is the name of your project?",
        name: "title",
    },
    {
        type: "input",
        message: "How would you describe your project",
        name: "description",
    },
    {
        type: "input",
        message: "How do you install your project?",
        name: "installation",
    },
    {
        type: "input",
        message: "How do you use your project?",
        name: "usage",
    },
    {
        type: "input",
        message: "How would another person contribute to your project?",
        name: "contributing",
    },
    {
        type: "input",
        message: "How can tests can be run? Please provide testing instructions.",
        name: "tests",
    },
    {
        type: "list",
        message: "Which license does your project have?",
        choices: ["GNU AGPLv3 [agpl-3.0]", "GNU GPLv3 [gpl-3.0]",
            "GNU LGPLv3 [lgpl-3.0]", "Mozilla Public License 2.0 [mpl-2.0]",
            "Apache License 2.0 [apache-2.0]", "MIT License [mit]",
            "Boost Software License 1.0 [bsl-1.0]", "The Unlicense [unlicense]",
            "CC0-1.0 [cc0-1.0]", "CC-BY-4.0 [cc-by-4.0]", "CC-BY-SA-4.0 [cc-by-sa-4.0]",
            "SIL Open Font License 1.1 [ofl-1.1]", "CERN-OHL-P-2.0 [cern-ohl-p-2.0]",
            "CERN-OHL-W-2.0 [cern-ohl-w-2.0]", "CERN-OHL-S-2.0 [cern-ohl-s-2.0]", "None"],
        name: "license",
    },
    {
        type: "list",
        message: "What color would you like your license badge to be?",
        choices: ["bright green", "green", "yellow green",
            "yellow", "red", "blue", "light grey",
            "success", "important", "critical", "informative", "inactive",
            "blue violet", "ff69b4", "9cf"],
        name: "color",
    },
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "github",
    },
    {
        type: "input",
        message: "What is your email?",
        name: "email",
    },
];


// TODO: Create a function to write README file
function writeToFile(data) {
    const readmeText = generateMarkdown(data);
    fs.writeFile(`${data.fileName}.md`, readmeText, (err) => err ? console.error(err) : console.log(`${data.fileName}.md created!`));
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((data) => writeToFile(data));
}

// Function call to initialize app
init();
