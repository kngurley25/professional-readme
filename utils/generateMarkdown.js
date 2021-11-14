// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license) {
    return `![badge](https://img.shields.io/badge/LICENSE-${license.split("-")[0]}-brightgreen)`;
  } else {
    return ``;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license) {
    return `This application is is covered under ${license}.  
    Refer to the link below for additional information.  
    https://opensource.org/licenses/${license}`;
  } else {
    return ``;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    return `## License <a name="license"></a>`;
  } else {
    return ``;
  }
}

function renderLicenseToC(license) {
  if (license) {
    return `1. [License](#license)`;
  } else {
    return ``;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  ${renderLicenseBadge(data.license)}
  # ${data.title}
  ## Description
  ${data.description}
  ## Table of Contents
  1. [Installation](#installation)
  1. [Usage](#usage)
  ${renderLicenseToC(data.license)}
  1. [Contributing](#contributing)
  1. [Tests](#tests)
  1. [Reach Out](#questions)
  ## Installation <a name="installation"></a>
  ${data.installation}
  ## Usage <a name="usage"></a>
  ${data.usage}
  ${renderLicenseSection(data.license)}
  ${renderLicenseLink(data.license)}
  ## Contributing <a name="contributing"></a>
  ${data.contribution}
  ## Tests <a name="tests"></a>
  ${data.instructions}
  ## Questions? <a name="questions"></a>
  Reach out on GitHub or send an email. 
  - [GitHub Profile](github.com/${data.github})
  - ${data.email}
  
`;
}

module.exports = generateMarkdown;
