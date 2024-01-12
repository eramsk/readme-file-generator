const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    inquirer
  .prompt ([

    {
        type: 'input',
        message: 'enter the title of your project:',
        name: 'project-title',
      },
      {
        type: 'input',
        message: 'sections-entitled:',
        name: 'project-section',
      },
      {
        type: 'input',
        message: 'project description:',
        name: 'project-description',
      },
      {
        type: 'input',
        message: 'table of contents:',
        name: 'project-content',
      },
      {
        type: 'input',
        message: 'installation:',
        name: 'project-installation',
      },
      {
        type: 'input',
        message: 'usage:',
        name: 'project-usage',
      },
      {
        type: 'input',
        message: 'license:',
        name: 'project-license',
      },
      {
        type: 'input',
        message: 'test:',
        name: 'project-test',
      },
      {
        type: 'input',
        message: 'questions:',
        name: 'project-questions',
      },
      {
        type: 'input',
        message: 'questions:',
        name: 'project-questions',
      },
      {
        type: 'input',
        message: 'enter GitHub username:',
        name: 'project-username',
      },
      {
        type: 'input',
        message: 'enter GitHub url:',
        name: 'project-url',
      },
    ])

];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
