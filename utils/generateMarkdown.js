// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
//badge
function renderLicenseBadge(license) {
    if(license !== 'No-license'){ 
        return `![Github License](https://img.shields.io/badge/license-${license}-blue)`;
    } else {
        return '';
    }
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if(license !== 'No-license') { 
        return `\n  * [License](#license)\n`;
    } else {
        return '';
    }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if(license !== 'No-license'){ 
        return `## License`;
    } else {
        return '';
    }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Description

  ${data.description}

  ## Table of Contents
  
  * [Installation](#installation)

  * [Usage](#usage)

  ${renderLicenseLink(data.license)}


  * [Contributing](#contributing)

  * [Test](*test)


  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ${renderLicenseSection(data.license)}

  ## Contributions 

  ${data.contributing}
  

  ## Tests

  ${data.test}

  ## Contacts 

  ${data.github} 
  ${data.email}
`;
}

module.exports = generateMarkdown;