// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license) {
    return `![badge](https://img.shields.io/badge/LICENSE-${license.split("-",1)}-brightgreen)`;
  } else {
    return ``;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license) {
    return `https://opensource.org/licenses/${license}`;
  } else {
    return ``;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    return `## License
This application is is covered under ${license}. Refer to the link below for additional information.`;
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
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ${renderLicenseSection(data.license)}
  ${renderLicenseLink(data.license)}
  ## Contributing
  ${data.contribution}
  ## Tests
  ${data.instructions}
  ## Questions?
  Reach out on GitHub or send an email. 
  - GitHub: github.com/${data.github}
  - Email: ${data.email}
  
`;
}

module.exports = generateMarkdown;
