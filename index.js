const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    "What is your Github username?",    
    "What is your email address?",   
    "What is your project's name?",    
    "Please write a short description of your project ", 
    "What kind of license should your project have?", 
    "What commands should be run to install dependencies?",
    "What command should be run to run tests?",
    "What does the user need to know about using the repo?",
    "what does the user need to know about contributing to the repo"
   
    
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (error)=>{
        if (error)
         console.log(error)
    })
}

// function to initialize program
function init() {
    inquirer
  .prompt([
    {
        name:"username",
        message:questions[0]
    },
    {
        name:"email",
        message:questions[1]
    },
    {
        name:"title",
        message:questions[2]
    },
    {
        name:"Description",
        message:questions[3]
    },
    {
        type:'list',
        name:"License",
        message:questions[4] ,
        choices: [
            {
                value:'MIT',
                name:'MIT'
            },
            {
                value:'APACHE_2.0',
                name:'APACHE 2.0'
            },
            {
                value:'GPL',
                name:'GPL'
            },
            {
                value:'BSD_3',
                name:'BSD 3'
            },
            {
                value:'',
                name:'None'
            }],
        default:'(Use arrow keys)',
        
    },
    {
        name:"Installation",
        message:questions[5],
        default:"npm i"
    },
    {
        name:"Test",
        message:questions[6],
        default: 'npm test'
    },
    {
        name:"Usage",
        message:questions[7]
    },
    {
        name:"Contribution",
        message:questions[8]
    }
    
   
   
    
  ]) .then((data) => {
    console.log("Generating README....")
    const mdData = generateMarkdown(data)
    writeToFile(path.resolve(__dirname, "README.md"), mdData)
  })

}

// function call to initialize program
init();
