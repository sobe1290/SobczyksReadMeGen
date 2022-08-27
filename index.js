// TODO: Include packages needed for this application
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
    // /* Pass your questions in here */
    // questions
    ])
  .then(answers => {
    // Use user feedback for... whatever!!
    generateMarkdown(answers);
    // writeToFile();
  });

// TODO: Create an array of questions for user input
// const questions = [
    
// ];

// // TODO: Create a function to write README file
// function writeToFile(generateTitle) {
//   fs.writeFile('freshReadMe.md', generateTitle, (err) =>
//   err ? console.error(err) : console.log('Success!'))
// }

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
