const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');



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
      choices: ['Apache License','Boost Software License','GNU GPLv3','MIT','Mozilla Public License','The Unlicense']
      },
    {
      type: 'input',
      name: 'Project_Contributing',
      message: 'How can someone contribute to your project?',
      default: 'Contribute to this project on Github!'
      },
    {
      type: 'input',
      name: 'Project_Tests',
      message: 'What are the instructions to run all necessary tests?',
      default: 'These libraries are used and run them this way.'
      },
    {
      type: 'input',
      name: 'Project_Github',
      message: 'Under what username in Github can be the project be found?',
      default: 'username'
      },
      {
        type: 'input',
        name: 'Project_Email',
        message: 'What is your email address for contact?',
        default: 'example@email.com'
        },
    
    ])
  .then(answers => {
    generateMarkdown(answers);    
  });

