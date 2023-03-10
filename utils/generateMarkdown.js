// Creates a function that returns a license badge based on which license is passed in
// If there is no license, returns an empty string

function renderLicenseBadge(license, color) {
  if (license === "None") {
    return ""
  } else {
    // Splits the license option in between name and url code in brackets, []
    var splitLicense = license.split(" [")
    // Stores license name into licenseName variable
    var licenseName = splitLicense[0]
    if (licenseName.includes("-")) {
      //Replaces hyphen in license name with double hyphens to keep image link whole yet display with hyphen in badge
      var renderLicense = licenseName.split("-").join("--")
    } else {
      //Replaces space in license name with %20 to keep image link whole yet display with space in badge
      var renderLicense = licenseName.split(" ").join("%20")
    }
    //Gets rid of space in badge color list options (i.e. bright green becomes brightgreen)
    var colorName = color.split(" ").join("")
    return `[![License](https://img.shields.io/badge/License-${renderLicense}-${colorName}.svg)]`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "None") {
    return "";
  } else {
    // Splits the license option in between name and url code in brackets, []
    var splitLicense = license.split(" [")
    // Splits license code from closing square bracket and stores license name into licenseLinkCode variable
    var licenseLinkCode = splitLicense[1].split("]").join("")
    return `(https://choosealicense.com/licenses/${licenseLinkCode})`
  }
}

// Creates a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "None") {
    return "";
  } else if (license.includes("The")) {
    // Splits the license option in between name and url code in brackets, []
    var splitLicense = license.split(" [")
    // Stores license name into licenseName variable
    var licenseName = splitLicense[0]
    //If the license doesn't have the word "The" in it already, does not have the word 'the' preceding the license name
    return `## License\n\nThis application is covered under ${licenseName} license.\n\nTo know more about this license, please click on the license badge at the top of this file.`
  } else {
    var splitLicense = license.split(" [")
    var licenseName = splitLicense[0]
    //If the license doesn't have the word "The" in it already, has the word 'the' preceding the license name
    return `## License\n\nThis application is covered under the ${licenseName} license.\n\nTo know more about this license, please click on the license badge at the top of this file.`
  }
}

// Creates a function to generate markdown text for README, \n denotes a newline
function generateMarkdown(data) {
  return renderLicenseBadge(`${data.license}`, `${data.color}`) + renderLicenseLink(`${data.license}`)
    + `\n# ${data.title}
  
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
  
  ${data.contributing}\n\n`
    + renderLicenseSection(`${data.license}`) +
    `\n\n## Test Instructions

  ${data.tests}
    
  ## Questions
  
  If you have any questions, my GitHub profile is [www.github.com/${data.github}](www.github.com/${data.github}), and my email is [${data.email}](mailto:${data.email}).`;
}

module.exports = generateMarkdown;