// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is your github username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Where is your email address?',
    },
    {
        type: 'input',
        name: 'projectName',
        message: "What is your project's name?",
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please write a description about your project?',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the installation instructions for your project?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is the usage information for your project?',
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'What are the contribution guidlines for your project?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Which license would you like to add to your project?',
        choices: ["MIT License", "Apache License 2.0", "GNU General Public License v3.0", "Boost Software License 1.0"]
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fileName = data.projectName;

    console.log(data.license)
    let badge;
    switch(data.license) {
        case 'MIT License':
            badge = '[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://lbesson.mit-license.org/)';
            break;
        case 'Apache License 2.0':
            badge = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
          break;
        case 'GNU General Public License v3.0':
            badge = '';
          break;
        case 'Boost Software License 1.0':
            badge = '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)';
          break;
        default:
            badge = '';
          break;
      }

    const readMe = `
${badge}

# ${data.projectName}

## Description
    
${data.description}
    
## Table of Contents (Optional)
    
If your README is long, add a table of contents to make it easy for users to find what they need.
    
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
    
## Installation
    
${data.installation}
    
## Usage
    
${data.usage}
    
## Credits
    
    
## License
    
This application is covered under the ${data.license}.
    
## Features
    
    
## How to Contribute
    
${data.contribution}
    
## Tests
    
Go the extra mile and write tests for your application. Then provide examples on how to run them here.

## Questions

Github Profile: https://github.com/${data.name}

If you have any questions, please contact me at: ${data.email}


`

    fs.writeFile(fileName, readMe, (err) =>
        err ? console.log(err) : console.log('Success!')
    );
}



// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((data) => {
            writeToFile(data.projectName,data)
        });

}

// Function call to initialize app
init();

