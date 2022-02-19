// const Employee = require('./lib/Employee');
const inquirer = require('inquirer');

class Index {
    getName(){
            inquirer
            .prompt({
                type: 'text',
                name: 'name',
                message: 'What is the employee name?'
            })

    }
}

new Index().getName();

//handles all the local 

module.exports = Index;
