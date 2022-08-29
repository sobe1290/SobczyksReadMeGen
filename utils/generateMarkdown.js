const fs = require('fs');

function generateMarkdown(answers) {  
//This section of the function sets the license description based on selection
  let chosenLicense = answers.Project_License;
  let licenseDescription;
  let licenseBadge;
  let licenseLink;

  switch (chosenLicense) {
    case 'Apache License':
      licenseDescription = 'Apache License is a permissive license whose main conditions require preservation of copyright and license notices. Contributors provide an express grant of patent rights. Licensed works, modifications, and larger works may be distributed under different terms and without source code.';  
      licenseBadge= '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'; 
      licenseLink = '[Link to the Apache Webpage](https://www.apache.org/licenses/LICENSE-2.0)';
      break;
    case 'Boost Software License':
      licenseDescription = 'Boost Software License is a simple permissive license only requiring preservation of copyright and license notices for source (and not binary) distribution. Licensed works, modifications, and larger works may be distributed under different terms and without source code.';   
      licenseBadge= '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)'; 
      licenseLink = '[Link to the Boost Webpage](https://www.boost.org/users/license.html)';
        break;
    case 'GNU GPLv3':
      licenseDescription = 'Permissions of this strong copyleft license, GNU GPLv3, are conditioned on making available complete source code of licensed works and modifications, which include larger works using a licensed work, under the same license. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights.';   
      licenseBadge= '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';  
      licenseLink = '[Link to the GNU GPL Webpage](https://www.gnu.org/licenses/gpl-3.0.en.html)';
        break;
    case 'MIT':
      licenseDescription = 'MIT License is a short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.';  
      licenseBadge= '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'; 
      licenseLink = '[Link to the MIT Webpage](https://www.mit.edu/~amini/LICENSE.md)'; 
        break;
    case 'Mozilla Public License':
      licenseDescription = 'Permissions of this weak copyleft license, Mozilla Public License, are conditioned on making available source code of licensed files and modifications of those files under the same license (or in certain cases, one of the GNU licenses). Copyright and license notices must be preserved. Contributors provide an express grant of patent rights. However, a larger work using the licensed work may be distributed under different terms and without source code for files added in the larger work.'; 
      licenseBadge= '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';   
      licenseLink = '[Link to the MPL Webpage](https://www.mozilla.org/en-US/MPL/2.0/)';  
        break;
    case 'The Unlicense':
      licenseDescription = 'The Unlicense is a license with no conditions whatsoever which dedicates works to the public domain. Unlicensed works, modifications, and larger works may be distributed under different terms and without source code.';  
      licenseBadge= '[![Unlicense](https://img.shields.io/badge/License-Unlicense-blue.svg)](https://unlicense.org/)';
      licenseLink = '[Link to the Unlicense Webpage](https://unlicense.org/)'    
        break;
    };

  //This section of the function takes the answers and enters them into the markdown.
  let generatedPage = `
  # ${answers.Project_Title}     ${licenseBadge}\n
  ## Project Description \n
  ${answers.Project_Description}\n
  # Table of Contents\n
  - [Installation](#installation)\n
  - [Usage](#usage)\n
  - [License](#license)\n
  - [Contributing](#contributing)\n
  - [Tests](#tests)\n
  - [Questions](#questions)\n
    
  ## Installation \n
  ${answers.Project_Installation}\n
  ## Usage \n
  ${answers.Project_Usage}\n
  ## License \n
  ${answers.Project_License}\n
  ### About this License \n
  ${licenseDescription}\n
  ${licenseLink}\n
  ## Contributing \n
  ${answers.Project_Contributing}\n
  ## Tests \n
  ${answers.Project_Tests}\n
  ## Questions \n
  For questions contact my via Github at https://github.com/${answers.Project_Github} or my email at ${answers.Project_Email}.
  `;
  
  fs.writeFile('freshReadMe.md', generatedPage, (err) => {
  if (err) 
   console.error(err); 
  else {
    console.log('Success! Check your folder for a file called freshReadMe.md')
    }
  })
}

module.exports = generateMarkdown
 
