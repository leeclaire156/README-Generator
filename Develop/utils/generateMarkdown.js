// TODO: Create a function that returns a license badge based on which license is passed in
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// If there is no license, return an empty string

function renderLicenseBadge(license, color) {
  if (license === "None") {
    return ""
  } else {
    //Replaces space in license name with %20 to keep image link whole
    var noSpaceLicense = license.split(" ").join("%20")
    //Gets rid of space in badge color list options (i.e. bright green becomes brightgreen)
    var noSpaceColor = color.split(" ").join("")
    return `![License](https://img.shields.io/badge/License-${noSpaceLicense}-${noSpaceColor}.svg)`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === none) {
    return "";
  } else {

  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === none) {
    return "";
  } else {

  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return renderLicenseBadge(`${data.license}`, `${data.color}`)

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

  `
    +

    renderLicenseBadge(`${data.license}`, `${data.color}`)

    +

    `

  ## Test Instructions

  ${data.tests}
    
  ## Questions
  
  If you have any questions, my GitHub profile is [www.github.com/${data.github}](www.github.com/${data.github}), and my email is [${data.email}](mailto:${data.email}).
`;
}

module.exports = generateMarkdown;