const inquirer = require('inquirer')
const fs = require('fs')
const MarkDown = require('./utils/generateMarkdown')


// App Questions

const questions = [
    
    {
        type: 'input',
        name: 'title',
        message: 'project title',
    },

    {
        type: 'input',
        name: 'description',
        message: 'project description',
    },

    {
        type: 'input',
        name: 'usage',
        message: 'project usage',
    },

    {
        type: 'input',
        name: 'contribution',
        message: 'contribution info',
    },

    {
        type: 'input',
        name: 'installation',
        message: 'How to start',
    },

    {
        type: 'input',
        name: 'email',
        message: 'for question(email)',
    },

    {
        type: 'input',
        name: 'github',
        message: 'for coding(github)',
    },

    {
        type: 'list',
        name: 'license',
        message: 'License?',
        choices:['MIT', 'ISC', 'GNUGPLv3'],
        filter(val) {
            return val.toLowerCase();
        }
    },

    
]

// run query function
 
function runQuery() {
    return inquirer.prompt(questions)
    .then((answers)=> {
        const mark = MarkDown.generateReadme(answers)
        fs.writeFile('README.md', mark, function(err) {
    if(err) {
        console.log('Could not save file', err);
    } else {
        console.log('Success: new README.md file generated inside the current folder');
    }
    })
    
    })

    .catch((error) => { 
        console.log(error)
    })
}

runQuery()