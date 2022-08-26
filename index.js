// TODO: Include packages needed for this application
const inquirer = require('inquirer');
inquirer
  .prompt([{
      type: 'input',
      name: 'Project Title',
      message: 'What is the title of your Project?',
      default: 'My Github Project'
    },
    {
      type: 'input',
      name: 'Project Description',
      message: 'What is the description of your project?',
      default: 'My project does some pretty cool stuff, as described'
      },
    {
      type: 'input',
      name: 'Project Installation',
      message: 'How is your project installed?',
      default: 'Type in "install sumtin'
      },
    // /* Pass your questions in here */
    // questions
    ])
  .then(answers => {
    // Use user feedback for... whatever!!
    console.log(answers)
  });

// TODO: Create an array of questions for user input
// const questions = [
    
// ];

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
