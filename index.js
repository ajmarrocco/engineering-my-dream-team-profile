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
                .then(({ name }) => {
                    this.player = new Employee(name);
                    // console.log(this.player);
                    // console.log(name);

                    this.getId(name)
                })
                // .then(() => {
                //     this.getId()
                // })
    }
    getId(name){
            inquirer
                .prompt({
                    type: 'number',
                    name: 'id',
                    message: 'What is the employee id?'
                })
                .then(({ id }) => {
                    this.player = new Employee(name, id);
                    // console.log(this.player);

                    this.getEmail(name,id);
                })
                // .then(() => {
                //     this.getEmail()
                // })
    }
    getEmail(name,id){
            inquirer
                .prompt({
                    type: 'string',
                    name: 'email',
                    message: 'What is the employee email?'
                })
                .then(({ email }) => {
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
