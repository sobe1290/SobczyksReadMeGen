const fs = require('fs');

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

function generateMarkdown(answers) {
  let generatedPage = `
  # ${answers.Project_Title}\n
  ## Project Description \n
  ${answers.Project_Description}\n
  ## How to install this project \n
   ${answers.Project_Installation}\n
  `;
  
  fs.writeFile('freshReadMe.md', generatedPage, (err) => {
  if (err) 
   console.error(err); 
  else {
    console.log('Success! Check your folder for a file called freshReadMe.md')
    }
  })
}

module.exports = generateMarkdown;
