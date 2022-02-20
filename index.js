const inquirer = require('inquirer');
const Employee = require('./lib/Employee');


class Index {
    constructor() {
        // this.roundNumber = 0;
        // this.isPlayerTurn = false;
        // this.enemies = [];
        // this.currentEnemy;
        // this.player;
    }
    getName(){
            inquirer
                .prompt({
                    type: 'text',
                    name: 'name',
                    message: 'What is the employee name?'
                })
                // .then(({ name }) => {
                //     this.player = new Employee(name,id,email);
                //     console.log(this.player);

                //     this.getId()
                // })
                .then(() => {
                    this.getId()
                })
    }
    getId(){
            inquirer
                .prompt({
                    type: 'number',
                    name: 'id',
                    message: 'What is the employee id?'
                })
                // .then(({ name, id }) => {
                //     this.player = new Employee(this.name, id);
                //     console.log(this.player);

                //     // this.getId()
                // })
                .then(() => {
                    this.getEmail()
                })
    }
    getEmail(){
            inquirer
                .prompt({
                    type: 'string',
                    name: 'email',
                    message: 'What is the employee email?'
                })
                .then(({ name, id, email }) => {
                    this.player = new Employee(name, id, email);
                    console.log(this.player);

                    // this.getId()
                })
                // .then(() => {
                //     this.getEmail()
                // })
    }
}

new Index().getName();

module.exports = Index;
