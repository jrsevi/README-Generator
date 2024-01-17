// Generate Readme Function
function generateReadme (answers) {
  return `

  # ${answers.title}

  ## Description
  ${answers.description}

  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributions](#contributions)
  - [Tests](#tests)
  - [License](#license)
  - [Questions](#questions)

  ## Installation
  ${answers.installation}

  ## Usage
  ${answers.usage}

  ## Contributions
  ${answers.contributing}

  ## Tests
  ${answers.tests}

  ## License
  ![badge](https://img.shields.io/badge/license-${answers.license}-brightgreen)

  ## Questions
  If you have any questions, please contact me at ${answers.email} or visit my GitHub page: https://github.com/${answers.github}
`;
}

module.exports = generateReadme;
