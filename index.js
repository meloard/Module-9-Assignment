// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

const {generateMarkdown} = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    name: 'Title',
    message: 'Please enter a title',
},
{
    type: 'input',
    name: 'Description',
    message: 'Please provide a description',
},
{
    type: 'input',
    name: 'TableOfContents',
    message: 'Table of Contents-(Press Enter)',
},
{
    type: 'input',
    name: 'Usage',
    message: 'Please explain the usage',
},
{
    type: 'input',
    name: 'Installation',
    message: 'Please list the dependencies that were used',
},
{
    type: 'confirm',
    name: 'License',
    message: 'Does this have a License?',
},
{
    type: 'input',
    name: 'LicenseType',
    message: 'Please enter the License type'
},
{
    type: 'input',
    name: 'Sources',
    message: 'Please list the sources that were used',
},
{
    type: 'input',
    name: 'Tests',
    message: 'Please explain how this will be tested',
},
{
    type: 'input',
    name: 'Github',
    message: 'Please enter your GitHub username?',
},
{
    type: 'input',
    name: 'Email',
    message: 'Please enter your email address?',
}
];


// TODO: Create a function to write README file
const writeFile = (fileName, data) => {
    fs.writeFile(fileName, data, function(err) {
        console.log(data),
           err ? console.log(err):console.log("README.md successfully created!")
    });
};

// TODO: Create a function to initialize app
const Create = () => {
    inquirer.prompt(questions)
        .then(function(data) {
            writeFile("README.md", generateMarkdown(data));
            console.log(data)
        });
};

// Function call to initialize app
Create();
