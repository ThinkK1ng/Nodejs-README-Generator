function renderLicenseBadge(license) {
  let badge;
  
  switch (license) {
    case "GNU AGPLv3":
      badge = { name: "GNU+AGPLv3", color: "orange" };
      break;
    case "GNU GPLv3":
      badge = { name: "GNU+GPLv3", color: "red" };
      break;
    case "Mozilla Public License 2.0":
      badge = { name: "Mozilla+2.0", color: "yellow" };
      break;
    case "Apache License 2.0":
      badge = { name: "Apache+2.0", color: "green" };
      break;
    case "MIT":
      badge = { name: "MIT", color: "brightgreen" };
      break;
    case "The Unlicense":
      badge = { name: "The+Unlicense", color: "blueviolet" };
      break;
  }

  return `https://img.shields.io/static/v1?label=license&message=${badge.name}&color=${badge.color})`;
}

function renderLicenseLink(license) {
  if (license === 'GNU AGPLv3') {
    return `https://www.gnu.org/licenses/agpl-3.0`
  }
  if (license === 'GNU GPLv3') {
    return `https://www.gnu.org/licenses/gpl-3.0`
  }
  if (license === 'Mozilla Public License 2.0') {
    return `https://opensource.org/licenses/MPL-2.0`
  }
  if (license === 'Apache License 2.0') {
    return `https://opensource.org/licenses/Apache-2.0`
  }
  if (license === 'MIT') {
    return `https://opensource.org/licenses/MIT`
  }
  if (license === 'The Unlicense') {
    return `https://unlicense.org/`
  }
}

function renderLicenseSection(license) {
  if (license) {
    return ``;
  } else {
    return `##License
    This Project is covered under the ${license} license. To learn more about twhat this means, click the license button.`
  }
}

function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Table of Contents:
  *[Description](#Description)
  *[Installation](#Installation)
  *[Usage Information](#Usage)
  *[Contribution](#Contribution)
  *[Test Instructions](#Tests)
  *[License](#License)
  *[GitHub](#GitHub)
  *[Email](#Email)

  ## Descritpion
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contribution
  ${data.guidelines}

  ## Tests
  ${data.instructions}

  ${renderLicenseSection(data.license)}

  ## Questions
  Have Questions about this project?
  #Github https://github.com/${data.username}
  #EMail ${data.email}

`;
}

module.exports = generateMarkdown;
