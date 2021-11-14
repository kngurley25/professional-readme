// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license) {
    return `![badge](https://img.shields.io/badge/License-${license.split("-")[0]}-brightgreen)`;
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

function renderDeploymentLink(deployment) {
  if (deployment) {
    return `${deployment}`;
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
  ${renderDeploymentLink(data.deployment)}
  ## Table of Contents
  1. [Installation](#installation)
  1. [Usage](#usage)
  1. [Contributing](#contributing)
  1. [Tests](#tests)
  1. [Reach Out](#questions)
  ${renderLicenseToC(data.license)}
  ## Installation <a name="installation"></a>
  ${data.installation}
  ## Usage <a name="usage"></a>
  ${data.usage}
  ## Contributing <a name="contributing"></a>
  ${data.contribution}
  ## Tests <a name="tests"></a>
  ${data.instructions}
  ## Questions <a name="questions"></a>
  If you have questions about this application, reach out on GitHub or send an email to address below.  
  - [GitHub Profile](github.com/${data.github})
  - ${data.email}
  ${renderLicenseSection(data.license)}
  ${renderLicenseLink(data.license)}
  
`;
}

module.exports = generateMarkdown;
