const fs = require('fs');

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(answers) {
  let chosenLicense = answers.Project_License
  let licenseDescription = ''

switch (chosenLicense) {
  case 'Apache License':
    licenseDescription = 'A permissive license whose main conditions require preservation of copyright and license notices. Contributors provide an express grant of patent rights. Licensed works, modifications, and larger works may be distributed under different terms and without source code.';
      break;
  case 'Boost Software License':
    licenseDescription = 'A simple permissive license only requiring preservation of copyright and license notices for source (and not binary) distribution. Licensed works, modifications, and larger works may be distributed under different terms and without source code.';
      break;
  case 'GNU GPLv3':
    licenseDescription = 'Permissions of this strong copyleft license are conditioned on making available complete source code of licensed works and modifications, which include larger works using a licensed work, under the same license. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights.';
      break;
  case 'MIT':
    licenseDescription = 'A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.';
      break;
  case 'Mozilla Public License':
    licenseDescription = 'Permissions of this weak copyleft license are conditioned on making available source code of licensed files and modifications of those files under the same license (or in certain cases, one of the GNU licenses). Copyright and license notices must be preserved. Contributors provide an express grant of patent rights. However, a larger work using the licensed work may be distributed under different terms and without source code for files added in the larger work.';
      break;
  case 'The Unilicense':
    licenseDescription = 'A license with no conditions whatsoever which dedicates works to the public domain. Unlicensed works, modifications, and larger works may be distributed under different terms and without source code.';
      break;
      
}
return generateMarkdown(licenseDescription);

}

function generateMarkdown(answers, licenseDescription) {
  renderLicenseSection();
  let generatedPage = `
  # ${answers.Project_Title}\n
  ## Project Description \n
  ${answers.Project_Description}\n
  ## Table of Contents\n
    * [Installation](#installation)
    * [Usage](#usage)
    * [License](#license)
    * [Contributing](#contributing)
    * [Tests](#tests)
    * [Questions](#questions)\n
    
  ## Installation \n
  ${answers.Project_Installation}\n
  ## Usage \n
  ${answers.Project_Usage}\n
  ## License \n
  ${answers.Project_License}\n
  ### About this License \n
  ${licenseDescription}\n
  ## Contributing \n
  ## Tests \n
  ## Questions \n
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
module.exports = renderLicenseSection;
