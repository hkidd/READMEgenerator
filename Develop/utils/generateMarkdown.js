// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  // console.log(`${license}`);

  if (`${license}` == "MIT") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  }
  else if (`${license}` == "Apache 2.0") {
    return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
  }
  else if (`${license}` == "GNU v3.0") {
    return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
  }
  else if (`${license}` == "GNU Gen Pub v2.0") {
    return "[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)"
  }
  else if (`${license}` == "GNU Affero v3.0") {
    return "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)"
  }
  else if (`${license}` == "BSD 2-Clause") {
    return "[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)"
  }
  else if (`${license}` == "BSD 3-Clause") {
    return "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"
  }
  else if (`${license}` == "Boost 1.0") {
    return "[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)"
  }
  else if (`${license}` == "Creative Commons Zero v1.0") {
    return "[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)"
  }
  else if (`${license}` == "Eclipse Public 2.0") {
    return "[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)"
  }
  else if (`${license}` == "Moz Pub 2.0") {
    return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
  }
  else if (`${license}` == "The Unilicense") {
    return "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)"
  }
  else {
    return "";
  }
};
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {
//   return "";
// };
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (`${license}` == "") {
    return `This project is not covered by a license.`;
  }
  else {
    return `This project is covered by the ${license} license.`;
  }
};
// TODO: Create a function to generate markdown for README
function generateMarkdown(responses) {
  return `# ${responses.title}

  ${renderLicenseBadge(responses.license)}

  ## Description 
  ${responses.description}

  ## Table of Contents
  [Description](#description) <br>
  [Installation](#installation) <br>
  [Usage](#usage) <br>
  [License](#license) <br>
  [Contributing](#contributing) <br>
  [Tests](#tests) <br>
  [Questions](#questions) 

  ## Installation 
  ${responses.install}

  ## Usage 
  ${responses.usage}

  ## License 
  ${renderLicenseBadge(responses.license)} <br>
  ${renderLicenseSection(responses.license)}

  ## Contributing 
  ${responses.contribution}

  ## Tests 
  ${responses.test}

  ## Questions 
  Created by: ${responses.username}  <br>
  E-mail: ${responses.email}
`;
};

module.exports = generateMarkdown;
