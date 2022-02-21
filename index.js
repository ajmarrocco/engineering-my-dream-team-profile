const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');


class Index {
    //creates constructor
    constructor() {
    }
    //getName method
    getName(){
        inquirer
            //prompts user to input employee name
            .prompt({
                type: 'text',
                name: 'name',
                message: 'What is the employee name?'
            })
            .then(({ name }) => {
                //takes name and saves it to new employee class
                this.employee = new Employee(name);
                //calls method getId with name as parameter
                this.getId(name)
            })
    }
    getId(name){
        inquirer
        //prompts user to input employee id
            .prompt({
                type: 'number',
                name: 'id',
                message: 'What is the employee id?'
            })
            .then(({ id }) => {
                //takes id and saves it to new employee class
                this.employee = new Employee(name, id);
                //calls method getId with name and id as parameter
                this.getEmail(name,id);
            })
    }
    getEmail(name,id){
        inquirer
        //prompts user to input employee email
            .prompt({
                type: 'string',
                name: 'email',
                message: 'What is the employee email?'
            })
            .then(({ email }) => {
                //takes email and saves it to new employee class
                this.employee = new Employee(name, id, email);
                //calls method getId with name, id and email as parameter
                this.getRole(name, id, email)
            })
    }
    getRole(name,id,email){
            //prompts user to input employee role
        inquirer
            .prompt({
                type: 'list',
                name: 'role',
                message: 'What is the employee role?',
                choices: ['Manager','Engineer','Intern']
            })
            .then(({ role }) => {
                //takes role and saves it to new employee class
                if (role === 'Manager') {
                    this.manager = new Manager(name, id, email, role);
                    this.getOfficeNumber(name, id, email, role);
                } else if(role === 'Engineer'){
                    this.engineer = new Engineer(name, id, email, role);
                    this.getGithub(name, id, email, role);
                } else{
                    this.intern = new Intern(name, id, email, role);
                    this.getSchool(name, id, email, role);
                }
            })
    }
    getOfficeNumber(name,id,email,role){
        //prompts user to input employee role
        inquirer
            .prompt({
                type: 'number',
                name: 'number',
                message: 'What is the manager number?'
            })
            .then(({ number }) => {
                //takes role and saves it to new employee class
                this.manager = new Manager(name, id, email, role, number);
                console.table(this.manager);
                this.addEmployee();
                //console tables employee class
                // getRole(name,id,email,role,number)
            })
    }
    getGithub(name,id,email,role){
        //prompts user to input employee role
        inquirer
            .prompt({
                type: 'input',
                name: 'github',
                message: "What is the engineer's github username?"
            })
            .then(({ github }) => {
                //takes role and saves it to new employee class
                this.engineer = new Engineer(name, id, email, role, github);
                console.table(this.engineer);
                this.addEmployee();
                //console tables employee class
                // getRole(name,id,email,role,number)
            })
    }
    getSchool(name,id,email,role){
        //prompts user to input employee role
        inquirer
            .prompt({
                type: 'input',
                name: 'school',
                message: "What is the intern's school?"
            })
            .then(({ school }) => {
                //takes role and saves it to new employee class
                this.intern = new Intern(name, id, email, role, school);
                console.table(this.intern);
                this.addEmployee();
                //console tables employee class
                // getRole(name,id,email,role,number)
            })
    }
    addEmployee(){
        inquirer
            .prompt({
                type: 'confirm',
                name: 'confirmAddEmployee',
                message: 'Would you like to enter another employee?',
                default: false
            })
            .then(({ confirmAddEmployee }) => {

                if (confirmAddEmployee) {
                    this.getName();
                } else {
                    return;
                }
            })
    }

}
//calls get name
new Index().getName()

module.exports = Index;
