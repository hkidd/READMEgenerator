// TODO: Include packages needed for this application

    // require inquirer
    const inquirer = require('inquirer');

    // require file system
    const fs = require('fs');

    // require generateMarkdown
    const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
    const questions = [
        {
        type: 'input',
        message: 'What is your GitHub user name?',
        name: 'username',
        },
        {
        type: 'input',
        message: 'What is the title of this project?',
        name: 'title',
        },
        {
        type: 'input',
        message: 'Please enter a project description:',
        name: 'description',
        },
        {
        type: 'input',
        message: 'What are the installation instructions?',
        name: 'install',
        },
        {
        type: 'input',
        message: 'Please provide usage information:',
        name: 'usage',
        },
        {
        type: 'input',
        message: 'Please enter any contribution guidelines:',
        name: 'contribution',
        },
        {
        type: 'input',
        message: 'Please provide test instructions:',
        name: 'usage',
        },
        {
        type: 'input',
        message: 'What type of license does this project use?',
        name: 'license',
        },
    ];

    inquirer.prompt(questions)
        .then((responses) => {
    
            fs.writeFile("README.md", generateMarkdown({...responses}), (err) =>
            err ? console.log(err) : console.log('Success!')
            );
    
        console.log(data.firstName);
        console.log(data.password);
        console.log(data.city);
        });

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
