const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
const path = require('path');
const fs = require('fs');

inquirer
    .prompt([
        //title
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?',
        },
        //github
        {
            type: 'input',
            name: 'github',
            message: 'What is your github username?',
        },
        //email
        {
            type: 'input',
            name: 'email',
            message: 'What is your email?',
        },
        // description
        {
            type: 'input',
            name: 'description',
            message: 'Description of the app?',
        },
        // installation
        {
            type: 'input',
            name: 'installation',
            message: 'How do you install the app?',
        },
        //how to use
        {
            type: 'input',
            name: 'howtouse',
            message: 'How do you use your app?',
        },

        //what liscenses used
        {
            type: 'list',
            message: 'What liscenses are you using?',
            name: 'license',
            choices: ['MIT', 'APACHE', 'No-license', 'ABC', 'EFG'],
        },
    ]).then((data) => {
        writeToFile("README.md", generateMarkdown({...data}));
      });

  function writeToFile(file, data) {
    return fs.writeFileSync(path.join(process.cwd(), file), data);
  }
    
    


