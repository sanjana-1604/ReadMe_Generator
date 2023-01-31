// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  [![${data.License}](https://img.shields.io/badge/License-${data.License}-blue.svg)](https://opensource.org/licenses/${data.License})

## Description
${data.Description}

## Table of Contents

- [Installation](#Installation)
- [Usage](#Usage)
- [License](#License)
    - [Contribution](#Contribution)
    - [Test](#Test)
    - [Question](#Question)

## Installation
To install necessary dependencies, the the following command:
    
    ${data.Installation}

## Usage
${data.Usage}

## License
This project is licensed under the ${data.License} license.

## Contributing
${data.Contribution}

## Test
To run tests, run the following command:
    
    ${data.Test}

## Questions
If you have any question about the repo,open an issue or contact me directly at [${data.email}](${data.email}). You can find more of my work at [${data.username}](${data.username}).
`;
}

module.exports = generateMarkdown;
