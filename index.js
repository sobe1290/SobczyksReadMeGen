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
      default: 'Type in install sumtin'
      },
    ])
  .then(answers => {
    generateMarkdown(answers);
  });

