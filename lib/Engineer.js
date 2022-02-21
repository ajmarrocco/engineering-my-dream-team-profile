const Employee = require("./Employee");

// class Employee extends Index {
class Engineer extends Employee{
    constructor(name = 'Jaime',id = 1,email="jaime@email.com", role = "Employee", github = 'jaimehub') {
        super(name,id,email,role);
        this.github = github;
        this.role = 'Engineer';
    }
    getGithub(){
        return this.github;
    }
    getRole(){
        return this.role;
    }
}

module.exports = Engineer;