// TODO: Create a function that returns a license badge based on which license is passed in
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// If there is no license, return an empty string
function renderLicenseBadge(license) { }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
  ## Description

  ${data.description}
  

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [How to contribute](#how-to-contribute)
  - [License](#license)
  - [Test Instructions](#test-instructions)
  - [Questions](#questions)

  ## Installation

  ${data.installation}

  ## Usage
  
  ${data.usage}
  
  ## How to contribute
  
  ${data.contributing}
  
  ## License
  
  ${data.license}

  ## Test Instructions

  ${data.tests}
    
  ## Questions
  
  If you have any questions, my GitHub profile is [www.github.com/${data.github}](www.github.com/${data.github}), and my email is [${data.email}](mailto:${data.email}).
`;
}

module.exports = generateMarkdown;
