// TODO: Create a function that returns a license badge based on which license is passed in
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// If there is no license, return an empty string

function renderLicenseBadge(license, color) {
  if (license === "None") {
    return ""
  } else {
    // Splits the license option in between name and url code in brackets, []
    var noSpaceLicense = license.split(" [")
    // Stores license name into licenseName variable
    var licenseName = noSpaceLicense[0]
    //Replaces space in license name with %20 OR hyphen with double hyphens to keep image link whole yet display with space/hyphen in badge
    if (licenseName.includes("-")) {
      console.log("has hyphen")
      var renderLicense = licenseName.split("-").join("--")
    } else {
      console.log("has space")
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
    var licenseSplit1 = license.split(" [")
    // Splits license code from closing square bracket and stores license name into licenseLinkCode variable
    var licenseLinkCode = licenseSplit1[1].split("]").join("")
    return `(https://choosealicense.com/licenses/${licenseLinkCode})`
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "None") {
    return "";
  } else if (license.includes("The")) {
    // Splits the license option in between name and url code in brackets, []
    var noSpaceLicense = license.split(" [")
    // Stores license name into licenseName variable
    var licenseName = noSpaceLicense[0]
    //If the license doesn't have the word "The" in it already, does not have the word 'the' preceding the license name
    return `## License\n\nThis application is covered under ${licenseName} license.`
  } else {
    var noSpaceLicense = license.split(" [")
    var licenseName = noSpaceLicense[0]
    //If the license doesn't have the word "The" in it already, has the word 'the' preceding the license name
    return `## License\n\nThis application is covered under the ${licenseName} license.`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return renderLicenseSection(`${data.license}`)
  return renderLicenseBadge(`${data.license}`, `${data.color}`) + renderLicenseLink(`${data.license}`)

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