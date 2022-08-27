const inquirer = require('inquirer');
const myFunctions = require('./utils/generateMarkdown.js');



inquirer
  .prompt([{
      type: 'input',
      name: 'Project_Title',
      message: 'What is the title of your Project?',
      default: 'My Github Project'
    },
    {
      type: 'input',
      name: 'Project_Description',
      message: 'What is the description of your project?',
      default: 'My project does some pretty cool stuff, as described'
      },
    {
      type: 'input',
      name: 'Project_Installation',
      message: 'How is your project installed?',
      default: 'Install the required package!'
      },
    {
      type: 'input',
      name: 'Project_Usage',
      message: 'What is the usage procedure for your project?',
      default: 'Type in the following command " " '
      },
      {
        type: 'list',
        name: 'Project_License',
        message: 'What type of license will your project use?',
        choices: ['Apache License','Boost Software License','GNU GPLv3','MIT','Mozilla Public License','The Unilicense']
        },
    
    ])
  .then(answers => {
    myFunctions.renderLicenseSection(answers);
    myFunctions.generateMarkdown(answers);
    
  });

