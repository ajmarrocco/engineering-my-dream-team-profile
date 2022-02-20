const Employee = require("./Employee");

// class Employee extends Index {
class Engineer extends Employee{
    constructor(github = 'jaimehub',role ='Engineer') {
        super();
        this.github = github;
        this.role = role;
    }
    getGithub(){
        return this.github;
    }
    getRole(){
        return this.role;
    }
}

module.exports = Engineer;