// Include packages needed for this application
const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generatePage = require('./src/page-template');
const fs = require('fs');

//creates variables
var employeeArray = [];
var role = 'Manager';

class Index {
    //creates constructor
    constructor() {
        //make index 0
        this.index = 0;
    }
    getName(role){
        inquirer
            //prompts user to input employee name
            .prompt({
                type: 'text',
                name: 'name',
                message: `What is the ${role}'s name?`
            })
            .then(({ name }) => {
                //takes name and saves it to new employee class
                this.employee = new Employee(name);
                //calls method getId with name as parameter
                this.getId(name,role)
            })
    }
    getId(name,role){
        inquirer
        //prompts user to input employee id
            .prompt({
                type: 'number',
                name: 'id',
                message: `What is the ${role}'s id?`
            })
            .then(({ id }) => {
                //takes id and saves it to new employee class
                this.employee = new Employee(name, id);
                //calls method getId with name and id as parameter
                this.getEmail(name,id,role);
            })
    }
    getEmail(name,id,role){
        inquirer
        //prompts user to input employee email
            .prompt({
                type: 'string',
                name: 'email',
                message: `What is the ${role}'s email?`
            })
            .then(({ email }) => {
                //takes email and saves it to new employee class
                this.employee = new Employee(name, id, email);
                //calls method getId with name, id and email as parameter
                this.getRole(name, id, email,role)
            })
    }
    getRole(name,id,email,role){
        //if index is zero, it goes to manager class
        if(this.index === 0){
            let role = 'Manager'
            //adds to manager class
            this.manager = new Manager(name, id, email, role);
            //call getOfficeNumber
            this.getOfficeNumber(name, id, email, role);
        } else {
            //if role is Engineer
            if (role === 'Engineer'){
                //add sto enigneer class
                this.engineer = new Engineer(name, id, email, role);
                //call getGitHub
                this.getGithub(name, id, email, role);
            } else {
                //if role is intern then add to intern class
                this.intern = new Intern(name, id, email, role);
                //call getSchool
                this.getSchool(name, id, email, role);
            }

        }
    }
    getOfficeNumber(name,id,email,role){
        //prompts user to input employee role
        inquirer
            .prompt({
                type: 'number',
                name: 'number',
                message: `What is the Manager's number?`
            })
            .then(({ number }) => {
                //takes number and saves it to manager class
                this.manager = new Manager(name, id, email, role, number);
                //pushs manager to employee array
                employeeArray.push(this.manager);
                //goes to add employee method
                this.addEmployee(employeeArray);
            })
    }
    getGithub(name,id,email,role){
        //prompts user to input employee role
        inquirer
            .prompt({
                type: 'input',
                name: 'github',
                message: "What is the Engineer's github username?"
            })
            .then(({ github }) => {
                //takes role and saves it to engineer class
                this.engineer = new Engineer(name, id, email, role, github);
                //pushs engineer to employee array
                employeeArray.push(this.engineer);
                //goes to add employee method
                this.addEmployee(employeeArray);
            })
    }
    getSchool(name,id,email,role){
        //prompts user to input employee role
        inquirer
            .prompt({
                type: 'input',
                name: 'school',
                message: "What is the Intern's school?"
            })
            .then(({ school }) => {
                //takes role and saves it to new employee class
                this.intern = new Intern(name, id, email, role, school);
                employeeArray.push(this.intern);
                // console.log(employeeArray)
                this.addEmployee(employeeArray);
                //console tables employee class
                // getRole(name,id,email,role,number)
            })
    }
    addEmployee(employees){
        inquirer
            // asks user if they want to add another employee
            .prompt({
                type: 'confirm',
                name: 'confirmAddEmployee',
                message: 'Would you like to enter another employee?',
                default: false
            })
            .then(({ confirmAddEmployee }) => {
                //if the answer is yes
                if (confirmAddEmployee) {
                    //increases index by 1 so it doesn't go to Manager class
                    this.index++;
                    //shows a new employee is being added
                    console.log(`
                        ===================
                        Add a New Employee
                        ===================
                    `);
                    // asks if the new employee is an engineer or a manager
                    inquirer
                        .prompt({
                            type: 'list',
                            name: 'role',
                            message: 'What is the employee role?',
                            choices: ['Engineer','Intern']
                        })
                        .then(({ role }) => {
                            //calls get name with role as parameter
                            this.getName(role);
                        })
                } else {
                    // if no employee needs to be added then writes file
                    writeFile(generatePage(employees));
                    console.log('File created!');
                }
            })
    }

}
//calls get name
new Index().getName(role)

//function for writing file
const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', fileContent, err => {
            // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
            if (err) {
                reject(err);
                // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
                return;
            }

            // if everything went well, resolve the Promise and send the successful data to the `.then()` method
            resolve({
                ok: true,
                message: 'File created!'
            });
        });
    });
};

module.exports = Index;
