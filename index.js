//Dependencies and variables
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const generateReadme = require('./utils/generateMarkdown.js');
const writeFileAsync = util.promisify(fs.writeFile);

// README QUESTIONS
function userPrompt(){
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project? (Required)',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please enter a description of your project. (Required)',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Please provide installation instructions for your project. (Required)',

        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please provide usage information for your project. (Required)',
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'Please provide list of contributors. (Required)',
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Please provide test instructions for your project. (Required)',
        },
        {
            type: 'list',
            name: 'license',
            message: 'Please choose a license for your project. (Required)',
            choices: ['MIT', 'Apache', 'GPL', 'BSD', 'None'],
        },
        {
            type: 'input',
            name: 'github',
            message: 'Please enter your GitHub username. (Required)',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter your email address. (Required)',
        },
    ]);
}

//Async Function

async function init() {
    try {
        const data = await userPrompt();
        const readme = generateReadme(data);
        await writeFileAsync('README.md', readme);
        console.log('Successfully wrote to README.md');
    } catch (err) {
        console.log(err);
    }
}

init();

